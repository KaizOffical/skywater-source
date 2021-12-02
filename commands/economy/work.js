const db = require('quick.db');
const ms = require('ms');
const { MessageEmbed } = require('discord.js')

module.exports = {
    name: "work",
    category: "economy",
    aliases: ['w'],
    run: async (client, message, args) => {
      const timeout = 15000; // 7 days in milliseconds, change to the desired cooldown time, in milliseconds
	    const cooldown = await db.fetch(`work_${message.guild.id}_${message.author.id}`);

	    if (cooldown !== null && timeout - (Date.now() - cooldown) > 0) {
		    const time = ms(timeout - (Date.now() - cooldown));
		    return message.channel.send(`Sorry you must wait **${time}** before using this command again!`);
	    } else {
		    db.set(`work_${message.guild.id}_${message.author.id}`, Date.now());
      }

      let amount = Math.floor(Math.random() * 50);
      db.add(`cash_${message.author.id}`, amount)    
      const embed = new MessageEmbed()
        .setTitle(`Work`)
        .setDescription(`Nice, you worked and earned ${amount}🪙 from the boss`)
        .setFooter("Economy")
      message.channel.send(embed) 
    }
}