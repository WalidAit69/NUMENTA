const { app } = require("@azure/functions");
const openai = require("../../lib/openai");

app.http("getChatGPTSuggestion", {
    methods: ["GET"],
    authLevel: "anonymous",
    handler: async (request, context) => {
        const response = await openai.chat.completions.create({
            messages: [
                { role: "user", content: "Write a random text prompt for DALL-E to generate an image, this prompt will be shown to the user, include details such as the genre and what type of painting it should be, options can include: oil painting, watercolor, photo-realistic, 4k, abstract,modern, black and white etc. Do not wrap the answer in quotes." }
            ], 
            model: "gpt-3.5-turbo",
            max_tokens: 50,
            temperature:0.8,
        });

        context.log(`Http function processed request for url "${request.url}"`);

        const suggestion = response?.choices[0]?.message.text;

        return {
            body: suggestion,
        };
    },
});



