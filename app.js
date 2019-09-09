const express = require('express')
const mongoose = require('mongoose')
const rPlaylist = require('./server/api/rPlaylist');

let dbUrl = 'mongodb://localhost:27017/music'

mongoose.connect(dbUrl,{
  useNewUrlParser: true
}).catch(()=>{
  console.log('连接数据库失败')
})

mongoose.Promise = global.Promise

const app = express()

app.use('/api',rPlaylist)

app.listen(4000,()=>{
  console.log(`Express started on http://localhsot:4000`)
})
