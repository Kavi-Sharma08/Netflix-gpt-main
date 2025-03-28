import OpenAI from "openai";
const client = new OpenAI({
    baseURL: import.meta.env.VITE_BASE_URL,
    apiKey: import.meta.env.VITE_API_KEY ,
    dangerouslyAllowBrowser: true
});
export default client;