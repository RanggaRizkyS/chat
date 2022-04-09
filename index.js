const discord = require('discord.js-selfbot-v11');
const fs = require('fs');

const client = new discord.Client();
const config = require('./config.json');

fs.readdir("./events/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(f => {
        if (!f.endsWith(".js")) return;
        const event = require(`./events/${f}`);
        let eventName = f.split(".")[0];
        client.on(eventName, event.bind(null, client));
    });
});

client.login(process.env.TOKEN);