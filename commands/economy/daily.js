const db = require('quick.db');
const ms = require('ms');
const moment = require('moment');
const { MessageEmbed } = require('discord.js')

module.exports = {
    name: "daily",
    category: "economy",
    aliases: ['dai'],
    run: async (client, message, args) => {
      const timeout = 86400000; // 7 days in milliseconds, change to the desired cooldown time, in milliseconds
	    const cooldown = await db.fetch(`daily_${message.guild.id}_${message.author.id}`);

      if (cooldown !== null && timeout - (Date.now() - cooldown) > 0) {
		    const time = ms(timeout - (Date.now() - cooldown));
		    return message.channel.send(`Sorry you must wait **${time}** before using this command again!`);
	    } else {
		    db.set(`daily_${message.guild.id}_${message.author.id}`, Date.now());
      }

      let amount = Math.floor(Math.random() * 1000);
      db.add(`cash_${message.author.id}`, amount)  
      const embed = new MessageEmbed()
        .setTitle(`Daily`)
        .setDescription(`Your daily ${amount}🪙`)
        .setFooter(`Your next daily: ${moment(Date.now() + 86400000).locale('en').utcOffset('+0000').format('LLLL')} (UTC)`)
      message.channel.send(embed) 
    }
}