import chalk from "chalk";
import { OpenAI } from "openai";
import readline from "readline";

process.stdout.write("\x1Bc");

const messages = [
	{
		role: "system",
		content:
			"Hello, I'm a chatbot. I'm here to help you with any questions you have. Type 'exit' to end the conversation.",
	},
];

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

const key = process.env.OPENAI_API_KEY || "";
console.log(key);
const openai = new OpenAI({ apiKey: key });

const askQuestion = (question) => {
	return new Promise((resolve) => rl.question(question, resolve));
};

const getResponse = async (prompt) => {
	messages.push({ role: "user", content: prompt });
	const stream = await openai.chat.completions.create({
		model: "gpt-4-0125-preview", // Update model as needed
		messages: messages,
		temperature: 0.5,
		max_tokens: 1500,
		stream: true,
	});

	process.stdout.write(chalk.green("AI: "));
	let message = "";
	for await (const chunk of stream) {
		const msgPart = chunk.choices[0]?.delta?.content || "";
		process.stdout.write(msgPart);
		message += msgPart;
	}
	messages.push({ role: "assistant", content: message });
	console.log();
};

const getResponse2 = async (prompt) => {
	messages.push({ role: "user", content: prompt });
	try {
		const response = await openai.chat.completions.create({
			model: "gpt-4-0125-preview", // Update model as needed
			messages: messages,
			temperature: 0.5,
			max_tokens: 1500,
		});
		const message = response.choices[0].message.content;
		messages.push({ role: "assistant", content: message });
		console.log(chalk.green("AI: "), message);
	} catch (error) {
		console.error("Error during API call", error);
	}
};

const chat = async () => {
	let userInput;
	while (true) {
		userInput = await askQuestion("You: ");
		if (userInput.toLowerCase() === "exit") break;
		await getResponse(userInput);
	}
	rl.close();
};

chat();
