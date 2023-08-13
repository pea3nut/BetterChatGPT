export const officialAPIEndpoint = 'https://api.openai.com/v1/chat/completions';
const customAPIEndpoint =
  import.meta.env.VITE_CUSTOM_API_ENDPOINT || 'https://gpt-api.pea3nut.org/v1/chat/completions';
export const defaultAPIEndpoint =
  import.meta.env.VITE_DEFAULT_API_ENDPOINT || customAPIEndpoint;

export const availableEndpoints = [customAPIEndpoint, officialAPIEndpoint];
