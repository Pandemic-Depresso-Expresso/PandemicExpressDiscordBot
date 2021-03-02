const Discord = require('discord.js');
const SteamAPI = require('steamapi');
const steam = new SteamAPI('DD20123A1744482B39CAEB8088AF5468');

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
        try{
            message.channel.send('getGamePlayers')
	        await steam.getGamePlayers('939510').then(inspect);
        } catch (error) {
            message.channel.send("NOOOOOOOOPE");
        }
    };
});
client.login(process.env.token);
