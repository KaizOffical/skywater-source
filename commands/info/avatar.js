const { MessageEmbed } = require('discord.js')

module.exports = {
  name: "avatar",
  category: 'info',
  aliases: ['avt', 'av'],
  run: (client, message, args) => {
    const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member
      const URL = member.user.avatarURL({ format: "jpg", dynamic: true, size: 1024 })
      const avatar = new MessageEmbed()
      .setImage(URL)
      .setURL(URL)
      .setTitle("Click to Download Image")
      message.channel.send(avatar)
  }
}