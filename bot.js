require('dotenv').config();

const { Client, GatewayIntentBits, Partials } = require('discord.js');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ],
    partials: [Partials.Message, Partials.Channel, Partials.Reaction]
});

client.once('ready', () => {
    console.log(`✅ Bot online come ${client.user.tag}!`);
});

client.on('messageCreate', msg => {
    if (msg.author.bot) return; // Ignora i messaggi dei bot

    console.log(`📩 Messaggio ricevuto: ${msg.content}`);

    if (msg.content.toLowerCase() === 'ciao') {
        msg.reply('Ciao! 👋');
    }
});

client.login(process.env.TOKEN);
