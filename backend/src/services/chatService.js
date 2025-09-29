import { ChatOpenAI } from '@langchain/openai';
import { GoogleGenerativeAIEmbeddings } from '@langchain/google-genai';
import { Pinecone } from '@pinecone-database/pinecone';

const sessionHistories = {};

async function transformQuery(question, history = []) {
  const llm = new ChatOpenAI({
    openAIApiKey: process.env.OPENAI_API_KEY,
    model: 'gpt-5-mini',
    temperature: 0.2,
  });
  const prompt = 'You are a query rewriting expert. Given the chat history and the latest user question, rephrase the latest question into a complete, standalone English question that can be understood without any chat history. Only output the rewritten question and nothing else.';
  const messages = [
    { role: 'system', content: prompt },
    ...history,
    { role: 'user', content: question },
  ];
  const response = await llm.invoke(messages);
  return response.content;
}

export async function chatHandler(question, sessionId = 'default') {
  if (!sessionHistories[sessionId]) sessionHistories[sessionId] = [];
  const history = sessionHistories[sessionId];

  const rewrittenQuery = await transformQuery(question, history);

  const embeddings = new GoogleGenerativeAIEmbeddings({
    apiKey: process.env.GEMINI_API_KEY,
    model: 'text-embedding-004',
  });
  const queryVector = await embeddings.embedQuery(rewrittenQuery);

  const pinecone = new Pinecone();
  const pineconeIndex = pinecone.Index(process.env.PINECONE_INDEX_NAME);
  const searchResults = await pineconeIndex.query({
    topK: 10,
    vector: queryVector,
    includeMetadata: true,
  });
  const context = (searchResults.matches || [])
    .map((m) => m.metadata?.text || '')
    .filter(Boolean)
    .join('\n\n---\n\n');

  if (!context || context.trim().length === 0) {
    const fallback = 'I couldn’t find the details right now.';
    history.push({ role: 'user', content: question });
    history.push({ role: 'assistant', content: fallback });
    return fallback;
  }

  const llm = new ChatOpenAI({
    openAIApiKey: process.env.OPENAI_API_KEY,
    model: 'gpt-5-mini',
    temperature: 0.2,
  });
  const prompt = `You are a helpful assistant. Only use the provided context to answer.\n\nContext: ${context}`;
  const messages = [
    { role: 'system', content: prompt },
    ...history,
    { role: 'user', content: question },
  ];
  const response = await llm.invoke(messages);

  history.push({ role: 'user', content: question });
  history.push({ role: 'assistant', content: response.content });
  return response.content;
}


