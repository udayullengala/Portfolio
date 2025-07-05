import { useState, useRef, useEffect } from "react"
import { MessageCircle, X, Send, User, Bot } from "lucide-react"

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi! I'm Uday's AI assistant. I can help you learn more about his experience, skills, and projects. What would you like to know?",
      sender: "bot",
      timestamp: new Date(),
    },
  ])
  const [inputMessage, setInputMessage] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const predefinedResponses = {
    greeting: ["hello", "hi", "hey", "good morning", "good afternoon", "good evening"],
    skills: ["skills", "technologies", "tech stack", "programming languages", "frontend", "backend", "database"],
    experience: ["experience", "work", "job", "career", "employment", "redchillies", "altissadvance"],
    projects: ["projects", "portfolio", "work samples", "madhouse", "burdavan", "freelance"],
    contact: ["contact", "email", "reach out", "get in touch", "hire", "collaboration"],
    education: ["education", "degree", "university", "college", "study", "qualification"],
  }

  const responses = {
    greeting: [
      "Hello! Great to meet you! I'm here to help you learn more about Uday. What interests you most?",
      "Hi there! Thanks for visiting Uday's portfolio. How can I assist you today?",
      "Hey! Welcome to Uday's portfolio. I'd be happy to answer any questions about his work and experience.",
    ],
    skills: [
      "Uday is a Full Stack Developer with expertise in:\n\n🎨 Frontend: React, Next.js, TypeScript, JavaScript, HTML, CSS, Bootstrap, Tailwind CSS\n\n⚙️ Backend: Python, Django, RESTful APIs\n\n🗄️ Databases: MySQL, PostgreSQL\n\nHe's passionate about creating modern, scalable web applications!",
      "Uday's technical skills span the full development stack! He specializes in React and Next.js for frontend, Python and Django for backend, and has experience with both MySQL and PostgreSQL databases. He's also proficient in modern CSS frameworks and TypeScript.",
    ],
    experience: [
      "Uday currently works as a Software Developer at redchillies.vfx (Nov 2024 - Present), where he develops and maintains web applications.\n\nPreviously at ALTISSADVANCE TECH PVT LTD:\n• Full Stack Developer (Aug 2022 - Nov 2024)\n• Frontend Developer (Apr 2022 - Aug 2022)\n\nHe has experience leading web app development, managing deployments, and handling API integrations.",
      "Uday has a solid background in web development! He's currently at redchillies.vfx working on web applications with cross-functional teams. His previous role at ALTISSADVANCE TECH involved full-stack development, deployments, and API work. He's grown from frontend specialist to full-stack expert!",
    ],
    projects: [
      "Uday has worked on some impressive freelance projects:\n\n🎯 MadHouse Media - An influencer marketing platform with user authentication, campaign management, and TDS/GST invoice calculations\n\n🏠 Burdavan Homes - A comprehensive real estate platform where users can rent, buy, or sell properties with advanced search features\n\nBoth projects showcase his full-stack capabilities!",
      "His freelance work includes MadHouse Media (influencer marketing platform) and Burdavan Homes (real estate listing site). These projects demonstrate his ability to build complete solutions from frontend UI to backend systems and database management.",
    ],
    contact: [
      "You can reach out to Uday through:\n\n📧 Email: uday.ullengala@example.com\n💼 LinkedIn: linkedin.com/in/udayullengala\n🐙 GitHub: github.com/udayullengala\n\nOr use the contact form on this page! He's always open to discussing new opportunities and collaborations.",
      "Uday is available for collaborations and opportunities! You can contact him via email, connect on LinkedIn, check out his GitHub, or simply fill out the contact form on this website. He's always excited to discuss new projects!",
    ],
    education: [
      "While I don't have specific details about Uday's educational background in my current knowledge base, his professional experience and technical skills demonstrate strong expertise in computer science and web development. For detailed educational information, I'd recommend reaching out to him directly!",
    ],
    default: [
      "That's an interesting question! While I can share information about Uday's skills, experience, and projects, I might not have specific details about that topic. Feel free to ask about his technical skills, work experience, or projects, or you can contact him directly for more detailed information!",
      "I'd love to help, but I might not have that specific information. I can tell you about Uday's technical expertise, work experience, or recent projects. What would you like to know more about?",
      "Great question! I specialize in sharing information about Uday's professional background, skills, and projects. Is there something specific about his development experience or technical capabilities you'd like to explore?",
    ],
  }

  const getResponse = (message) => {
    const lowerMessage = message.toLowerCase()

    for (const [category, keywords] of Object.entries(predefinedResponses)) {
      if (keywords.some((keyword) => lowerMessage.includes(keyword))) {
        const categoryResponses = responses[category]
        return categoryResponses[Math.floor(Math.random() * categoryResponses.length)]
      }
    }

    const defaultResponses = responses.default
    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)]
  }

  const handleSendMessage = async (e) => {
    e.preventDefault()
    if (!inputMessage.trim()) return

    const userMessage = {
      id: Date.now(),
      text: inputMessage,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputMessage("")
    setIsTyping(true)

    // Simulate typing delay
    setTimeout(
      () => {
        const botResponse = {
          id: Date.now() + 1,
          text: getResponse(inputMessage),
          sender: "bot",
          timestamp: new Date(),
        }

        setMessages((prev) => [...prev, botResponse])
        setIsTyping(false)
      },
      1000 + Math.random() * 1000,
    ) // Random delay between 1-2 seconds
  }

  const quickQuestions = [
    "What are your skills?",
    "Tell me about your experience",
    "Show me your projects",
    "How can I contact you?",
  ]

  const handleQuickQuestion = (question) => {
    setInputMessage(question)
    // Auto-send the quick question
    const userMessage = {
      id: Date.now(),
      text: question,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setIsTyping(true)

    setTimeout(() => {
      const botResponse = {
        id: Date.now() + 1,
        text: getResponse(question),
        sender: "bot",
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, botResponse])
      setIsTyping(false)
    }, 1000)
  }

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
            style={{ width: "350px", height: "500px", maxWidth: "90vw" }}
          >
            {/* Chat Header */}
            <div className="d-flex align-items-center justify-content-between p-3 border-bottom bg-dark text-white rounded-top">
              <div className="d-flex align-items-center">
                <div
                  className="bg-primary rounded-circle d-flex align-items-center justify-content-center me-2"
                  style={{ width: "32px", height: "32px" }}
                >
                  <Bot size={18} />
                </div>
                <div>
                  <h6 className="mb-0 font-mono">Uday's Assistant</h6>
                  <small className="text-light opacity-75">Online</small>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="btn btn-link text-white p-0" aria-label="Close chat">
                <X size={20} />
              </button>
            </div>

            {/* Chat Messages */}
            <div className="p-3 overflow-auto" style={{ height: "340px" }}>
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`d-flex mb-3 ${message.sender === "user" ? "justify-content-end" : "justify-content-start"}`}
                >
                  <div className={`d-flex ${message.sender === "user" ? "flex-row-reverse" : "flex-row"}`}>
                    <div
                      className={`rounded-circle d-flex align-items-center justify-content-center ${
                        message.sender === "user" ? "bg-primary ms-2" : "bg-secondary me-2"
                      }`}
                      style={{ width: "24px", height: "24px", minWidth: "24px" }}
                    >
                      {message.sender === "user" ? <User size={12} color="white" /> : <Bot size={12} color="white" />}
                    </div>
                    <div
                      className={`px-3 py-2 rounded-3 ${
                        message.sender === "user" ? "bg-primary text-white" : "bg-light border"
                      }`}
                      style={{ maxWidth: "250px", whiteSpace: "pre-line" }}
                    >
                      <div className="small">{message.text}</div>
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
                      <Bot size={12} color="white" />
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
              {messages.length === 1 && !isTyping && (
                <div className="mt-3">
                  <small className="text-muted">Quick questions:</small>
                  <div className="mt-2">
                    {quickQuestions.map((question, index) => (
                      <button
                        key={index}
                        onClick={() => handleQuickQuestion(question)}
                        className="btn btn-outline-primary btn-sm me-2 mb-2 small"
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
