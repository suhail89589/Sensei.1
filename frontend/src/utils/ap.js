import axios from "axios";

export const sendPrompt = async (prompt) => {
  try {
    const response = await axios.post("http://localhost:7000/api/chat", {
      prompt,
    });
    return response.data.reply;
  } catch (error) {
    console.error("Api Error:", error);
    return "❌ Backend error — Check server!";
  }
};
