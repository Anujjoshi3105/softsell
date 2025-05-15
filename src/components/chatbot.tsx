"use client";

import type React from "react";
import { useState, useRef, useEffect, Fragment } from "react";
import { MessageSquare, X, Send } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
  ChatSession,
} from "@google/generative-ai";
import { Badge } from "./ui/badge";

interface Message {
  id: string;
  content: string;
  sender: "user" | "bot";
  timestamp: Date;
}

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [input, setInput] = useState<string>("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const genAI = useRef<GoogleGenerativeAI | null>(null);
  const chat = useRef<ChatSession | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Initialize Gemini API
    if (!process.env.NEXT_PUBLIC_GEMINI_API_KEY) {
      console.error("GEMINI_API_KEY is not defined");
      return;
    }

    genAI.current = new GoogleGenerativeAI(
      process.env.NEXT_PUBLIC_GEMINI_API_KEY
    );
    const model = genAI.current.getGenerativeModel({ model: "gemini-2.0-flash" });

    chat.current = model.startChat({
      history: [],
      generationConfig: {
        temperature: 0.9,
        topP: 1,
        topK: 1,
        maxOutputTokens: 2048,
      },
      safetySettings: [
        {
          category: HarmCategory.HARM_CATEGORY_CIVIC_INTEGRITY,
          threshold: HarmBlockThreshold.BLOCK_NONE,
        },
        {
          category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
          threshold: HarmBlockThreshold.BLOCK_NONE,
        },
        {
          category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
          threshold: HarmBlockThreshold.BLOCK_NONE,
        },
        {
          category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
          threshold: HarmBlockThreshold.BLOCK_NONE,
        },
      ],
    });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (!isOpen && messages.length === 0) {
      setMessages([
        {
          id: Date.now().toString(),
          content:
            "Welcome to SoftSell! How can I help you with software license resales today?",
          sender: "bot",
          timestamp: new Date(),
        },
      ]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!input.trim() || !chat.current) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: input,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const result = await chat.current.sendMessage(input);
      const response = await result.response;
      const text = response.candidates?.[0]?.content?.parts?.[0]?.text;

      if (text) {
        const botMessage: Message = {
          id: (Date.now() + 1).toString(),
          content: text,
          sender: "bot",
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, botMessage]);
      } else {
        const errorMessage: Message = {
          id: (Date.now() + 1).toString(),
          content:
            "I am having trouble generating a response. Please try again later.",
          sender: "bot",
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, errorMessage]);
        console.error("No text in the response from Gemini.");
      }
    } catch (error) {
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: "There was an error processing your request. Please try again.",
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
      console.error("Chatbot error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const exampleQuestions = [
    "How do I sell my license?",
    "How does the valuation process work?",
    "What types of licenses do you accept?",
    "How do I get a quote?",
  ];

  return (
    <>
      {/* Chat Toggle Button */}
      <button
        onClick={toggleChat}
        className={cn(
          "fixed bottom-6 right-6 z-50 p-4 bg-primary text-white rounded-full shadow-lg hover:bg-primary transition-all duration-300 flex items-center justify-center",
          isOpen && "hidden"
        )}
        aria-label="Toggle chat"
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </button>

      {/* Chat Container */}
      <div
        className={cn(
          "fixed bottom-0 right-0 z-40 w-full sm:w-96 transition-all duration-300 transform",
          isOpen ? "translate-y-0" : "translate-y-full"
        )}
      >
        <div className="flex flex-col h-[500px] mx-auto border rounded-t-lg shadow-lg bg-background">
          {/* Chat Header */}
          <div className="p-4 bg-primary text-primary-foreground font-medium rounded-t-lg flex justify-between items-center">
            <div>
              <h2 className="text-xl">ChatBot</h2>
              <p className="text-sm opacity-75 text-muted-foreground">
                Ask us anything!
              </p>
            </div>
            <button onClick={toggleChat} aria-label="Close chat">
              <X size={24} />
            </button>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 p-4 overflow-y-auto">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`mb-4 ${
                  message.sender === "user" ? "text-right" : "text-left"
                }`}
              >
                <div
                  className={`inline-block p-3 rounded-lg max-w-xs md:max-w-md ${
                    message.sender === "user"
                      ? "bg-primary text-primary-foreground rounded-br-none"
                      : "bg-muted text-foreground rounded-bl-none"
                  }`}
                >
                  <p className="whitespace-pre-wrap text-sm prose">
                    {message.content}
                  </p>
                  <p className="text-xs mt-1 opacity-75 text-muted-foreground">
                    {message.timestamp.toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="text-left mb-4">
                <div className="inline-block p-3 rounded-lg bg-muted text-foreground rounded-bl-none">
                  <div className="flex space-x-2">
                    <div className="h-2 w-2 bg-foreground rounded-full animate-bounce"></div>
                    <div className="h-2 w-2 bg-foreground rounded-full animate-bounce delay-100"></div>
                    <div className="h-2 w-2 bg-foreground rounded-full animate-bounce delay-200"></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Chat Input */}
          <form onSubmit={handleSubmit} className="p-2 border-t">
            <div className="p-2 gap-0.5 flex flex-wrap">
              {exampleQuestions.map((question, index) => (
                <Badge key={index} onClick={() => setInput(question)}>
                  {question}
                </Badge>
              ))}
            </div>

            <div className="flex rounded-lg border overflow-hidden">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 px-4 py-2 focus:outline-none text-foreground"
                placeholder="Ask us anything about SoftSell..."
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className={cn(
                  "px-4 py-2 bg-primary text-white font-medium flex items-center justify-center",
                  isLoading || !input.trim()
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:bg-primary"
                )}
                aria-label="Send message"
              >
                <Send size={18} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Chatbot;