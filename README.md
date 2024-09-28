# Create AI Agent from Scratch (Zero framework)

### Pre-requisites
1. GROQ_API_KEY ( Free ) => [groq Cloud](https://console.groq.com/docs/quickstart)
2. Nodejs
3. Editor

### Step
1. create `.env` file in the root folder and add following:
```sh
GROQ_API_KEY=<API KEY FROM GROQ CLOUD>
AI_MODEL=llama3-70b-8192
```

2. Install dependencies
```sh
npm i
```

3. Modify the Question (Optional)

`index.js`
```Typescript
// Modify the prompt below as required
runAgent('What is the mass of the moon and Earth?');
```

4. Run 
```sh
npm start
```

```sh
> ts-node src/index.ts

Question:  What is the mass of the moon squared?
+======================

(node:46467) [DEP0040] DeprecationWarning: The `punycode` module is deprecated. Please use a userland alternative instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
===============================================================

 Thought: I need to find the mass of the moon.

Action: getPlanetMass: Moon
PAUSE
answer:  7.349e+22
===============================================================

 Thought: I need to square the mass of the moon.

Action: calculate: 7.349e+22 * 7.349e+22
PAUSE
answer:  5.4007801e+45
===============================================================

 Thought: I have the result!

Answer: The mass of the moon squared is: 5.4007801e+45
===============================================================n
FINAL Answer Thought: I have the result!

Answer: The mass of the moon squared is: 5.4007801e+45
```