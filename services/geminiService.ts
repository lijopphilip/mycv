
import { GoogleGenAI } from "@google/genai";

// Assume process.env.API_KEY is configured in the environment
const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  console.warn("API_KEY not found. Please set the environment variable.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

export async function generateDescription(title: string, date: string): Promise<string> {
  const prompt = `
    You are a career coach helping someone write their personal journey timeline.
    Based on the following milestone, write a compelling and concise description (2-3 sentences) focusing on skills, learnings, and impact.
    Keep the tone professional yet personal.

    Milestone Title: "${title}"
    ${date ? `Date: "${date}"` : ''}

    Description:
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });
    return response.text.trim();
  } catch (error) {
    console.error("Error generating description with Gemini:", error);
    throw new Error("Failed to communicate with the AI model.");
  }
}
