import React, { useState } from "react";
import { sendPrompt } from "../utils/ap"; 
import ChatInput from "./Chatinput";

export default function ChatPage() {
  const [messages, setMessages] = useState([]);
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!prompt.trim()) return;

   
    setMessages((prev) => [...prev, { sender: "You", text: prompt }]);
    setLoading(true);

    
    const aiReply = await sendPrompt(prompt);

    
    setMessages((prev) => [...prev, { sender: "AI", text: aiReply }]);

    setPrompt("");
    setLoading(false);
  };

  return (
    <div className="chat-container">
      <div className="chat-area">
        <h1 className="title">Zeno.AI</h1>

        <div className="chat-messages">
          {loading && (
            <div className="message ai-message">
              <strong>AI:</strong> Thinking…
            </div>
          )}

          {messages.map((msg, index) => (
            <div
              key={index}
              className={`message ${
                msg.sender === "You" ? "user-message" : "ai-message"
              }`}
            >
              <strong>{msg.sender}: </strong> {msg.text}
            </div>
          ))}
        </div>

        <ChatInput
          handleSend={handleSend}
          prompt={prompt}
          setPrompt={setPrompt}
        />
      </div>
    </div>
  );
}
