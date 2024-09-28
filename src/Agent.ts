import { AIClient } from "./AIClient"
import { ASSISTANT, SYSTEM, USER } from "./Constants";
import { evaluateFunction } from "./FunctionInvokerFactory";
import { ChatCompletionMessage } from "./Types";


class Agent {

    private client: AIClient;
    private system: string;
    private messages: ChatCompletionMessage[];

    public constructor(client: AIClient, system: string) {
        this.client = client;
        this.system = system;
        this.messages = [];

        if(system){
            this.messages.push({
                'role': SYSTEM,
                'content': this.system
            });
        }
    }

    public async askAgent(question: string, maxIterations: number = 15) : Promise<string> {
        console.log("Question: ", question)
        console.log("+======================\n")
        let prompt = question;
        let finalAnswer: string = '';
        let i = 0;
        while( i < maxIterations){
            i++;
            const result = await this.run(prompt);
            finalAnswer = result;
            console.log("===============================================================\n")
            console.log("", result)
    
            if(result && result.includes('PAUSE') && result.includes('Action')){
                prompt = await evaluateFunction(result);
                console.log('answer: ', prompt)
                continue;
            }
            else if(result && result.includes('Answer')){
                break;
            }
        }
        return finalAnswer;
    }

    private async run(message?: string): Promise<string> {
        if(message){
            this.messages.push({
                'role': USER,
                'content': message
            });
        }
        const response = await this.client.completion(this.messages);
        if(response){
            this.messages.push({
                'role': ASSISTANT,
                'content': response
            })
        }

        return response;
    }
  
}

export { Agent }