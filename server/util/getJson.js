const fs = require('fs');


function getJson(path) {
  return new Promise((resolve,reject)=>{
    fs.readFile(path,(err,data)=>{
      if(err) {
        console.error(err);
      }
      resolve(JSON.parse(data))
      reject()
    })
  })
}

module.exports = getJson