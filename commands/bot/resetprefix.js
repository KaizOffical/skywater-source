module.exports = {
    name:'resetprefix',
    aliases: ['rp'],
    category: "bot",
    run: async(client, message,args) =>{
      if(!message.member.hasPermission("MANANGE_GUILD")) return message.channel.send("You don't have permission to use this command")
        const database = require('simplest.db')
        const db = new database({
          path: './database/preix.json'
        })
        const prefix = args[0];
        db.set(message.guild.id,"--")   
        message.channel.send(`Reset prefix og this guild to ${db.get(message.guild.id)}`)
    }
}