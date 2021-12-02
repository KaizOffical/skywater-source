const { MessageButton } = require('discord-buttons');

module.exports = {
  name: "invite",
  category: "bot",
  run: async (client, message, args) => {
    let button = new MessageButton()
      .setLabel("Click to invite")
      .setStyle("url")
      .setEmoji("867643303784873995")
      .setURL("https://dsc.gg/skywater")
    await message.channel.send(`Click the button below to invite me`, button);
  }
}