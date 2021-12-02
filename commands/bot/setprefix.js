module.exports = {
    name:'setprefix',
    aliases: ['prefix', 'sp'],
    category: "bot",
    run: async(client, message,args) =>{
      if(!message.member.hasPermission("MANANGE_GUILD")) return message.channel.send("You don't have permission to use this command")
        const database = require('simplest.db')
        const db = new database({
          path: './database/preix.json'
        })
        const prefix = args[0];
        if(!prefix) return message.channel.send("Please specify new prefix")
        if(prefix.length > 5) return message.channel.send("Prefix length must smaller than 5")
        db.set(message.guild.id,prefix)   
        message.channel.send(`You set new prefix to ${db.get(message.guild.id)}`)
    }
}