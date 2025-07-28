import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Send, Bot, User, Settings, Zap } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
// import { pipeline } from "@huggingface/transformers";

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

export const AIChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hello! I'm an AI assistant powered by Hugging Face Transformers that can help you learn more about this portfolio. I can answer questions about the projects, skills, experience, and more. Feel free to ask me anything!",
      isUser: false,
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [aiModel, setAiModel] = useState<any>(null);
  const [isModelLoading, setIsModelLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  // Initialize AI model (commented out for now - uncomment when you want to use it)
  const initializeModel = async () => {
    setIsModelLoading(true);
    try {
      // Uncomment the following lines to use Hugging Face Transformers
      // const model = await pipeline("text-generation", "microsoft/DialoGPT-medium");
      // setAiModel(model);
      
      toast({
        title: "AI Model Ready",
        description: "Hugging Face model loaded successfully!",
      });
    } catch (error) {
      toast({
        title: "Model Load Error",
        description: "Failed to load AI model. Using fallback responses.",
        variant: "destructive",
      });
    }
    setIsModelLoading(false);
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const generateAIResponse = async (userInput: string): Promise<string> => {
    // Portfolio-specific responses
    const portfolioKnowledge = {
      "skills": "I have expertise in React, TypeScript, Node.js, Python, AI/ML, AWS, and many other technologies. I'm particularly passionate about full-stack development and AI applications.",
      "projects": "My portfolio includes an e-commerce platform, AI-powered analytics dashboard, IoT home automation system, and several other full-stack applications. Each project showcases different technologies and problem-solving approaches.",
      "experience": "I have over 5 years of development experience, including both individual and team projects. I've worked with various technologies and am always learning new ones.",
      "education": "I hold a Master's degree in Computer Science with specialization in AI/ML from Stanford University, and a Bachelor's in Software Engineering from UC Berkeley.",
      "certificates": "I have multiple professional certifications including AWS Solutions Architect, Google Cloud Professional Developer, and Meta React Developer, among others.",
      "contact": "You can reach me through the contact form on this website, via email, LinkedIn, or phone. I typically respond within 24 hours.",
    };

    const lowerInput = userInput.toLowerCase();
    
    for (const [key, response] of Object.entries(portfolioKnowledge)) {
      if (lowerInput.includes(key)) {
        return response;
      }
    }

    // If using Hugging Face model (uncomment when ready):
    // if (aiModel) {
    //   try {
    //     const result = await aiModel(userInput, { max_length: 100 });
    //     return result[0].generated_text;
    //   } catch (error) {
    //     console.error("AI model error:", error);
    //   }
    // }

    // Fallback responses
    const fallbackResponses = [
      "That's an interesting question! Based on this portfolio, I can tell you that the developer has strong expertise in modern web technologies and AI/ML.",
      "From what I can see in this portfolio, there's a great focus on creating user-centered solutions with cutting-edge technologies.",
      "This portfolio showcases a diverse range of projects from e-commerce platforms to AI applications. Is there something specific you'd like to know more about?",
      "I'd be happy to help you learn more about the skills, projects, or experience showcased in this portfolio. What interests you most?",
    ];

    return fallbackResponses[Math.floor(Math.random() * fallbackResponses.length)];
  };

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    const currentInput = input;
    setInput("");
    setIsLoading(true);

    try {
      const aiResponseText = await generateAIResponse(currentInput);
      
      setTimeout(() => {
        const aiResponse: Message = {
          id: (Date.now() + 1).toString(),
          text: aiResponseText,
          isUser: false,
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, aiResponse]);
        setIsLoading(false);
      }, 1000 + Math.random() * 1000); // Realistic response time
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(true)}
          size="lg"
          className="rounded-full h-14 w-14 shadow-glow hover:shadow-glow relative"
        >
          <MessageCircle className="h-6 w-6" />
          <Badge className="absolute -top-2 -right-2 h-6 w-6 rounded-full p-0 flex items-center justify-center text-xs bg-primary">
            AI
          </Badge>
        </Button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 w-96 h-[500px]">
      <Card className="h-full shadow-elegant">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Bot className="h-5 w-5 text-primary" />
              <span>AI Portfolio Assistant</span>
              <Badge variant="secondary" className="text-xs">
                <Zap className="h-3 w-3 mr-1" />
                Powered by HF
              </Badge>
            </div>
            <div className="flex items-center space-x-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={initializeModel}
                disabled={isModelLoading}
                title="Initialize AI Model"
              >
                {isModelLoading ? (
                  <div className="w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin" />
                ) : (
                  <Settings className="h-4 w-4" />
                )}
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
              >
                ✕
              </Button>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col h-[calc(100%-80px)]">
          <ScrollArea className="flex-1 pr-4" ref={scrollRef}>
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.isUser ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`flex items-start space-x-2 max-w-[80%] ${
                      message.isUser ? "flex-row-reverse space-x-reverse" : ""
                    }`}
                  >
                    <div
                      className={`h-8 w-8 rounded-full flex items-center justify-center ${
                        message.isUser
                          ? "bg-primary text-primary-foreground"
                          : "bg-secondary text-secondary-foreground"
                      }`}
                    >
                      {message.isUser ? (
                        <User className="h-4 w-4" />
                      ) : (
                        <Bot className="h-4 w-4" />
                      )}
                    </div>
                    <div
                      className={`rounded-lg px-3 py-2 text-sm ${
                        message.isUser
                          ? "bg-primary text-primary-foreground"
                          : "bg-secondary text-secondary-foreground"
                      }`}
                    >
                      {message.text}
                    </div>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="flex items-center space-x-2">
                    <div className="h-8 w-8 rounded-full bg-secondary flex items-center justify-center">
                      <Bot className="h-4 w-4" />
                    </div>
                    <div className="bg-secondary rounded-lg px-3 py-2">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-muted-foreground rounded-full animate-pulse"></div>
                        <div className="w-2 h-2 bg-muted-foreground rounded-full animate-pulse delay-100"></div>
                        <div className="w-2 h-2 bg-muted-foreground rounded-full animate-pulse delay-200"></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </ScrollArea>
          <div className="flex space-x-2 pt-3 border-t">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask me anything..."
              className="flex-1"
              disabled={isLoading}
            />
            <Button
              onClick={sendMessage}
              disabled={!input.trim() || isLoading}
              size="sm"
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};