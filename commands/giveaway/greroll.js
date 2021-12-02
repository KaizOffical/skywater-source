const ms = require('ms');

module.exports = {
  name: "reroll",
  category: 'giveaway',
  aliases: ['grr'],
  run: async (client, message, args) => {
    const messageID = args[0];
    if(!messageID) return message.reply("Please specify a valid giveaway message id")
    client.giveawaysManager.reroll(messageID).then(() => {
      console.log(`Reroll ${messageID}`);
    }).catch((err) => {
      message.reply('No giveaway found for ' + messageID + ', please check and try again');
    });
  }
}