const { getAudioUrl } = require('google-tts-api')
const { MessageEmbed } = require("discord.js")
const db = require('quick.db');

module.exports = {
    name: 'speak',
    aliases:['talk',`t`],
    description: "just for speak",
    category: 'utils',
    run: async (client, message, args) => {

        const voiceChannel = message.member.voice.channel
        if (!voiceChannel) return message.channel.send('Please join voice channel first')
        if(!args[0]) return message.channel.send('Please specify somethings to speak') 
        const string = args.join('')
        if (string.length > 200) return message.channel.send('Hm.... Too much charecters.')
        
          
        const audioUrl = await getAudioUrl(string,{
          lang:"en",
          slow:false,
          host:'https://translate.google.com',
          timeout:10000,
        })
        try{
          voiceChannel.join().then(connection=>{
            const dispatcher = connection.play(audioUrl)
            dispatcher.on('finish',() => {
              voiceChannel.leave()
            })
          })
          
          
        }
        catch(e) {
          message.channel.send('Error!!!')
          console.log(e)
        }
    }

}
