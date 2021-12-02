const discord = require("discord.js");

module.exports = {
    name: "ping",
    category: "bot",
    
    run: async (client, message, args) => {
      message.channel.send(`:ping_pong: Pong! \`${client.ws.ping}ms\``)
  }
};

