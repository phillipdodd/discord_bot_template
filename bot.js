require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client();
const commandHandler = require('./lib/commandHandler');

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.login(process.env.TOKEN);

client.on('message', commandHandler);