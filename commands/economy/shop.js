const { MessageEmbed } = require('discord.js');

module.exports = {
  name: "shop",
  category: "economy",
  run: async (client, message, args) => {
    const embed = new MessageEmbed()
      .setTitle("Economy Shop")
      .setDescription("Use command `buy <item_id>` to buy & `sell <item_id>(all)` to sell")
      .addField("You can buy:\n🎣 • Fishing Pole - ID: `001` - Price: `100`", "Allows you to fish a random amount of fish (`fish`)")
      .addField("🔫 • Gun - ID: `002` - Price: `100`", "Allows you to hunt a random animal(s) (`hunt`)")
      .addField("🍪 • Cookie - ID: `003` - Price: `10`", "Eat for get some xp (`eat`)")
      .addField("You can sell:\n🐟 • Fish - ID: `001` Cost: `10`", "Use `fish` to get some fish")
      .addField("🐳 • Whale - ID: `002` - Cost: `100`", "Use `hunt` to get some whale")
      .addField("🐘 • Elephant - ID: `003` - Cost: `50`", "Use `hunt` to get some elephant")
      .addField("🐄 • Cow - ID: `004` - Cost: `10`", "Use `hunt` to get some cow")
      .setFooter("SkyWater Bot Economy", message.author.displayAvatarURL({ dynamic: true }))
      .setColor("#00ffff")
    message.channel.send(embed)
  }
}