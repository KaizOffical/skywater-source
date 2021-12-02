const { MessageEmbed } = require('discord.js');
const { OwnerID } = require('../../config.json');

module.exports = {
  name: 'servers',
  dev: true,
  category: 'developers',
  aliases: ['svs'],
  run: async (client, message, args) => {
    const embed = new MessageEmbed()
      .setTitle("All Servers")
      .setColor('#00ffff')
      .setDescription(`\`\`\`${client.guilds.cache.map(g => g.name).join(`\n`)}\`\`\``)
      .setFooter(`Total Servers: ${client.guilds.cache.size}`)
    message.channel.send(embed)
  }
}