const mongoose = require('mongoose');
const Schema = mongoose.Schema

const NewSongSchema = new Schema({
  code: Number,
  category: Number,
  result: [Object]
})

const NewSong = mongoose.model('NewSong',NewSongSchema)

module.exports = NewSong