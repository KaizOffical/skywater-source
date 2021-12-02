const ms = require('ms');

module.exports = {
  name: "gstart",
  category: 'giveaway',
  aliases: ['gst'],
  run: async (client, message, args) => {
    const channel = await message.mentions.channels.first();
    if(!channel) return message.reply("Please mentions channel to start giveaway")

    const time = args[1];
    if(!time || isNaN(ms(time))) return message.reply("Please specify duration time and that is valid");

    const winner = args[2];
    if (isNaN(winner) || (parseInt(winner) <= 0)) return message.channel.send('Please provide a valid number of winners!');

    const string = args.slice(3);
    if(!string) return message.channel.send("Ok! I'll giveaway not thing");
    client.giveawaysManager.start(channel, {
      time: ms(time),
      winnerCount: parseInt(winner),
      prize: args.slice(3).join(' ')
    }).then((gData) => {
        console.log(gData); // {...} (messageID, end date and more)
      });
  }
}