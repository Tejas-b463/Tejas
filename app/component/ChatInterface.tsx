"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BsDash } from "react-icons/bs";

interface Message {
    type: "question" | "answer";
    content: string;
}

const predefinedQuestions: { title: string; content: string }[] = [
    { title: "Tell me about yourself", content: "Tell me about yourself" },
    { title: "What is your proudest project?", content: "What is your proudest project?" },
    { title: "What is your biggest achievement?", content: "What is your biggest achievement?" },
    { title: "What is your tech stack?", content: "What is your tech stack?" },
];

const answers: Record<string, string> = {
    "Tell me about yourself": `Based in India, I'm a web developer passionate about building modern web applications that users love.`,
    "What is your proudest project?": `I have worked on many projects, but the one I'm most proud of is a real-time chat platform called Talko. You can visit for more details.`,
    "What is your biggest achievement?": `My biggest achievement is successfully helping countless developers turn their ideas into reality. I take pride in providing detailed, practical solutions while teaching best practices and modern development techniques. Every successful project and every developer I help grow is an achievement I cherish.`,
    "What is your tech stack?": `My tech stack includes React.js and JavaScript for frontend development, Tailwind CSS for styling, Node.js as a backend with MongoDB as the database, and Firebase for additional backend functionality. I stay updated with the latest technologies and best practices to provide the most current and effective solutions.`,
};

const ChatInterface: React.FC = () => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [showChat, setShowChat] = useState<boolean>(false);
    const chatEndRef = useRef<HTMLDivElement>(null);

    const handleQuestionClick = (question: string) => {
        setMessages((prev) => [
            ...prev,
            { type: "question", content: question },
            { type: "answer", content: answers[question] },
        ]);
    };

    // Scroll to bottom whenever messages change
    useEffect(() => {
        if (chatEndRef.current) {
            chatEndRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [messages]);

    return (
        <div className="ml-12 fixed bottom-4 right-4 z-50">
            <AnimatePresence>
                {showChat && (
                    <motion.div
                        key="chatbox"
                        initial={{ opacity: 0, x: 300 }}  // Initial position off-screen to the right
                        animate={{ opacity: 1, x: 0 }}  // Slide in to position
                        exit={{ opacity: 0, x: 300 }}  // Slide out to the right
                        transition={{ duration: 0.5 }}
                        className="mb-4 max-w-full sm:w-96 w-[90%] dark:bg-gray-800 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700"
                    >
                        <div className="p-4 border-b border-gray-200 dark:border-gray-700 relative">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                                👨🏻‍💻 Chat
                            </h2>
                            <button
                                onClick={() => setShowChat(false)}
                                className="font-bold text-5xl text-gray-500 hover:text-gray-700 dark:text-white absolute top-2 right-2 sm:right-4 md:right-6"
                            >
                                <BsDash />
                            </button>
                        </div>

                        <div
                            className="h-96 overflow-hidden p-4 space-y-4"
                            style={{ display: "flex", flexDirection: "column", overflowY: "auto" }}
                        >
                            {messages.length === 0 ? (
                                <div >
                                    <p className="text-center text-gray-500 dark:text-gray-400">{"Nice to meet you 👋 I'm Tejas. Try these questions 👇"}</p>
                                </div>
                            ) : (
                                messages.map((message, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        transition={{ duration: 0.3 }}
                                        className={`flex ${message.type === "question" ? "justify-end" : "justify-start"}`}
                                    >
                                        <div
                                            className={`max-w-[100%] p-3 rounded-lg ${message.type === "question"
                                                ? "dark:bg-[#121516] text-white"
                                                : "dark:text-gray-200"
                                                }`}
                                        >
                                            <div className="whitespace-pre-wrap">{message.content}</div>
                                        </div>
                                    </motion.div>
                                ))
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

            <AnimatePresence>
                <motion.button
                    key="chatbox"
                    initial={{ opacity: 0, x: 300 }}  // Initial position off-screen to the right
                    animate={{ opacity: 1, x: 0 }}  // Slide in to position
                    exit={{ opacity: 0, x: 300 }}  // Slide out to the right
                    transition={{ duration: 0.5 }}
                    onClick={() => setShowChat(!showChat)}
                    className="text-white w-16 h-16 sm:w-16 sm:h-16 rounded-full bg-neutral-800 hover:bg-black flex items-center justify-center"
                >
                    <h1 className="text-2xl sm:text-5xl">👨🏻‍💻</h1>
                </motion.button>
            </AnimatePresence>
        </div>
    );
};

export default ChatInterface;
