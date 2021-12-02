const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
  name: "unban",
  category: 'moderators',
  /**
   * @param {Client} client 
   * @param {Message} message 
   * @param {String[]} args
   */
  run: async (client, message, args) => {
    if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("YOU NEED PERMISSIONS __BAN_MEMBERS__");

    const id = args[0];
    if (!id) return message.channel.send("Please specify member id want to unban");

    const banMembers = await message.guild.fetchBans();
    if(!banMembers.find((user) => user.user.id === id)) return message.reply("This user is not banned!!! (Use `--bans` to see the ban list of this server)");

    message.guild.members.unban(id);
    message.channel.send("Unbanned user have id "+ id);
  }
}