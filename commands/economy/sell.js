const db = require('quick.db');
const { MessageEmbed } = require('discord.js');

module.exports = {
  name: "sell",
  category: "economy",
  aliases: ["s"],
  run: async (client, message, args) => {
    const id = args[0];
    if(!id) return message.channel.send("You need to specify id of animal you want to sell");
    const amount = args[1]
    let a;
    if(id === "001") {
      if(db.get(`fish_${message.author.id}`) < 1) return message.channel.send("You don't have any fish to sell");
      if(!amount) a = 1;
      if(amount == "all" || amount == "a") {
        a = db.get(`fish_${message.author.id}`)
        const mon = a * 10;
        db.add(`cash_${message.author.id}`, mon)
        db.add(`fish_${message.author.id}`, -a)
        return message.channel.send(`You sold ${a} fish and earned ${mon}🪙`)
      } else if(!isNaN(amount)) {
        a = amount
        if(db.get(`fish_${message.author.id}`) < a) return message.channel.send("You don't have enough fish to sell");
        const mon = a * 10;
        db.add(`cash_${message.author.id}`, mon)
        db.add(`fish_${message.author.id}`, -a)
        return message.channel.send(`You sold ${a} fish and earned ${mon}🪙`)
      } else {
        a = 1
        const mon = a * 10;
        db.add(`cash_${message.author.id}`, mon)
        db.add(`fish_${message.author.id}`, -a)
        return message.channel.send(`You sold ${a} fish and earned ${mon}🪙`)
      }
    }
  }
}