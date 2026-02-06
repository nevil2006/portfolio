import React, { useState, useEffect, useRef } from "react";
import { askNevilAI } from "@/api/chat";

type Message = {
  text: string;
  sender: "user" | "bot";
};

const Chatbot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  // Auto-scroll when messages update
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const sendMessage = () => {
    if (!input.trim()) return;

    const userInput = input;

    // Add user message
    setMessages((prev) => [...prev, { text: userInput, sender: "user" }]);
    setInput("");
    setIsTyping(true);

    // Simulate AI typing delay
    setTimeout(() => {
      const reply = askNevilAI(userInput);
      setMessages((prev) => [...prev, { text: reply, sender: "bot" }]);
      setIsTyping(false);
    }, 600);
  };

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg shadow-lg transition z-50"
      >
        {open ? "Close" : "Ask Nevil AI"}
      </button>

      {/* Chat Window */}
      {open && (
        <div className="fixed bottom-20 right-6 bg-gray-900 text-white w-80 h-96 rounded-lg border border-blue-500 flex flex-col shadow-lg z-50">
          
          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-3 space-y-3">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${
                  msg.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`px-3 py-2 text-sm max-w-[75%] rounded-lg ${
                    msg.sender === "user"
                      ? "bg-blue-600 rounded-br-none"
                      : "bg-gray-700 rounded-bl-none"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="px-3 py-2 text-sm bg-gray-700 rounded-lg opacity-70 animate-pulse">
                  Nevil AI is typing...
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 flex gap-2 border-t border-gray-700">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              className="flex-1 px-2 py-1 bg-gray-800 border border-gray-600 rounded outline-none text-sm"
              placeholder="Ask about my portfolio, projects, AI skills..."
            />
            <button
              onClick={sendMessage}
              className="bg-blue-500 hover:bg-blue-600 px-3 py-1 rounded text-sm"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
