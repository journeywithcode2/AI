const OpenAI = require("openai");
const apiKey = require('./Apikey');

const openai = new OpenAI({
  apiKey: apiKey,
});

async function main() {
    const image = await openai.images.generate({ model: "dall-e-3", prompt: "" });
    console.log(image.data);
}

main();

