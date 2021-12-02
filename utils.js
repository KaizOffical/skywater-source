const checkSameRoom = (message) => {
  if(!message.member.voice.channel) return message.lineReply('Please join voice channel first');
  if(!message.guild.me.voice.channelID || message.guild.me.voice.channelID == message.member.voice.channelID) return;
  return message.lineReply('You must in the same voice channel as bot to use this command');
}

module.exports = {
  checkSameRoom,
}