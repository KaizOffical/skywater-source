const { MessageEmbed } = require('discord.js');
const db = require('quick.db');

module.exports = {
  name: "balance",
  category: "economy",
  aliases: ['bal'],
  run: async (client, message, args) => {
    const member = await message.mentions.users.first() || message.author || message.guild.members.cache.get(args[0]);
    let cash = await db.fetch(`cash_${member.id}`);
    if(cash === null) cash = 0;
    let bank = await db.fetch(`bank_${member.id}`);
    if(bank === null) bank = 0;
    const embed = new MessageEmbed()
      .setTitle(`${member.tag}'s Balance`)
      .setDescription(`Wallet: ${cash} 🪙 \nBank: ${bank} 🪙`)
      .setFooter(`Economy`)
    message.channel.send(embed)
  }
}