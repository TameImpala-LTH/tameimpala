import React, { useState, useEffect, useRef } from "react";
import "../assets/css/ChatbotPopup.css";

const GEMINI_API_KEY = "AIzaSyBluMmvk2BFRwVbNNSZRLseraYqciYYOnM"; // ✅ move to .env

function ChatbotPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "assistant", text: "Hello! I'm your EcoBot 🌱. How can I help you today?" },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const chatEndRef = useRef(null);

  // Scroll to bottom when new messages come in
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = { role: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);
    setError("");

    try {
      const response = await callGemini([...messages, userMsg]);
      if (response.error) {
        setError(response.error);
        return;
      }

      // ✅ safely extract text
      const botText =
        response?.candidates?.[0]?.content?.parts?.[0]?.text || "⚠️ No response";

      const botMsg = { role: "assistant", text: botText };
      setMessages((prev) => [...prev, botMsg]);
    } catch (err) {
      setError(`Network error: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  async function callGemini(history) {
    const model = "gemini-1.5-flash"; // ✅ safer model
    const requestBody = {
      contents: history.map((m) => ({
        role: m.role, // must be "user" or "assistant"
        parts: [{ text: m.text }],
      })),
    };

    const res = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestBody),
      }
    );

    if (!res.ok) {
      const errData = await res.json();
      return { error: errData.error?.message || `HTTP ${res.status}` };
    }
    return res.json();
  }

  return (
    <>
      {/* Floating Button */}
      <button className="chat-toggle-btn" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "✖" : "💬"}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="chat-container">
          <div className="chat-header">
            <h1>🌱 EcoBot</h1>
          </div>

          {error && <div className="error-message">{error}</div>}

          <div className="chat-messages">
            {messages.map((m, i) => (
              <div key={i} className={`message ${m.role}`}>
                <div className="message-avatar">
                  {m.role === "user" ? "👤" : "🌱"}
                </div>
                <div className="message-content">{m.text}</div>
              </div>
            ))}
            {loading && (
              <div className="typing-indicator">🌱 EcoBot is thinking...</div>
            )}
            <div ref={chatEndRef} />
          </div>

          <form className="chat-input-form" onSubmit={sendMessage}>
            <input
              type="text"
              className="chat-input"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              disabled={loading}
            />
            <button className="send-btn" type="submit" disabled={loading}>
              {loading ? "..." : "Send"}
            </button>
          </form>
        </div>
      )}
    </>
  );
}

export default ChatbotPopup;
