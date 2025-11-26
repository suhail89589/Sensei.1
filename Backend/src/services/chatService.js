import { genAI } from "../config/Gemini.js";

export const getChatResponse = async (prompt) => {
  try {
    console.log("Service HIT");

    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    const result = await model.generateContent(prompt);

    return result.response.text();
  } catch (error) {
    console.error("Service ERROR:", error);
    throw error;
  }
};
