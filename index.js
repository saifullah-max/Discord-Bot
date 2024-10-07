require('dotenv').config();
const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.on("messageCreate", (message) => {
    if(message.author.bot) return;
    message.reply({
        content: "Hi, I am a Bot"
    })
});

client.on("interactionCreate", (interaction) => {
    console.log(interaction);
    interaction.reply("Pong!!")
}) 

client.login(process.env.TOKEN).then(() => {
    console.log("Bot is online!");
}).catch(err => {
    console.error("Failed to login:", err);
});
