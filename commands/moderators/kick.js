const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
  name: "kick",
  category: 'moderators',
  /**
   * @param {Client} client 
   * @param {Message} message 
   * @param {String[]} args
   */
  run: async (client, message, args) => {
    if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("YOU NEED PERMISSIONS __KICK_MEMBERS__");

    const member = message.mentions.members.first();
    if(!member) return message.channel.send("Please mentions user to kick");

    if(message.member.roles.highest.position <= member.roles.highest.position) return message.channel.send("Hm... You can't kick that user because you either have the same role or your role is lower");

    const reason = args.slice(1).join(' ') || "None";
    member.kick({ reason });
    message.channel.send(`Kicked ${member} | Reason: ${reason}`)
  }
}