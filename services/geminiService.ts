import { GoogleGenAI } from "@google/genai";

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const sendMessageToAiDoctor = async (
  history: ChatMessage[], 
  newMessage: string
): Promise<string> => {
  try {
    // Filter history to ensure we comply with API requirements (often expects User turn first)
    // We remove the initial static "greeting" if it exists and is the first message
    let validHistory = history.filter(msg => msg.text.trim() !== "");
    
    // If the first message is from the model (the static greeting), skip it for the API context
    // to prevent "First message should be from user" errors.
    if (validHistory.length > 0 && validHistory[0].role === 'model') {
      validHistory = validHistory.slice(1);
    }

    const contents = validHistory.map(msg => ({
      role: msg.role,
      parts: [{ text: msg.text }]
    }));

    // Add the new user message
    contents.push({
      role: 'user',
      parts: [{ text: newMessage }]
    });

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: contents,
      config: {
        systemInstruction: "You are Dr. AI, the intelligent medical assistant for ChronicGPT. Your persona is professional, empathetic, observational, and clear. You are designed to help users understand their body's signals, not just list symptoms. You speak in a reassuring 'bedside manner'. \n\nIMPORTANT SAFEGUARDS:\n1. You are an AI, not a human doctor. Always maintain this boundary.\n2. If a user describes life-threatening symptoms (chest pain, severe bleeding, difficulty breathing, stroke signs), you MUST immediately tell them to call emergency services (911 or local equivalent).\n3. Keep answers concise (under 3 paragraphs) unless asked for details.\n4. Do not diagnose specific diseases; instead, suggest possibilities to discuss with a real clinician based on the patterns described.",
      }
    });

    return response.text || "I'm having a little trouble thinking clearly right now. Could you ask that again?";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I apologize, but I'm unable to connect to the ChronicGPT secure network at the moment. Please check your connection.";
  }
};