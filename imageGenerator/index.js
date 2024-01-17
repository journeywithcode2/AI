import OpenAI from "openai";
import apiKey from "./Apikey.js";

const openai = new OpenAI({
  apiKey: apiKey,
});

async function main() {
    const image = await openai.images.generate({ model: "dall-e-3", prompt: "journeywithcode" });

    console.log(image.data);
}

main();
