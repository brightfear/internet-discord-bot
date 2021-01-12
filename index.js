const Discord = require('discord.js')
const bot = new Discord.Client()

bot.on('message', function (message) {
    if (message.content === '!ping') {
        message.channel.send('pong')
    }
})

bot.login(process.env.TOKEN)