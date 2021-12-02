const { MessageButton } = require('discord-buttons');

module.exports = {
  name: "support",
  category: "bot",
  run: async (client, message, args) => {
    let button = new MessageButton()
      .setLabel("Click to join server support")
      .setStyle("url")
      .setEmoji("📩")
      .setURL("https://dsc.ink/skywater-support")
    await message.channel.send(`Click the button below to join support server`, button);
  }
}