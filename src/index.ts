import { Agent } from "./Agent";
import { AIClient } from "./AIClient";
import { systemPrompt } from "./Prompts";

const agent = new Agent(AIClient.getInstance(), systemPrompt);

async function runAgent(query: string, maxIterations: number = 15) {

    const result = await agent.askAgent(query, maxIterations);
    console.log("===============================================================n")
    console.log("FINAL Answer", result)
}

// Modify the prompt below as required
runAgent('What is the mass of the moon squared?');