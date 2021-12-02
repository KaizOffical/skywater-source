const ms = require('ms');

module.exports = {
  name: "gdelete",
  category: 'giveaway',
  aliases: ['gd'],
  run: async (client, message, args) => {
    const messageID = args[0];
    if(!messageID) return message.reply("Please specify a valid giveaway message id")
    client.giveawaysManager.delete(messageID).then(() => {
      console.log(`Delete ${messageID}`);
      message.reply("Sucess delete giveaway (ID:  " + messageID + ")")
    }).catch((err) => {
      message.reply('No giveaway found for ' + messageID + ', please check and try again');
    });
  }
}