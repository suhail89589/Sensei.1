export const formatAIResponse = (text) => {
  return text.trim().replace(/\n\s*\n/g, "\n");  
};