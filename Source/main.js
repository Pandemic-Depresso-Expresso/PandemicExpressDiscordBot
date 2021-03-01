const Discord = require('discord.js');
const SteamAPI = require('steamapi');
const steam = new SteamAPI(process.env.steamToken);
var userStats = new SteamApi.UserStats('steam-api-key');

const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"]});

const prefix = '!';

client.once('ready', () => {
    console.log('RadioBot is online!');
});

client.on('message', async message =>{
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'players')
    {
        userStats.GetNumberOfCurrentPlayers(939510).done(function(result){
            console.log(result);
        });
    };
});
client.login(process.env.token);
