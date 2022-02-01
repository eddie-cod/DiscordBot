const { Client } = require('discord.js'); //importation de la classe Client de discord.js
const { _TOKEN } = require('./config.json');

const client = new Client({
    intents: 32767
});

client.once('ready', ()=>{
    console.log("Ready");
    client.user.setActivity('Jarvis', {type:'LISTENING'});
});

client.login(_TOKEN);