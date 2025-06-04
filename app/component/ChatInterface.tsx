"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";


interface Message {
    type: "question" | "answer";
    content: string;
}

const predefinedQuestions: { title: string; content: string }[] = [
  { title: "Tell me about yourself", content: "Tell me about yourself" },
  { title: "What is your tech stack?", content: "What is your tech stack?" },
  { title: "What kind of projects have you built?", content: "What kind of projects have you built?" },
  { title: "Are you comfortable working with backend?", content: "Are you comfortable working with backend?" }
];

const answers: Record<string, string> = {
  "Tell me about yourself": `Based in India, I'm a web developer passionate about building modern web applications that users love.`,
  "What is your tech stack?": `I use React, JavaScript, Tailwind CSS, Node.js, MongoDB, and Firebase to build modern, scalable web applications.`,
  "What kind of projects have you built?": `I built projects like a e-commerce platform, Netflix clone, food delivery app, and full-stack Task Generator Application, Manage & Track Charging Stations.`,
  "Are you comfortable working with backend?": `Yes, I develop REST APIs with Node.js, Express, MongoDB, and integrate frontend-backend for full-stack applications confidently`
};

const ChatInterface: React.FC = () => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [showChat, setShowChat] = useState<boolean>(false);
    const [isTyping, setIsTyping] = useState<boolean>(false);
    const chatEndRef = useRef<HTMLDivElement>(null);

    const handleQuestionClick = (question: string) => {
        setMessages((prev) => [...prev, { type: "question", content: question }]);
        setIsTyping(true);

        setTimeout(() => {
            setMessages((prev) => [
                ...prev,
                { type: "answer", content: answers[question] }
            ]);
            setIsTyping(false);
        }, 1000);
    };

    useEffect(() => {
        if (chatEndRef.current) {
            chatEndRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [messages, isTyping]);

    return (
        <div className="ml-4 fixed bottom-4 right-4 z-50 flex flex-col items-end">
            {/* Chat Box */}
            <AnimatePresence>
                {showChat && (
                    <motion.div
                        key="chatbox"
                        initial={{ opacity: 0, x: 300 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 300 }}
                        transition={{ duration: 0.5 }}
                        className="mb-2 max-w-full sm:w-[24rem] dark:bg-gray-800 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700"
                    >
                        <div className="p-4 border-b border-gray-200 dark:border-gray-700 relative flex items-center justify-between">
  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
    👨🏻‍💻 Chat
  </h2>
  <button
    onClick={() => setShowChat(false)}
    className="text-gray-500 text-5xl font-bold hover:text-gray-700 dark:text-white"
    aria-label="Close chat"
  >
    –
  </button>
</div>


                        <div
                            className="h-64 overflow-hidden p-4 space-y-4 flex flex-col overflow-y-auto"
                        >
                            {messages.length === 0 ? (
                                <p className="text-center text-gray-500 dark:text-gray-400">
                                    {"Nice to meet you 👋🏻 I'm Tejas. Try these questions 👇🏻"}
                                </p>
                            ) : (
                                <>
                                    {messages.map((message, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -20 }}
                                            transition={{ duration: 0.3 }}
                                            className={`flex items-start gap-2 ${
                                                message.type === "question"
                                                    ? "justify-end"
                                                    : "justify-start"
                                            }`}
                                        >
                                            {message.type === "answer" && (
                                                <span className="text-2xl">👩🏻‍💻</span>
                                            )}
                                            <div
                                                className={`max-w-[100%] p-3 rounded-lg ${
                                                    message.type === "question"
                                                        ? "dark:bg-[#121516] text-white bg-gray-900"
                                                        : "bg-gray-200 dark:bg-gray-700 text-black dark:text-white"
                                                }`}
                                            >
                                                <div className="whitespace-pre-wrap">{message.content}</div>
                                            </div>
                                            {message.type === "question" && (
                                                <span className="text-2xl">👩🏻</span>
                                            )}
                                        </motion.div>
                                    ))}

                                    {isTyping && (
                                        <div className="flex items-center gap-2 text-gray-400 text-sm animate-pulse">
                                            <span className="text-2xl">👩🏻‍💻</span>
                                            <span>Tejas is typing...</span>
                                        </div>
                                    )}
                                </>
                            )}
                            <div ref={chatEndRef} />
                        </div>

                        <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                            <div className="grid grid-cols-2 gap-2">
                                {predefinedQuestions.map((question, index) => (
                                    <button
                                        key={index}
                                        onClick={() => handleQuestionClick(question.content)}
                                        className="p-2 text-sm text-left dark:bg-[#121516] text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                                    >
                                        {question.title}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Bottom Icon */}
            {!showChat && (
                <motion.button
                    key="chat-icon"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    onClick={() => setShowChat(true)}
                    className="text-white w-16 h-16 sm:w-16 sm:h-16 rounded-full bg-neutral-800 hover:bg-black flex items-center justify-center"
                    aria-label="Open chat"
                >
                    <h1 className="text-3xl sm:text-5xl">👩🏻‍💻</h1>
                </motion.button>
            )}
        </div>
    );
};

export default ChatInterface;
