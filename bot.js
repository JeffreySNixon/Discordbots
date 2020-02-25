const { AkairoClient } = require('discord-akairo');
require("dotenv").config();

const client = new AkairoClient(
    {
        ownerID: "",
        prefix: "./",
        commandDirectory: "./commands/"
    }
);

client.on('ready', () => {
console.log('Logged in');
})

client.login(process.env.DISCORD_TOKEN);