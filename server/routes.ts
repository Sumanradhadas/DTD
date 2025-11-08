import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { getCourseRecommendation } from "./gemini";

export async function registerRoutes(app: Express): Promise<Server> {
  // AI Assistant endpoint
  app.post("/api/ai/chat", async (req, res) => {
    try {
      const { message, history } = req.body;
      
      if (!message || typeof message !== 'string') {
        return res.status(400).json({ error: 'Message is required' });
      }

      const response = await getCourseRecommendation(message, history || []);
      
      res.json({ response });
    } catch (error) {
      console.error('AI chat error:', error);
      res.status(500).json({ error: 'Failed to process AI request' });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
