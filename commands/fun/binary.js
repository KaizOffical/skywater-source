const { MessagEmbed } = require('discord.js');
const axios = require('axios');

module.exports = {
  name: "binary",
  category: 'fun',
  aliases: ['bina'],
  run: async (client, message, args) => {
    if(!args[0]) return message.reply("Please specify way to covert (encode or decode)");

    const query = args.shift().toLowerCase();
    let word = args.join(' ');

    if(query=='encode') {
      if (!word) return message.reply("Please specify word to encode");
      const { data } = await axios.get(
        `https://some-random-api.ml/binary?text=${encodeURIComponent(
          word
        )}`
      );

      message.channel.send(data.binary, {
        code: "",
      }); //monbrey/discord.js#inline-replies
    } else if (query=='decode') {
      if (!word) return message.reply("Please specify word to decode");
      const { data } = await axios.get(
        `https://some-random-api.ml/binary?decode=${encodeURIComponent(
          word
        )}`
      );

      message.channel.send(data.text, {
        code: "",
      });
    } else return message.reply("That option inst valid or something went worng")
  }
}