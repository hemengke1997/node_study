const express = require('express');
const router = express.Router()
const getJson = require('../util/getJson');
const Playlist = require('../modules/rPlaylist/rPlaylist');
const NewSongs = require('../modules/rPlaylist/rNewSong');
const mongoose = require('mongoose');
const path = require('path');


router.get('/personalized', (req, res, next) => {
  Playlist.find((err, set) => {
    if (!set.length) {
      getJson(path.join(__dirname, '../data/recommend/playlist.json')).then(data=> {
        const recommendPlaylist = new Playlist(data)
        recommendPlaylist.save((err, result) => {
          if (err) {
            console.log('rplaylist error')
          }
        })
        res.send(recommendPlaylist)
      }).catch(res=>{
        console.log(res)
      })
    }
  }).then(item => {
    res.send(item)
    next('route')
  })
})

router.get('/personalized/newsong', (req, res, next) => {
  NewSongs.find((err, set) => {
    // if(set) {
    //   NewSongs.deleteMany({result: []},(err,result)=>{
    //     console.log(result)
    //   })
    // }
    if (!set.length) {
      getJson(path.join(__dirname, '../data/recommend/newsong.json')).then(data => {
        const newSongs = new NewSongs(data)
        res.send(newSongs)
      }).catch(res=>{
        console.log(res)
      })
    }
  })
})



module.exports = router