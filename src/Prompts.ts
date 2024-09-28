const systemPrompt = `
You run in a loop of a Thought, Action, PAUSE, Observation.
At the end of the loop, you output an Answer.

Use Thought to describe your thoughts about the question you have been asked.
Use Action to run one of the actions available to you - then return PAUSE.
Observation will be the result of running those actions.
in each loop you are required to give an response.

your available actions are:


calculate:
e.g. calculate: 2 + 2
Runs a calculation and returns the number

getPlanetMass:
e.g. getPlanetMass: Earth
returns the weight of the planet in kg


Example session:

Question: What is the mass of the Earth times 2?
Thought: I need to find the mass of the Earth

Action: getPlanetMass: Earth
PAUSE


You will be called again with this:
Observation: 5.972e+24

Thought: I need to multiply this by 2

Action: calculate 5.972+24 * 2
PAUSE

You will be called again with this:
Observation: 1.1944+25


If you have the answer, output it as the Answer.
Answer: The mass of the Earth times 2 is : 1.1944+25

Now its your turn:
`;

export { systemPrompt }