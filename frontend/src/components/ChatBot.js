import React, { useState, useRef, useEffect } from 'react';

const ChatBot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        {
            id: 1,
            text: "Hi! I'm Trinix AI Assistant. How can I help you today?",
            sender: 'bot',
            timestamp: new Date()
        }
    ]);
    const [inputMessage, setInputMessage] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSendMessage = async () => {
        if (!inputMessage.trim()) return;

        const userMessage = {
            id: Date.now(),
            text: inputMessage,
            sender: 'user',
            timestamp: new Date()
        };

        setMessages(prev => [...prev, userMessage]);
        const currentMessage = inputMessage;
        setInputMessage('');
        setIsTyping(true);
        
        try {
            // Call the backend API using the API service
            const data = "hello"
            
            const botResponse = {
                id: Date.now() + 1,
                text: data.answer || data.response || "Sorry, I couldn't process your request. Please try again.",
                sender: 'bot',
                timestamp: new Date()
            };
            
            setMessages(prev => [...prev, botResponse]);
        } catch (error) {
            console.error('Chat API error:', error);
            // Fallback to local responses
            const botResponse = {
                id: Date.now() + 1,
                text: getBotResponse(currentMessage),
                sender: 'bot',
                timestamp: new Date()
            };
            setMessages(prev => [...prev, botResponse]);
        } finally {
            setIsTyping(false);
        }
    };

    const getBotResponse = (message) => {
        const lowerMessage = message.toLowerCase();
        
        if (lowerMessage.includes('service') || lowerMessage.includes('what do you do')) {
            return "We offer comprehensive technology solutions including Web Development, Mobile App Development, and Cloud Solutions. Would you like to know more about any specific service?";
        } else if (lowerMessage.includes('contact') || lowerMessage.includes('reach')) {
            return "You can reach us through our contact page or call us directly. Would you like me to help you get in touch with our team?";
        } else if (lowerMessage.includes('price') || lowerMessage.includes('cost')) {
            return "Our pricing varies based on project requirements. I'd be happy to connect you with our team for a personalized quote. Would you like to schedule a consultation?";
        } else if (lowerMessage.includes('hello') || lowerMessage.includes('hi')) {
            return "Hello! Welcome to Trinix. I'm here to help you learn more about our services and how we can help transform your business. What would you like to know?";
        } else {
            return "That's a great question! I'd love to connect you with one of our specialists who can provide detailed information. Would you like me to arrange a consultation for you?";
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage();
        }
    };

    const styles = {
        chatBotContainer: {
            position: 'fixed',
            bottom: '24px',
            right: '24px',
            zIndex: 1000,
            fontFamily: "'Inter', system-ui, sans-serif"
        },
        chatIcon: {
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
            color: 'white',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '24px',
            boxShadow: '0 8px 32px rgba(99, 102, 241, 0.3)',
            transition: 'all 0.3s ease',
            transform: isOpen ? 'scale(0.9)' : 'scale(1)'
        },
        chatWindow: {
            position: 'absolute',
            bottom: '80px',
            right: '0',
            width: '380px',
            height: '500px',
            background: 'white',
            borderRadius: '20px',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
            border: '1px solid #e2e8f0',
            display: isOpen ? 'flex' : 'none',
            flexDirection: 'column',
            overflow: 'hidden',
            transform: isOpen ? 'translateY(0) scale(1)' : 'translateY(10px) scale(0.95)',
            opacity: isOpen ? 1 : 0,
            transition: 'all 0.3s ease'
        },
        chatHeader: {
            background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
            color: 'white',
            padding: '20px 24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
        },
        headerInfo: {
            display: 'flex',
            alignItems: 'center',
            gap: '12px'
        },
        botAvatar: {
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '18px'
        },
        headerText: {
            display: 'flex',
            flexDirection: 'column'
        },
        botName: {
            fontWeight: '600',
            fontSize: '16px',
            marginBottom: '2px'
        },
        botStatus: {
            fontSize: '12px',
            opacity: 0.9
        },
        closeButton: {
            background: 'none',
            border: 'none',
            color: 'white',
            fontSize: '24px',
            cursor: 'pointer',
            padding: '0',
            opacity: 0.8,
            transition: 'opacity 0.2s ease'
        },
        messagesContainer: {
            flex: 1,
            padding: '24px',
            overflowY: 'auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            background: '#f8fafc'
        },
        message: {
            maxWidth: '80%',
            padding: '12px 16px',
            borderRadius: '18px',
            fontSize: '14px',
            lineHeight: '1.4',
            wordWrap: 'break-word'
        },
        userMessage: {
            background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
            color: 'white',
            alignSelf: 'flex-end',
            borderBottomRightRadius: '6px'
        },
        botMessage: {
            background: 'white',
            color: '#334155',
            alignSelf: 'flex-start',
            border: '1px solid #e2e8f0',
            borderBottomLeftRadius: '6px'
        },
        typingIndicator: {
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '12px 16px',
            background: 'white',
            border: '1px solid #e2e8f0',
            borderRadius: '18px',
            borderBottomLeftRadius: '6px',
            alignSelf: 'flex-start',
            maxWidth: '80px'
        },
        typingDot: {
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            background: '#64748b',
            animation: 'typing 1.4s infinite ease-in-out'
        },
        inputContainer: {
            padding: '20px 24px',
            borderTop: '1px solid #e2e8f0',
            background: 'white'
        },
        inputWrapper: {
            display: 'flex',
            gap: '12px',
            alignItems: 'flex-end'
        },
        messageInput: {
            flex: 1,
            border: '1px solid #e2e8f0',
            borderRadius: '12px',
            padding: '12px 16px',
            fontSize: '14px',
            outline: 'none',
            resize: 'none',
            minHeight: '20px',
            maxHeight: '100px',
            lineHeight: '1.4',
            fontFamily: 'inherit',
            transition: 'border-color 0.2s ease'
        },
        sendButton: {
            background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
            color: 'white',
            border: 'none',
            borderRadius: '12px',
            padding: '12px 16px',
            cursor: 'pointer',
            fontSize: '16px',
            transition: 'all 0.2s ease',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }
    };

    // Add CSS animations
    useEffect(() => {
        const style = document.createElement('style');
        style.textContent = `
            @keyframes typing {
                0%, 60%, 100% { transform: translateY(0); opacity: 0.4; }
                30% { transform: translateY(-10px); opacity: 1; }
            }
            
            .typing-dot-1 { animation-delay: 0ms; }
            .typing-dot-2 { animation-delay: 200ms; }
            .typing-dot-3 { animation-delay: 400ms; }
            
            .chat-messages::-webkit-scrollbar {
                width: 6px;
            }
            
            .chat-messages::-webkit-scrollbar-track {
                background: #f1f5f9;
                border-radius: 3px;
            }
            
            .chat-messages::-webkit-scrollbar-thumb {
                background: #cbd5e1;
                border-radius: 3px;
            }
            
            .chat-messages::-webkit-scrollbar-thumb:hover {
                background: #94a3b8;
            }
        `;
        document.head.appendChild(style);
        
        return () => {
            document.head.removeChild(style);
        };
    }, []);

    return (
        <div style={styles.chatBotContainer}>
            {/* Chat Window */}
            <div style={styles.chatWindow}>
                {/* Header */}
                <div style={styles.chatHeader}>
                    <div style={styles.headerInfo}>
                        <div style={styles.botAvatar}>🤖</div>
                        <div style={styles.headerText}>
                            <div style={styles.botName}>Trinix AI Assistant</div>
                            <div style={styles.botStatus}>Online • Typically replies instantly</div>
                        </div>
                    </div>
                    <button 
                        style={styles.closeButton}
                        onClick={() => setIsOpen(false)}
                        onMouseEnter={(e) => e.target.style.opacity = '1'}
                        onMouseLeave={(e) => e.target.style.opacity = '0.8'}
                    >
                        ×
                    </button>
                </div>

                {/* Messages */}
                <div 
                    style={styles.messagesContainer} 
                    className="chat-messages"
                >
                    {messages.map((message) => (
                        <div
                            key={message.id}
                            style={{
                                ...styles.message,
                                ...(message.sender === 'user' ? styles.userMessage : styles.botMessage)
                            }}
                        >
                            {message.text}
                        </div>
                    ))}
                    
                    {isTyping && (
                        <div style={styles.typingIndicator}>
                            <div style={{ ...styles.typingDot, animationDelay: '0ms' }}></div>
                            <div style={{ ...styles.typingDot, animationDelay: '200ms' }}></div>
                            <div style={{ ...styles.typingDot, animationDelay: '400ms' }}></div>
                        </div>
                    )}
                    
                    <div ref={messagesEndRef} />
                </div>

                {/* Input */}
                <div style={styles.inputContainer}>
                    <div style={styles.inputWrapper}>
                        <textarea
                            style={{
                                ...styles.messageInput,
                                borderColor: inputMessage ? '#6366f1' : '#e2e8f0'
                            }}
                            value={inputMessage}
                            onChange={(e) => setInputMessage(e.target.value)}
                            onKeyPress={handleKeyPress}
                            placeholder="Type your message..."
                            rows={1}
                        />
                        <button
                            style={{
                                ...styles.sendButton,
                                opacity: inputMessage.trim() ? 1 : 0.5,
                                cursor: inputMessage.trim() ? 'pointer' : 'not-allowed'
                            }}
                            onClick={handleSendMessage}
                            disabled={!inputMessage.trim()}
                            onMouseEnter={(e) => {
                                if (inputMessage.trim()) {
                                    e.target.style.transform = 'scale(1.05)';
                                }
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.transform = 'scale(1)';
                            }}
                        >
                            ➤
                        </button>
                    </div>
                </div>
            </div>

            {/* Chat Icon */}
            <button
                style={styles.chatIcon}
                onClick={() => setIsOpen(!isOpen)}
                onMouseEnter={(e) => {
                    if (!isOpen) {
                        e.target.style.transform = 'scale(1.1)';
                        e.target.style.boxShadow = '0 12px 40px rgba(99, 102, 241, 0.4)';
                    }
                }}
                onMouseLeave={(e) => {
                    if (!isOpen) {
                        e.target.style.transform = 'scale(1)';
                        e.target.style.boxShadow = '0 8px 32px rgba(99, 102, 241, 0.3)';
                    }
                }}
            >
                {isOpen ? '×' : '💬'}
            </button>
        </div>
    );
};

export default ChatBot;