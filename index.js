const scrapeData = require("./src/newWorld");
require("dotenv").config();

// require("./src/webhook");

// const { sendHook, hookTypes } = require("./src/webhook");
// sendHook("SERVER STATUS", `Online! \nPORT:`, hookTypes.Success);

const Discord = require("discord.js");
const intents = new Discord.Intents(32767);
const client = new Discord.Client({ intents });

client.on("ready", () => console.log("Bot is online " + client.user.tag));

client.on("messageCreate", async (message) => {
	const prefix = "!";
	if (!message.content.startsWith(prefix)) return;

	let randomMessageInt = Math.floor(Math.random() * 3);

	const args = message.content.substring(prefix.length).split(/ +/);
	console.log(args[0]);
	switch (args[0].toLowerCase()) {
		case "eralp":
			if (randomMessageInt === 0) {
				message.reply("Eralp? Yay, I know it. It's Atakan's pokemon.");
			} else if (randomMessageInt === 1) {
				message.reply('Eralp "The Woodcutter" Atıl Ayaz.');
			} else {
				message.reply("wiki: Eralp is an Level 0 Peasant!");
			}
			break;
		case "atakan":
			if (randomMessageInt === 0) {
				message.reply("Atakan? Long live the king! 👑");
			} else if (randomMessageInt === 1 || randomMessageInt === 2) {
				message.reply("Pokemon trainer of Eralp!");
			}
			break;
		case "gürkan":
			if (randomMessageInt === 0) {
				message.reply("I forgot my ID. Where is it? Did you see it? 💳");
			} else if (randomMessageInt === 1 || randomMessageInt === 2) {
				message.reply("Give him a mic and make him shut up! 🎤");
			}
			break;
		case "alper":
			if (randomMessageInt === 0) {
				message.reply("Thor's hammer!? 🔨");
			} else if (randomMessageInt === 1 || randomMessageInt === 2) {
				message.reply("O-oh,, it's coming! mjölniir!!!");
			}
			break;
		case "afife":
			if (randomMessageInt === 0) {
				message.reply("MMO' girl.");
			} else if (randomMessageInt === 1 || randomMessageInt === 2) {
				message.reply("ESO princess, but this is not an ESO discord! 👸");
			}
			break;
		case "status":
			setTimeout(async () => {
				const data = await scrapeData("Kianida");
				message.reply(data);
			}, 2000);
			break;
	}
});

client.login(process.env.TOKEN);
