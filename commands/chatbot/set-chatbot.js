const { MessageEmbed } = require('discord.js');
const db = require('quick.db') 

module.exports = {
  name: 'set-chatbot',
  category: 'chatbot',
  aliases: ['set-cb', 'setcb', 'chatbot', 'cb'],
  run: async (client, message, args) => {
    const perms = new MessageEmbed()
    .setColor()
    .setDescription(`You don't have permission to use this command (NeedPerms: __MANAGE_GUILD__)`)
    if (!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send(perms)
    let channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[0]);

    if (!channel) return message.channel.send('Mentions a channel to set chat bot')
    if (channel.type == 'voice') return message.channel.send('Bruh! Text channel not voice ok?')

    await db.set(`chatbot_${message.guild.id}`, channel.id)

    let embed = new MessageEmbed()
    .setColor("00fff8")
    .setDescription(`Set chat bot channel to <#${channel.id}>`)
    return message.channel.send(embed)
  }
}