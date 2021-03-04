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
            // message.channel.send('Fetching number of online players: ');
	        var Players = await steam.getGamePlayers('939510');
            message.channel.send(Players + " people are playing Pandemic Express");
            client.user.setActivity(Players + " players"); 
        } catch (error) {
            console.log(error);
        }
    };
    if(command === 'changes'){
        message.channel.send('https://steamdb.info/app/939510/history/')
    };
    console.log(message)
    if(command === 'status' && message.author.id === '776852904983396412')
    {
        client.user.setActivity(args);
    }
});
client.login(process.env.token);
