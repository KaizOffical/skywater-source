const ms = require('ms');

module.exports = {
  name: "gend",
  category: "giveaway",
  aliases: ['ge'],
  run: async (client, message, args) => {
    const messageID = args[0];
    if(!messageID) return message.reply("Please specify a valid giveaway message id")
    client.giveawaysManager.end(messageID).then(() => {
      console.log('End '+ messageID)
    }).catch((err) => {
      message.channel.send('No giveaway found for ' + messageID + ', please check and try again');
      console.log(err)
    });
  }
}