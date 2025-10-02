import Joi from 'joi';

export const registerSchema = Joi.object({
  first_name: Joi.string().min(2).max(50).required().trim()
    .pattern(/^[a-zA-Z\s]*$/)
    .messages({
      'string.pattern.base': 'First name can only contain letters and spaces'
    }),
  last_name: Joi.string().min(2).max(50).required().trim()
    .pattern(/^[a-zA-Z\s]*$/)
    .messages({
      'string.pattern.base': 'Last name can only contain letters and spaces'
    }),
  email: Joi.string().email().required().trim().lowercase(),
  password: Joi.string().min(8).max(64).required()
    .pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)
    .messages({
      'string.pattern.base': 'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character'
    }),
  confirm_password: Joi.string().valid(Joi.ref('password')).required()
    .messages({
      'any.only': 'Passwords do not match'
    }),
  phone: Joi.string().pattern(/^\d{9,15}$/).required()
    .messages({
      'string.pattern.base': 'Please enter a valid phone number (9-15 digits)'
    }),
  company: Joi.string().min(2).max(100).required().trim(),
  role: Joi.string().valid('user', 'admin', 'agent').default('user')
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

