import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, X, Send, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import aiIcon from '@assets/generated_images/AI_assistant_icon_d0f8358d.png';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const STARTER_QUESTIONS = [
  "I'm a 12th pass student. Which course should I choose?",
  "I want to learn web development",
  "Suggest courses for graphic design",
  "What's the difference between KYP and DEEP?",
  "I'm interested in data science",
];

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: "Hi! I'm your AI Career Advisor at Digital Tech Drive. I can help you find the perfect course based on your interests and background. What would you like to know?"
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async (message: string) => {
    if (!message.trim() || isLoading) return;

    const userMessage: Message = { role: 'user', content: message };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      const history = messages.map(msg => ({
        role: msg.role === 'user' ? 'user' : 'model',
        content: msg.content
      }));

      const res = await fetch('/api/ai/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message, history })
      });

      if (!res.ok) {
        throw new Error('Failed to get AI response');
      }

      const data = await res.json();

      const aiMessage: Message = {
        role: 'assistant',
        content: data.response
      };
      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      console.error('AI chat error:', error);
      toast({
        title: 'Error',
        description: 'Failed to get AI response. Please try again.',
        variant: 'destructive'
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage(inputValue);
    }
  };

  return (
    <>
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 w-16 h-16 rounded-full bg-gradient-rainbow gradient-animate shadow-lg flex items-center justify-center pulse-animate"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        data-testid="button-ai-assistant"
      >
        <img src={aiIcon} alt="AI Assistant" className="w-10 h-10 rounded-full" />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: 100, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 100, scale: 0.9 }}
              transition={{ type: 'spring', damping: 25 }}
              className="fixed bottom-6 right-6 z-50 w-full max-w-md max-h-[600px] flex flex-col"
              id="ai-assistant"
            >
              <Card className="overflow-hidden border-4 border-transparent bg-gradient-rainbow p-1 flex flex-col h-full">
                <div className="bg-background rounded-md flex flex-col h-full">
                  {/* Header */}
                  <div className="flex items-center justify-between p-4 border-b bg-gradient-rainbow flex-shrink-0">
                    <div className="flex items-center gap-3">
                      <img src={aiIcon} alt="AI" className="w-10 h-10 rounded-full" />
                      <div>
                        <h3 className="font-semibold text-white" data-testid="text-ai-title">DTD AI Advisor</h3>
                        <p className="text-xs text-white/80">Online • Ready to help</p>
                      </div>
                    </div>
                    <Button
                      size="icon"
                      variant="ghost"
                      onClick={() => setIsOpen(false)}
                      className="text-white hover:bg-white/20"
                      data-testid="button-close-ai"
                    >
                      <X className="w-5 h-5" />
                    </Button>
                  </div>

                  {/* Messages */}
                  <div className="flex-1 overflow-y-auto p-4 space-y-4 min-h-0">
                    {messages.map((message, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                      >
                        <div
                          className={`max-w-[85%] rounded-lg p-3 ${
                            message.role === 'assistant'
                              ? 'bg-gradient-cool text-white'
                              : 'bg-muted text-foreground'
                          }`}
                        >
                          <p className="text-sm whitespace-pre-wrap" data-testid={`message-${message.role}-${index}`}>
                            {message.content}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                    
                    {/* Starter Questions (only show initially) */}
                    {messages.length === 1 && !isLoading && (
                      <div className="space-y-2">
                        <p className="text-xs text-muted-foreground text-center">Try asking:</p>
                        <div className="flex flex-wrap gap-2">
                          {STARTER_QUESTIONS.map((question, idx) => (
                            <Button
                              key={idx}
                              size="sm"
                              variant="outline"
                              onClick={() => sendMessage(question)}
                              className="text-xs h-auto py-2 px-3 whitespace-normal text-left"
                              data-testid={`button-starter-${idx}`}
                            >
                              {question}
                            </Button>
                          ))}
                        </div>
                      </div>
                    )}

                    {isLoading && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex justify-start"
                      >
                        <div className="bg-gradient-cool text-white rounded-lg p-3 flex items-center gap-2">
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span className="text-sm">Thinking...</span>
                        </div>
                      </motion.div>
                    )}
                    <div ref={messagesEndRef} />
                  </div>

                  {/* Input */}
                  <div className="p-4 border-t flex gap-2 flex-shrink-0">
                    <Input
                      type="text"
                      placeholder="Ask me anything about courses..."
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyPress={handleKeyPress}
                      disabled={isLoading}
                      className="flex-1"
                      data-testid="input-ai-message"
                    />
                    <Button 
                      size="icon" 
                      onClick={() => sendMessage(inputValue)}
                      disabled={!inputValue.trim() || isLoading}
                      className="bg-gradient-warm text-white border-0"
                      data-testid="button-send-message"
                    >
                      <Send className="w-5 h-5" />
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
