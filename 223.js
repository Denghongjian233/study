// Please install OpenAI SDK first: `npm install openai`

import OpenAI from "openai";

const openai = new OpenAI({
        baseURL: 'https://api.deepseek.com',
        apiKey: 'sk-cd77fbcf5b7346c0bf08f3e21256c9cf'
});

async function main() {
  const completion = await openai.chat.completions.create({
    // messages: [{ role: "system", content: "You are a helpful assistant." }],
    messages: [{ role: "system", content: "写一个冒泡排序" }],
    model: "deepseek-chat",
  });

  console.log(completion.choices[0].message.content);
}

main();