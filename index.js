const scrapeData = require("./src/newWorld");

// require("./src/webhook");

// const { sendHook, hookTypes } = require("./src/webhook");
// sendHook("SERVER STATUS", `Online! \nPORT:`, hookTypes.Success);

const TOKEN = "ODk3OTA0MDAyNzk1MTc2MDM2.YWccRA.QgjxNDJXw7JnZgtDi8s932VPsDM";

const Discord = require("discord.js");
const intents = new Discord.Intents(32767);
const client = new Discord.Client({ intents });

client.on("ready", () => console.log("Bot is online " + client.user.tag));

client.on("messageCreate", async (message) => {
	const prefix = "!";
	if (!message.content.startsWith(prefix)) return;

	const args = message.content.substring(prefix.length).split(/ +/);
	console.log(args[0]);
	switch (args[0].toLowerCase()) {
		case "eralp":
			message.reply("Eralp? Yay, I know it. It's Atakan's pokemon.");
			break;
		case "status":
			setTimeout(async () => {
				const data = await scrapeData("Kianida");
				message.reply(data);
			}, 2000);
			break;
	}
});

client.login(TOKEN);
