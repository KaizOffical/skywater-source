const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
  name: "bans",
  category: 'moderators',
  /**
   * @param {Client} client 
   * @param {Message} message 
   * @param {String[]} args
   */
  run: async (client, message, args) => {
    if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("YOU NEED PERMISSIONS __BAN_MEMBERS__");

    const fetchbans = await message.guild.fetchBans();
    const bans = (await fetchbans).map((member) => `\`${member.user.tag}\``).join(' ')
    const embed = new MessageEmbed()
      .setTitle("Ban Members List")
      .setColor("#00ffff")
      .setDescription(bans)
      .setFooter(`Ban List For Server: \n${message.guild.name}`)
    message.channel.send(embed)
  }
}