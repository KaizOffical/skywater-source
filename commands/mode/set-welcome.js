const db = require('quick.db');
const { MessageEmbed } = require('discord.js')

module.exports = {
  name: 'set-welcome',
  aliases: ['set-wel', 'welcome'],
  category: 'mode',
  run: async (client, message, args) => { 
    if(!message.member.hasPermission("MANAGE_GUILD")) return message.reply('You must have permission **`MANAGE_GUILD`** to use this command')
    const query = args[0];
    if(!query) return message.reply('Please specify options [Options: card | channel]')

    if(query == 'card') {
      const col = args[1];
      if(!col) return message.reply(
        new MessageEmbed()
        .setTitle('Welcome Color')
        .setDescription('Please specify welcome card link')
      )
      db.set(`welcomeColor-${message.guild.id}`, col)
      message.reply(`Set Welcome Card to \`${col}\``)
    } else if(query == 'channel') {
      const ch = message.mentions.channels.first() || message.guild.channels.cache.get(args[1])
      if(!ch) return message.reply(
        new MessageEmbed()
        .setTitle('Welcome Channel')
        .setDescription('Please mentions welcome channel or specify channel id')
      )
      db.set(`welcomeChannel-${message.guild.id}`, ch.id)
      message.reply(`Set Welcome Channel to <#${ch.id}>`)
    } else return message.reply('Invalid Option! Please check the option again! [Options: card | channel]')
  }
}