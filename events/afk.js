const client = require('../index')
const db = require('quick.db')

client.on("message", async message => {
    if(db.has(`afk-${message.author.id}+${message.guild.id}`)) {
        const info = db.get(`afk-${message.author.id}+${message.guild.id}`)
        await db.delete(`afk-${message.author.id}+${message.guild.id}`)
        message.reply(`Your afk status have been removed (${info})`)
    }
    if(message.mentions.members.first()) {
        if(db.has(`afk-${message.mentions.members.first().id}+${message.guild.id}`)) {
            message.channel.send(message.mentions.members.first().user.tag + " is afk. (" + db.get(`afk-${message.mentions.members.first().id}+${message.guild.id}`) + ")")
        }else return;
    }else;
});