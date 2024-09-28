
export interface ChatCompletionMessage {
    content: string;
    role: 'user' | 'system' | 'assistant';
    name?: string;
}