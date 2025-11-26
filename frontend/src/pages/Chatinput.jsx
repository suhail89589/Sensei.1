import React from "react";

export default function ChatInput({ handleSend, prompt, setPrompt }) {
  return (
    <div className="chat-input-container">
      <div className="input-wrapper">
        <input
          className="chat-input-box"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Message Gemini..."
        />
        <button className="chat-input-button" onClick={handleSend}>
          ➤
        </button>
      </div>
    </div>
  );
}
