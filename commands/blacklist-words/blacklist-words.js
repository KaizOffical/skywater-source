const { MessageEmbed } = require('discord.js');

module.exports = {
  name: 'blacklist-words',
  category: 'blacklist-words',
  aliases: ['bl-words', 'blw'],
  perms: ["ADMINISTRATOR"],
  run: async (client, message, args) => {
    message.channel.send("RUN")
  }
}