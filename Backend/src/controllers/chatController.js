
import { getChatResponse } from "../services/chatService.js";

export const chatController = async (req, res) => {
  try {
    const { prompt } = req.body;
    if (!prompt) return res.status(400).json({ message: "Prompt is required" });

    const response = await getChatResponse(prompt);
    res.status(200).json({ reply: response });
  } catch (error) {
    console.error("Chat Controller Error:", error);
    res.status(500).json({ message: error.message }); 
  }
};

