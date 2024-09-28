import Groq from "groq-sdk";
import 'dotenv/config'
import { ChatCompletionMessage } from "./Types";

const { AI_MODEL, GROQ_API_KEY }  = process.env;

  
class AIClient {

    private static _instance: AIClient;
    private groq: Groq;

    private constructor(){
        this.groq = new Groq({ apiKey: GROQ_API_KEY });
    }

    public static getInstance(): AIClient {
        AIClient._instance = AIClient._instance || new AIClient();
        return AIClient._instance;
    }

    public completion = async (messages: Array<ChatCompletionMessage>): Promise<string> =>  {
        const response = await this.groq.chat.completions.create({
            messages,
            model: AI_MODEL || "",
          });

          return response.choices[0]?.message?.content || "";
    }
}

export { AIClient }