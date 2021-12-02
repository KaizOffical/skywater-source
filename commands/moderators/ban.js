const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
  name: "ban",
  category: 'moderators',
  /**
   * @param {Client} client 
   * @param {Message} message 
   * @param {String[]} args
   */
  run: async (client, message, args) => {
    if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("YOU NEED PERMISSIONS __BAN_MEMBERS__");

    const member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
    if(!member) return message.channel.send("Please mentions user or specify user id to ban");

    if(message.member.roles.highest.position <= member.roles.highest.position) return message.channel.send("Hm... You can't ban that user because you either have the same role or your role is lower");

    const reason = args.slice(1).join(' ') || "None";
    member.ban({ reason });
    message.channel.send(`Banned ${member} | Reason: ${reason}`)
  }
}