import { GoogleGenAI } from "@google/genai";

const apiKey = import.meta.env.VITE_GEMINI_API_KEY || "dummy_key";

const ai = new GoogleGenAI({
  apiKey: apiKey,
});

export default ai;