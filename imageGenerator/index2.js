import fs from "fs";
import path from "path";
import OpenAI from "openai";
import apiKey from "./Apikey.js";

const openai = new OpenAI(
    {
        apiKey: apiKey
    }
);

const speechFile = path.resolve("./speech.mp3");

async function main() {
    const mp3 = await openai.audio.speech.create({
        model: "tts-1",
        voice: "alloy",
        input: "This Voice is generated using Open Ai and Node js, here is the code",
    });
    console.log(speechFile);
    const buffer = Buffer.from(await mp3.arrayBuffer());
    await fs.promises.writeFile(speechFile, buffer);
}

main();