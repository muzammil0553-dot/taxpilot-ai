import "./AssistantPage.css";

import { useState, useRef, useEffect } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";

import Navbar from "../../components/Navbar/Navbar";

export default function AssistantPage() {

    const [message, setMessage] = useState("");

    const [loading, setLoading] = useState(false);

    const [messages, setMessages] = useState([
        {
            sender: "ai",
            text: "👋 Welcome to TaxPilot AI. Ask me anything about Canadian taxes or TaxPilot products."
        }
    ]);

    const messagesRef = useRef(null);

    useEffect(() => {

        if (messagesRef.current) {

            messagesRef.current.scrollTop =
                messagesRef.current.scrollHeight;

        }

    }, [messages, loading]);



    const sendMessage = async () => {

        if (!message.trim()) return;

        const userMessage = {
            sender: "user",
            text: message
        };

        setMessages(prev => [...prev, userMessage]);

        const currentMessage = message;

        setMessage("");

        setLoading(true);

        try {

           const response = await axios.post(
  "https://taxpilot-ai-production.up.railway.app/api/chat",
  {
    message: currentMessage,
  }
);

            setMessages(prev => [

                ...prev,

                {

                    sender: "ai",

                    text: response.data.answer,

                    product: response.data.product || null,

                    comparison: response.data.comparison || null

                }

            ]);

        }

        catch {

            setMessages(prev => [

                ...prev,

                {

                    sender: "ai",

                    text: "Sorry, I couldn't process your request."

                }

            ]);

        }

        setLoading(false);

    };



    return (

        <>

            <Navbar />

            <div className="assistant-page">

                <div className="assistant-layout">

                    {/* Sidebar */}

                    <aside className="assistant-sidebar">

                        <button

                            className="assistant-new-chat"

                            onClick={() =>

                                setMessages([

                                    {

                                        sender: "ai",

                                        text: "👋 Hello! I'm TaxPilot AI. How can I help you today?"

                                    }

                                ])

                            }

                        >

                            ✨ New Chat

                        </button>

                        <div className="assistant-sidebar-section">

                            <h4>Quick Questions</h4>

                            <ul>

                                <li onClick={() => setMessage("I have salary income and donations.")}>
                                    💼 Salary Income
                                </li>

                                <li onClick={() => setMessage("I am self employed.")}>
                                    💻 Self Employed
                                </li>

                                <li onClick={() => setMessage("Compare Deluxe and Premier.")}>
                                    📊 Compare Plans
                                </li>

                                <li onClick={() => setMessage("Explain RRSP.")}>
                                    📘 RRSP
                                </li>

                            </ul>

                        </div>

                        <div className="assistant-sidebar-section">

                            <h4>Categories</h4>

                            <ul>

                                <li>🧾 Tax Filing</li>

                                <li>💰 Investments</li>

                                <li>🏠 Rental Income</li>

                                <li>💼 Business</li>

                                <li>🏥 Medical Expenses</li>

                            </ul>

                        </div>

                    </aside>
                                        {/* Chat Area */}

                    <main className="assistant-chat">

                        {/* Header */}

                        <div className="assistant-chat-header">

                            <div className="assistant-chat-info">

                                <div>

                                    <h3>TaxPilot AI</h3>

                                    <span>● Online</span>

                                </div>

                            </div>

                            <button

                                className="assistant-clear-btn"

                                onClick={() =>

                                    setMessages([

                                        {

                                            sender: "ai",

                                            text: "👋 Hello! I'm TaxPilot AI. How can I help you today?"

                                        }

                                    ])

                                }

                            >

                                New Chat

                            </button>

                        </div>

                        {/* Messages */}

                        <div

                            className="assistant-messages"

                            ref={messagesRef}

                        >

                            {messages.map((msg, index) => (

                                <div

                                    key={index}

                                    className={

                                        msg.sender === "user"

                                            ? "assistant-user-row"

                                            : "assistant-ai-row"

                                    }

                                >

                                    <div

                                        className={

                                            msg.sender === "user"

                                                ? "assistant-user-message"

                                                : "assistant-ai-message"

                                        }

                                    >

                                       <div className="message-text">
    {msg.text}
</div>

                                        {msg.product && (

                                            <div className="assistant-product-card">

                                                <div className="assistant-product-header">

                                                    <div>

                                                        <span className="assistant-badge-product">

                                                            Recommended

                                                        </span>

                                                        <h3>

                                                            {msg.product.name}

                                                        </h3>

                                                    </div>

                                                    <h2>

                                                        CAD ${msg.product.price}

                                                    </h2>

                                                </div>

                                                <p className="assistant-product-description">

                                                    {msg.product.description}

                                                </p>

                                                <div className="assistant-features">

                                                    {msg.product.salaryIncome && <span>Salary</span>}

                                                    {msg.product.investmentIncome && <span>Investment</span>}

                                                    {msg.product.rentalIncome && <span>Rental</span>}

                                                    {msg.product.businessExpenses && <span>Business</span>}

                                                    {msg.product.medicalExpenses && <span>Medical</span>}

                                                    {msg.product.expertHelp && <span>Expert Help</span>}

                                                </div>

                                                <Link

                                                    to={`/products/${msg.product.id}`}

                                                    className="assistant-view-btn"

                                                >

                                                    View Details →

                                                </Link>

                                            </div>

                                        )}

                                        <small className="message-time">

                                            {new Date().toLocaleTimeString([], {

                                                hour: "2-digit",

                                                minute: "2-digit"

                                            })}

                                        </small>

                                    </div>

                                </div>

                            ))}

                            {loading && (

                                <div className="assistant-ai-row">

                                    <div className="assistant-ai-message">

                                        <div className="typing">

                                            <span></span>

                                            <span></span>

                                            <span></span>

                                        </div>

                                    </div>

                                </div>

                            )}

                        </div>
                                                {/* Fixed Bottom Input */}

                        <div className="assistant-input-wrapper">

                            <div className="assistant-input">

                                <input
                                    type="text"
                                    placeholder="Message TaxPilot AI..."
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    onKeyDown={(e) => {

                                        if (e.key === "Enter") {

                                            sendMessage();

                                        }

                                    }}
                                />

                                <button onClick={sendMessage}>

                                    ➜

                                </button>

                            </div>

                        </div>

                    </main>

                </div>

            </div>

        </>

    );

}