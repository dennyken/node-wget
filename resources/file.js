const fs = require('fs')

exports.writeFile = (path, file) => {
  fs.writeFile(path, file, err => {
    if(err) console.log('Error: Could not write file')
  })
}