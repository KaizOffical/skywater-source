const axios = require('axios');
const db = require('quick.db')

module.exports  = {
  name: 'chat',
  category: 'chatbot',
  aliases: ['ch'],
  run: async (client, message, args) => {
    try {
      const res = await axios.get(`http://api.brainshop.ai/get?bid=156727&key=GUo0Txov0dzluxq9&uid=1&msg=${encodeURIComponent(args.join(' '))}`);
      message.channel.send(res.data.cnt)
    } catch(e) {
        message.channel.send("LMAO!LMAO!LAMO!Some ERROR here");
    }
  }
}