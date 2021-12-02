const { MessageEmbed } = require('discord.js')

module.exports = {
  name: 'uptime',
  aliases: ['up', 'upt'],
  category: 'bot',
  run: (client, message, args) => {
    const days = Math.floor(client.uptime / 86400000)
    const hours = Math.floor(client.uptime / 3600000) % 24 // 1 Day = 24 Hours
    const minutes = Math.floor(client.uptime / 60000) % 60 // 1 Hour = 60 Minutes
    const seconds = Math.floor(client.uptime / 1000) % 60 // 1 Minute = 60 Seconds
    const uptime = (Date.now() / 1000 - client.uptime / 1000).toFixed(0);

    const embed = new MessageEmbed()
      .setAuthor(`${client.user.username}`, client.user.displayAvatarURL({ dynamic: true }))
      .setTimestamp()
      .setTitle('Uptime')
      .setColor('RANDOM')
      .setDescription(`
\`\`\`${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds\`\`\`

Uptime Since: <t:${uptime}:T>
Uptime for: <t:${uptime}:R>
      `)
    message.channel.send(embed)
  }
}