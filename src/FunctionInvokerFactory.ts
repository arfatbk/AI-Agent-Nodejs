import { availableActions } from "./Actions";

async function evaluateFunction(queryString: string) {
    const regex = /Action:\s*(\w+)[\s:]+(.+)\nPAUSE/;
    const match = queryString.match(regex);
    const output = match ? [match[1], match[2]] : [];

    const action = output[0];
    const args = output[1];

    const fn = availableActions
                        .filter(a => a.name === action)
                        .map(entry => entry.fn)[0];

    if(!fn){
        return 'Observation: tool not found';
    }
   return `${eval(await fn(args))}`;
}

export { evaluateFunction }