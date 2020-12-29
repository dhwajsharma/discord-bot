require('dotenv').config();
const fetch = require('node-fetch');

const Discord = require('discord.js');
const client = new Discord.Client();
client.login(process.env.BOTTOKEN);

client.on('ready', readyDiscord);

function readyDiscord() {
    console.log('Server is ready!');
}

client.on('message', gotMessage);

async function gotMessage(msg) {
    if (msg.channel.id == '793447643674181632') {

        let tokens = msg.content.split(' ');

        if (tokens[0] === '!badmaash') {
            const index = Math.floor(Math.random() * replies.length);
            msg.channel.send(replies[index]);
        } else if (tokens[0] == '!gif') {

            let keywords = 'doge';
            if (tokens.length > 1) {
                keywords = tokens.slice(1, tokens.length).join(" ");
            }

            let url = `https://api.tenor.com/v1/search?q=${keywords}&key=${process.env.TENORKEY}&ContentFilter=low`;
            let response = await fetch(url);
            let json = await response.json();
            console.log(json);
            let index = Math.floor(Math.random() * json.results.length);
            msg.channel.send(json.results[index].url);
        }
    }
}