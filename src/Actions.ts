import { AIClient } from "./AIClient";
import { SYSTEM, USER } from "./Constants";
import { ChatCompletionMessage } from "./Types";

const calculate = async (operation: string): Promise<string> => eval(operation)

const getPlanetMass = async (planet: string): Promise<string> => {
    const messages: ChatCompletionMessage[] = [];
    messages.push({
        'role': SYSTEM,
        'content': `You will be asked a question about the mass of a planet.
                    You need to answer with the mass of the planet in kg in following format: Mass=5.972e+24
                    Strictly follow the response format adn Do not include any text before or after the response.
                    Example:
                    what is the mass of the planet Earth?
                    Mass=5.972e+24
                    `
    })
    messages.push({
        'role': USER,
        'content': `what is the mass of the planet ${planet}?`
    })
    const response = await AIClient.getInstance().completion(messages);
    return response.split('Mass=')[1];
}

const availableActions = [
    {
        'name': 'calculate',
        'fn': calculate
    },
    {
        'name': 'getPlanetMass',
        'fn': getPlanetMass
    }
]

export { calculate, getPlanetMass, availableActions }