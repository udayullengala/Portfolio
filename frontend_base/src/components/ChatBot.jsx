import { useState, useRef, useEffect } from "react"
import { MessageCircle, X, Send, User, Bot } from "lucide-react"
import axios from 'axios'
import ReactMarkdown from 'react-markdown';
import { BASE_URL } from "../utils/config";

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(() => {
        const hasOpened = localStorage.getItem('chatbotOpened');
        return hasOpened ? false : true;
    });
    const [messages, setMessages] = useState([])
    const [inputMessage, setInputMessage] = useState("")
    const [isTyping, setIsTyping] = useState(false)
    const messagesEndRef = useRef(null)

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }

    useEffect(() => {
        scrollToBottom()
    }, [messages])

    const getResponse = (message) => {
        setIsTyping(true)
        const form_data = new FormData()
        form_data.append('message', message)
        form_data.append('history', JSON.stringify(messages))
        axios.post(`${BASE_URL}/api/chat/`, form_data)
        .then((resp) => {
            console.log(resp)
            const botResponse = {
                role: 'system',
                content: resp?.data?.reply
            }
            setMessages((prev) => [...prev, botResponse])
        })
        .catch((error) => {
            console.log(error)
        })
        .finally(() => {
            setIsTyping(false)
        })
    }

    const handleSendMessage = async (e) => {
        e.preventDefault()
        if (!inputMessage.trim()) return

        const userMessage = {
            role: 'user',
            content: inputMessage
        }

        setMessages((prev) => [...prev, userMessage])
        setInputMessage("")
        setIsTyping(true)
        getResponse(inputMessage)
    }

    const quickQuestions = [
        "What technologies do you work with?",
        "Can you walk me through your experience?",
        "Could you show me some of your recent projects?",
        "What's the best way to get in touch with you?",
    ];


    const handleQuickQuestion = (question) => {
        setInputMessage(question)

        const userMessage = {
            role: 'user',
            content: question
        }
        
        setMessages((prev) => [...prev, userMessage])
        setInputMessage("")
        getResponse(question)
    }

     useEffect(() => {
        if (isOpen) { 
            localStorage.setItem('chatbotOpened', 'true');
        }
    }, [isOpen]);

    return (
        <>
            {/* Chat Widget */}
            <div className="position-fixed bottom-0 end-0 p-3" style={{ zIndex: 1050 }}>
                {!isOpen && (
                    <button
                        onClick={() => setIsOpen(true)}
                        className="btn btn-primary rounded-circle d-flex align-items-center justify-content-center shadow-lg"
                        style={{ width: "60px", height: "60px" }}
                        aria-label="Open chat"
                    >
                        <MessageCircle size={24} />
                    </button>
                )}

                {isOpen && (
                    <div
                        className="bg-white border rounded-3 shadow-lg"
                        style={{ width: "450px", height: "600px", maxWidth: "90vw" }}
                    >
                        {/* Chat Header */}
                        <div className="d-flex align-items-center justify-content-between p-3 border-bottom bg-dark text-white rounded-top">
                            <div className="d-flex align-items-center">
                                <div
                                    className="bg-primary rounded-circle d-flex align-items-center justify-content-center me-2"
                                    style={{ width: "32px", height: "32px" }}
                                >
                                    <Bot size={20} />
                                </div>
                                <div>
                                    <h6 className="mb-0 font-mono">Virtual Me</h6>
                                    <small className="text-light opacity-75">Online</small>
                                </div>
                            </div>
                            <button onClick={() => setIsOpen(false)} className="btn btn-link text-white p-0" aria-label="Close chat">
                                <X size={20} />
                            </button>
                        </div>

                        {/* Chat Messages */}
                        <div className="p-3 overflow-auto" style={{ height: "440px" }}>
                            {messages.map((message) => (
                                <div
                                    key={message.id}
                                    className={`d-flex mb-3 ${message.role === "user" ? "justify-content-end" : "justify-content-start"}`}
                                >
                                    <div className={`d-flex ${message.role === "user" ? "flex-row-reverse" : "flex-row"}`}>
                                        <div
                                            className={`rounded-circle d-flex align-items-center justify-content-center ${message.role === "user" ? "bg-primary ms-2" : "bg-secondary me-2"
                                                }`}
                                            style={{ width: "24px", height: "24px", minWidth: "24px" }}
                                        >
                                            {message.role === "user" ? <User size={18} color="white" /> : <Bot size={18} color="white" />}
                                        </div>
                                        <div
                                            className={`px-3 py-2 rounded-3 ${message.role === "user" ? "bg-primary text-white" : "bg-light border"
                                                }`}
                                            style={{ maxWidth: "280px", whiteSpace: "pre-line" }}
                                        >
                                            <div className="small"><ReactMarkdown>{message.content}</ReactMarkdown></div>
                                        </div>
                                    </div>
                                </div>
                            ))}

                            {isTyping && (
                                <div className="d-flex justify-content-start mb-3">
                                    <div className="d-flex">
                                        <div
                                            className="bg-secondary rounded-circle d-flex align-items-center justify-content-center me-2"
                                            style={{ width: "24px", height: "24px" }}
                                        >
                                            <Bot size={18} color="white" />
                                        </div>
                                        <div className="bg-light border px-3 py-2 rounded-3">
                                            <div className="d-flex align-items-center">
                                                <div
                                                    className="spinner-grow spinner-grow-sm me-1"
                                                    style={{ width: "8px", height: "8px" }}
                                                    role="status"
                                                ></div>
                                                <div
                                                    className="spinner-grow spinner-grow-sm me-1"
                                                    style={{ width: "8px", height: "8px" }}
                                                    role="status"
                                                ></div>
                                                <div
                                                    className="spinner-grow spinner-grow-sm"
                                                    style={{ width: "8px", height: "8px" }}
                                                    role="status"
                                                ></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Quick Questions */}
                            {messages.length === 0 && !isTyping && (
                                <div>
                                    <small className="text-muted">Quick questions:</small>
                                    <div className="mt-2">
                                        {quickQuestions.map((question, index) => (
                                            <button
                                                key={index}
                                                onClick={() => handleQuickQuestion(question)}
                                                className="btn btn-outline-primary btn-sm me-2 mb-2 small text-left"
                                            >
                                                {question}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}

                            <div ref={messagesEndRef} />
                        </div>

                        {/* Chat Input */}
                        <div className="border-top p-3">
                            <form onSubmit={handleSendMessage} className="d-flex">
                                <input
                                    type="text"
                                    value={inputMessage}
                                    onChange={(e) => setInputMessage(e.target.value)}
                                    placeholder="Type your message..."
                                    className="form-control me-2"
                                    disabled={isTyping}
                                />
                                <button
                                    type="submit"
                                    disabled={!inputMessage.trim() || isTyping}
                                    className="btn btn-primary d-flex align-items-center justify-content-center"
                                    style={{ minWidth: "40px" }}
                                >
                                    <Send size={16} />
                                </button>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}

export default Chatbot
