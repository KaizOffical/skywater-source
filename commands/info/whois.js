const { MessageEmbed } = require('discord.js')

module.exports = {
  name: "whois",
  aliases: ['userinfo', 'ui'],
  category: "info",
  run: async (client, message, args) => {
    const member = message.mentions.users.first() || message.guild.members.cache.get(args[0]) || message.member;
    const embed = new MessageEmbed()
      .setColor("#00ffff")
      .addField("Username:", member.user.username, true)
      .addField("Discriminator:", member.user.discriminator, true)
      .addField("Nickname", member.nickname ? member.nickname : "No Nickname", true)
      .addField("Bot ?", member.user.bot ? "True" : "False", true)
      .addField("Adminitrastor ?", member.hasPermission("ADMINITRASTOR") ? "True" : "False", true)

    message.channel.send(embed)
  }
}