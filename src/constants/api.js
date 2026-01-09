// API configuration constants for OpenRouter Chatbot

export const API_URL = 'https://openrouter.ai/api/v1/chat/completions';

// Default headers with every API request
export const fallbackHeaders = {
  'Content-Type': 'application/json',
  'X-Title': 'OpenRouter Chatbot', // Application identifier for OpenRouter
};

// Maximum number of characters allowed in file attachments to avoid API limits
export const MAX_FILE_CHARS = 120000;

// hola gnomooo (L)