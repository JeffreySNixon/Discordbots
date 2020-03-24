const { AkairoClient } = require('discord-akairo');
require("dotenv").config();

const client = new AkairoClient(
    {
        ownerID: "",
        prefix: "./",
        commandDirectory: "./commands/"
    }
);

client.on('message',(message)=> {
    if(message.author.bot) return;

    if(message.content == 'Bob'){
        message.reply("Well Bob's your uncle");
    }
})

client.on('ready', () => {
console.log('Logged in');
})

client.login(process.env.DISCORD_TOKEN);