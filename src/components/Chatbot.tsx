import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot, User, Loader2 } from 'lucide-react';
import { cn } from '../utils';
import { knowledgeBase, defaultAnswer, quickSuggestions } from '../data/knowledge-base';
import type { QAEntry } from '../data/knowledge-base';

interface Message {
  id: number;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

function findAnswer(query: string): string {
  const normalized = query.toLowerCase().trim();

  const matches: { entry: QAEntry; score: number }[] = [];

  for (const entry of knowledgeBase) {
    let score = 0;
    const combined = entry.question.join(' ') + ' ' + entry.tags.join(' ');
    for (const keyword of normalized.split(/\s+/)) {
      if (keyword.length < 2) continue;
      if (combined.toLowerCase().includes(keyword)) {
        score += 1;
      }
    }
    if (score > 0) {
      matches.push({ entry, score });
    }
  }

  if (matches.length > 0) {
    matches.sort((a, b) => b.score - a.score);
    return matches[0].entry.answer;
  }

  return defaultAnswer;
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping, scrollToBottom]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([
        {
          id: 1,
          text: "Hi! I'm Sarthak's assistant. Ask me about his skills, projects, education, or how to reach him.",
          isUser: false,
          timestamp: new Date(),
        },
      ]);
    }
  }, [isOpen, messages.length]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen]);

  const handleSendMessage = useCallback(() => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      text: inputValue.trim(),
      isUser: true,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    setTimeout(() => {
      const answer = findAnswer(inputValue);
      const botMessage: Message = {
        id: Date.now() + 1,
        text: answer,
        isUser: false,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 700);
  }, [inputValue]);

  const handleQuickSuggestion = (suggestion: string) => {
    setMessages((prev) => [...prev, {
      id: Date.now(),
      text: suggestion,
      isUser: true,
      timestamp: new Date(),
    }]);
    setIsTyping(true);

    setTimeout(() => {
      const answer = findAnswer(suggestion);
      setMessages((prev) => [...prev, {
        id: Date.now() + 1,
        text: answer,
        isUser: false,
        timestamp: new Date(),
      }]);
      setIsTyping(false);
    }, 700);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const formatTime = (date: Date) => date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.95 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="mb-4 w-96 max-w-[92vw]"
            >
              <div className="flex flex-col h-[560px] rounded-3xl overflow-hidden shadow-2xl border border-dark-border bg-dark-card">
                <div className="flex items-center gap-3 px-5 py-4 bg-dark-surface border-b border-dark-border">
                  <div className="w-9 h-9 rounded-2xl bg-gradient-to-br from-camel-500 to-accent-copper flex items-center justify-center text-white shadow-lg shadow-camel-500/25">
                    <Bot size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm text-primary">Sarthak Assistant</h3>
                    <p className="text-xs text-muted">Portfolio chatbot</p>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="ml-auto p-1.5 hover:bg-dark-border rounded-xl transition-colors"
                    aria-label="Close chat"
                  >
                    <X size={18} className="text-muted" />
                  </button>
                </div>

                <div className="flex-1 overflow-y-auto p-5 space-y-5" ref={messagesEndRef}>
                  {messages.map((msg) => (
                    <motion.div
                      key={msg.id}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.25 }}
                      className={cn(
                        'flex gap-3 max-w-[82%]',
                        msg.isUser ? 'ml-auto flex-row-reverse' : 'mr-auto'
                      )}
                    >
                      <div
                        className={cn(
                          'w-7 h-7 rounded-xl flex items-center justify-center flex-shrink-0',
                          msg.isUser
                            ? 'bg-gradient-to-br from-camel-500 to-accent-copper text-white shadow-lg shadow-camel-500/30'
                            : 'bg-dark-border text-camel-400 dark:text-camel-400'
                        )}
                      >
                        {msg.isUser ? <User size={12} /> : <Bot size={12} />}
                      </div>
                      <div className="flex flex-col max-w-full">
                        <div
                          className={cn(
                            'px-4 py-2.5 rounded-2xl text-sm leading-relaxed break-words',
                            msg.isUser
                              ? 'bg-gradient-to-br from-camel-500 to-accent-copper text-white rounded-tr-none'
                              : 'bg-dark-surface border border-dark-border text-primary rounded-tl-none'
                          )}
                        >
                          <pre className="whitespace-pre-wrap font-sans leading-relaxed">{msg.text}</pre>
                        </div>
                        <p className="text-[10px] text-muted mt-1">
                          {msg.isUser ? 'mr-auto' : 'ml-auto'}
                          {formatTime(msg.timestamp)}
                        </p>
                      </div>
                    </motion.div>
                  ))}

                  {isTyping && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex gap-3 max-w-[82%] mr-auto"
                    >
                      <div className="w-7 h-7 rounded-xl bg-dark-border flex items-center justify-center text-camel-400">
                        <Bot size={12} />
                      </div>
                      <div className="px-4 py-2.5 rounded-2xl rounded-tl-none bg-dark-surface border border-dark-border">
                        <div className="flex gap-1.5">
                          <motion.div
                            className="w-1.5 h-1.5 rounded-full bg-camel-400"
                            animate={{ opacity: [0.4, 1, 0.4] }}
                            transition={{ duration: 0.8, repeat: Infinity }}
                          />
                          <motion.div
                            className="w-1.5 h-1.5 rounded-full bg-camel-400"
                            animate={{ opacity: [0.4, 1, 0.4] }}
                            transition={{ duration: 0.8, repeat: Infinity, delay: 0.2 }}
                          />
                          <motion.div
                            className="w-1.5 h-1.5 rounded-full bg-camel-400"
                            animate={{ opacity: [0.4, 1, 0.4] }}
                            transition={{ duration: 0.8, repeat: Infinity, delay: 0.4 }}
                          />
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {messages.length === 1 && !isTyping && (
                    <div className="px-5 pb-4 border-t border-dark-border">
                      <p className="text-xs font-medium text-muted mb-3 uppercase tracking-wider">Try asking</p>
                      <div className="flex flex-wrap gap-2">
                        {quickSuggestions.map((sug) => (
                          <button
                            key={sug}
                            onClick={() => handleQuickSuggestion(sug)}
                            disabled={isTyping}
                            className={cn(
                              'px-3 py-1.5 text-xs rounded-xl glass border border-dark-border',
                              'text-muted hover:text-primary hover:border-camel-300/60 hover:bg-dark-border/50 transition-all whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed'
                            )}
                          >
                            {sug}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="p-4 border-t border-dark-border bg-dark-surface">
                  <div className="flex gap-2">
                    <input
                      ref={inputRef}
                      type="text"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyDown={handleKeyDown}
                      disabled={isTyping}
                      placeholder="Ask about Sarthak..."
                      className={cn(
                        'flex-1 px-4 py-2.5 text-sm bg-transparent border border-dark-border rounded-xl',
                        'text-primary placeholder:text-muted/60 focus:outline-none focus:ring-1 focus:ring-camel-400 transition-all',
                        'disabled:opacity-50 disabled:cursor-not-allowed'
                      )}
                    />
                    <button
                      onClick={handleSendMessage}
                      disabled={isTyping || !inputValue.trim()}
                      className={cn(
                        'p-2.5 bg-gradient-to-br from-camel-500 to-accent-copper text-white rounded-xl shadow-lg shadow-camel-500/30',
                        'hover:from-camel-600 hover:to-accent-gold disabled:opacity-50 disabled:cursor-not-allowed',
                        'transition-all active:scale-95'
                      )}
                      aria-label="Send message"
                    >
                      {isTyping ? (
                        <Loader2 size={16} className="animate-spin" />
                      ) : (
                        <Send size={16} />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
          className={cn(
            'w-14 h-14 rounded-full bg-gradient-to-br from-camel-500 to-accent-copper',
            'text-white shadow-xl shadow-camel-500/30 flex items-center justify-center transition-all',
            'hover:shadow-camel-500/50'
          )}
          aria-label={isOpen ? 'Close chat' : 'Open chat'}
          title={isOpen ? 'Close chat' : 'Ask Sarthak anything'}
        >
          <AnimatePresence>
            {isOpen ? (
              <motion.div
                key="x"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X size={22} />
              </motion.div>
            ) : (
              <motion.div
                key="message"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <MessageCircle size={22} />
              </motion.div>
            )}
          </AnimatePresence>
          <span className="absolute -top-2 -right-2 w-2 h-2 rounded-full bg-camel-600 border-2 border-dark-card" />
        </motion.button>
      </div>
    </>
  );
}
