import React, { useState, useEffect, useRef } from "react";
import { askNevilAI } from "@/api/chat";

const Chatbot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const scrollToBottom = () => messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  useEffect(() => scrollToBottom(), [messages, isTyping]);

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMsg = `You: ${input}`;
    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    setIsTyping(true);
    setTimeout(() => {
      const reply = askNevilAI(input);
      const botMsg = `Nevil AI: ${reply}`;
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 650);
  };

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg shadow-lg transition z-50"
      >
        {open ? "Close" : "Ask Nevil AI"}
      </button>

      {open && (
        <div className="fixed bottom-20 right-6 bg-gray-900 text-white p-4 w-80 h-96 rounded-lg border border-blue-500 flex flex-col shadow-lg z-50">
          <div className="flex-1 overflow-y-auto space-y-3 pr-1">
            {messages.map((m, i) => {
              const isUser = m.startsWith("You:");
              return (
                <div key={i} className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`px-3 py-2 max-w-[75%] text-sm rounded-lg ${
                      isUser ? "bg-blue-600 text-white rounded-br-none" : "bg-gray-700 text-white rounded-bl-none"
                    }`}
                  >
                    {m.replace("You: ", "").replace("Nevil AI: ", "")}
                  </div>
                </div>
              );
            })}

            {isTyping && (
              <div className="flex justify-start">
                <div className="px-3 py-2 text-sm bg-gray-700 text-white rounded-lg opacity-70 animate-pulse">
                  Nevil AI is typing...
                </div>
              </div>
            )}

            <div ref={messagesEndRef}></div>
          </div>

          <div className="flex gap-2 mt-3">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 px-2 py-1 bg-gray-800 border border-gray-600 rounded outline-none"
              placeholder="Ask something..."
            />
            <button onClick={sendMessage} className="bg-blue-500 hover:bg-blue-600 px-3 py-1 rounded">
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
