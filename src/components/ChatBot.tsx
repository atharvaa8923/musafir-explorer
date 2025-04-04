import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, Send, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import useTranslation from '@/hooks/useTranslation';
import { toast } from "@/components/ui/use-toast";
import { getChatResponse } from '@/services/chatService';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const INITIAL_BOT_MESSAGE: Message = {
  id: 'welcome',
  text: 'welcome_message',
  isUser: false,
  timestamp: new Date(),
};

const ChatBot = () => {
  const { t, language } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([INITIAL_BOT_MESSAGE]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    setMessages(prevMessages => {
      const updatedMessages = [...prevMessages];
      if (updatedMessages.length > 0 && updatedMessages[0].id === 'welcome') {
        updatedMessages[0] = {
          ...updatedMessages[0],
          timestamp: new Date(),
        };
      }
      return updatedMessages;
    });
  }, [language]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && input.trim()) {
      handleSendMessage();
    }
  };

  const handleSendMessage = async () => {
    if (!input.trim()) return;
    
    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      isUser: true,
      timestamp: new Date(),
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);
    
    try {
      const response = await getChatResponse(input, language);
      
      setTimeout(() => {
        const botMessage: Message = {
          id: (Date.now() + 1).toString(),
          text: response,
          isUser: false,
          timestamp: new Date(),
        };
        
        setMessages(prev => [...prev, botMessage]);
        setIsTyping(false);
      }, 500 + Math.random() * 1000);
    } catch (error) {
      console.error('Error getting chat response:', error);
      setIsTyping(false);
      
      toast({
        variant: "destructive",
        title: t("error"),
        description: t("chat_error"),
      });
    }
  };

  return (
    <>
      <Button 
        onClick={toggleChat}
        className="fixed bottom-5 right-5 rounded-full w-14 h-14 flex items-center justify-center shadow-lg bg-musafir-meditation hover:bg-musafir-meditation/90 z-50"
      >
        <MessageCircle size={24} />
      </Button>
      
      {isOpen && (
        <div className="fixed bottom-24 right-5 w-80 sm:w-96 h-[500px] bg-card border border-border rounded-lg shadow-xl flex flex-col z-50 overflow-hidden">
          <div className="p-3 border-b border-border flex items-center justify-between bg-musafir-meditation/20">
            <h3 className="font-semibold">{t("travel_assistant")}</h3>
            <Button variant="ghost" size="sm" onClick={toggleChat} className="h-8 w-8 p-0">
              <X size={18} />
            </Button>
          </div>
          
          <div className="flex-1 overflow-y-auto p-3 space-y-3">
            {messages.map(message => (
              <div 
                key={message.id}
                className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`max-w-xs p-3 rounded-lg ${
                    message.isUser 
                      ? 'bg-musafir-meditation/20 text-musafir-meditation rounded-tr-none' 
                      : 'bg-muted rounded-tl-none'
                  }`}
                >
                  <p>{message.id === 'welcome' ? t(message.text) : message.text}</p>
                  <span className="text-xs text-muted-foreground mt-1 block">
                    {new Intl.DateTimeFormat(language, { 
                      hour: '2-digit', 
                      minute: '2-digit' 
                    }).format(message.timestamp)}
                  </span>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-muted p-3 rounded-lg rounded-tl-none max-w-xs">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>
          
          <div className="p-3 border-t border-border">
            <div className="flex">
              <input
                type="text"
                placeholder={t("type_message")}
                className="flex-1 px-3 py-2 bg-background border border-border rounded-l-md focus:outline-none focus:ring-2 focus:ring-musafir-meditation"
                value={input}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
                disabled={isTyping}
              />
              <Button 
                onClick={handleSendMessage}
                disabled={!input.trim() || isTyping}
                className="rounded-l-none bg-musafir-meditation hover:bg-musafir-meditation/90"
              >
                <Send size={18} />
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;
