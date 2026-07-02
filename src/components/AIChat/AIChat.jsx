import "./AIChat.css";
import { useState } from "react";
import axios from "axios";
import { API_BASE_URL } from './config';
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
export default function AIChat() {
const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);

  const [messages, setMessages] = useState([
    {
      sender: "ai",
      text:
        "👋 Hello! I'm TaxPilot AI. Ask me anything about tax products or Canadian taxes.",
    },
  ]);
const location = useLocation();

if (
  location.pathname === "/assistant" ||
  location.pathname.startsWith("/admin")
) {
  return null;
}

const sendMessage = async () => {

    if (!message.trim()) return;

    const userMessage = {
      sender: "user",
      text: message,
    };

    setMessages((prev) => [...prev, userMessage]);

    const currentMessage = message;

    setMessage("");

    setLoading(true);

    try {

      const response = await axios.post(`${API_BASE_URL}/api/chat`, {
  message: currentMessage,
});

      setMessages((prev) => [

        ...prev,

        {
          sender: "ai",
          text: response.data.answer,
        },

      ]);

    } catch (error) {

      setMessages((prev) => [

        ...prev,

        {
          sender: "ai",
          text: "Sorry, something went wrong.",
        },

      ]);

    }

    setLoading(false);

  };
    return (

    <>

      {/* Floating Button */}

     <button
  className="ai-floating-btn"
  onClick={() => navigate("/assistant")}
>

  <span className="ai-icon">✨</span>

  <span className="ai-text">
    Ask TaxPilot AI
  </span>

</button>

      {/* Chat Window */}

      {open && (

        <div className="ai-chat-window">

          <div className="ai-chat-header">

            <h3>TaxPilot AI</h3>

            <button
              onClick={() => setOpen(false)}
            >

              ✕

            </button>

          </div>

          {/* Suggested Questions */}

          <div className="ai-suggestions">

            <button
              onClick={() =>
                setMessage(
                  "I have salary income and donations. Which product should I use?"
                )
              }
            >
              Salary Income
            </button>

            <button
              onClick={() =>
                setMessage(
                  "I am a freelancer with home-office expenses."
                )
              }
            >
              Freelancer
            </button>

            <button
              onClick={() =>
                setMessage(
                  "Difference between Premier and Self-Employed"
                )
              }
            >
              Compare
            </button>

            <button
              onClick={() =>
                setMessage(
                  "What is RRSP?"
                )
              }
            >
              RRSP
            </button>

          </div>

          {/* Messages */}

          <div className="ai-chat-body">

            {messages.map((msg, index) => (

              <div

                key={index}

                className={
                  msg.sender === "user"
                    ? "user-message"
                    : "ai-message"
                }

              >

                {msg.text}

              </div>

            ))}

            {loading && (

              <div className="ai-message">

                🤖 Thinking...

              </div>

            )}

          </div>

          {/* Input */}

          <div className="ai-chat-input">

            <input

              type="text"

              placeholder="Ask about taxes, products, RRSP..."

              value={message}

              onChange={(e) =>
                setMessage(e.target.value)
              }

              onKeyDown={(e) => {

                if (e.key === "Enter") {

                  sendMessage();

                }

              }}

            />

            <button
              onClick={sendMessage}
            >

              Send

            </button>

          </div>

        </div>

      )}

    </>

  );

}