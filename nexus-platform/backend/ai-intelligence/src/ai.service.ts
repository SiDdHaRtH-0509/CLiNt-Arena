import { Injectable, Logger } from '@nestjs/common';
import { ChatOpenAI } from '@langchain/openai';
import { PromptTemplate } from '@langchain/core/prompts';
import { QdrantClient } from '@qdrant/js-client-rest';
import { PrismaClient } from '@nexus/database';

@Injectable()
export class AiService {
  private logger = new Logger('AiService');
  private llm: ChatOpenAI;
  private qdrant: QdrantClient;
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
    this.qdrant = new QdrantClient({ url: process.env.QDRANT_URL || 'http://localhost:6333' });
    
    // Fallback to a dummy key if not in env for build purposes
    this.llm = new ChatOpenAI({
      openAIApiKey: process.env.OPENAI_API_KEY || 'dummy_key',
      modelName: 'gpt-4o',
      temperature: 0.2,
    });
  }

  async askAssistant(query: string, userId: string, role: string) {
    const startTime = Date.now();
    
    const prompt = PromptTemplate.fromTemplate(
      `You are the FIFA Nexus AI Assistant. 
      The user is a {role} at the 2026 World Cup.
      User Query: {query}
      
      Provide a highly precise, actionable, and secure response.`
    );

    const chain = prompt.pipe(this.llm);
    
    let responseText = "AI Response Mocked for missing API Key.";
    try {
      if (process.env.OPENAI_API_KEY) {
        const response = await chain.invoke({ role, query });
        responseText = response.content as string;
      }
    } catch (err) {
      this.logger.error('LLM invocation failed', err);
    }

    // Log the interaction
    await this.prisma.aiLog.create({
      data: {
        module: 'ASSISTANT',
        input: query,
        output: responseText,
        processingTimeMs: Date.now() - startTime,
      }
    });

    return { response: responseText };
  }

  async analyzeCrowd(stadiumId: string) {
    // In production, fetch live metrics from Redis/Prisma, embed them, and ask the LLM to predict congestion.
    return {
      status: "ANALYZING",
      stadiumId,
      prediction: "High congestion expected at North Gate in 15 minutes. Recommend redirecting FAN traffic to East Gate."
    };
  }
}
