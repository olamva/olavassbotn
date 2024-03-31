import dotenv from "dotenv";
import OpenAI from "openai";
dotenv.config();

const key = process.env.OPENAI_API_KEY;
const openai = new OpenAI({
	apiKey: key,
});

async function main() {
	const completion = await openai.chat.completions.create({
		messages: [{ role: "system", content: "You are a helpful assistant." }],
		model: "gpt-3.5-turbo",
	});

	console.log(completion.choices[0]);
}

main();
