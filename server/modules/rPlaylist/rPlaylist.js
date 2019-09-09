const mongoose = require('mongoose');
const Schema = mongoose.Schema

const RecommendPlaylistSchema = new Schema({
  code: Number,
  result: [{
    id: Number,
    fromType: Number,
    name: String,
    copywriter: String,
    picUrl: String,
    canDislike: Boolean,
    playCount: Number,
    trackCount: Number,
    highQuality: Boolean,
    alg: String
  }]
})

const RecommendPlaylist = mongoose.model('RecommendPlaylist', RecommendPlaylistSchema)



module.exports = RecommendPlaylist