const mongo = require('mongoose');

const Schema = new mongo.Schema({
  guild: String,
  words: Array,
})

module.exports = mongo.model("blacklist-words", Schema);