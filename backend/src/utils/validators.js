import Joi from 'joi';

export const registerSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(8).max(64).required(),
  role: Joi.string().valid('user', 'admin').default('user')
});

export const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(8).max(64).required()
});

export const projectSchema = Joi.object({
  title: Joi.string().min(2).max(200).required(),
  description: Joi.string().allow('', null),
  image_url: Joi.string().uri().allow('', null),
  published_at: Joi.string().allow('', null)
});

export const researchSchema = Joi.object({
  title: Joi.string().min(2).max(200).required(),
  abstract: Joi.string().allow('', null),
  document_url: Joi.string().uri().allow('', null),
  published_at: Joi.string().allow('', null)
});

export const jobSchema = Joi.object({
  title: Joi.string().min(2).max(200).required(),
  location: Joi.string().allow('', null),
  type: Joi.string().allow('', null),
  description: Joi.string().allow('', null),
  is_active: Joi.boolean().optional()
});

