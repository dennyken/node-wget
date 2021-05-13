const fs = require('fs')

exports.writeFile = (path, file) => {
  fs.writeFile(path, file, err => {
    if(err) process.stderr.write('Error: Could not write file')
  })
}

exports.getFileName = (url) => {
  return url.pathname.slice(url.pathname.lastIndexOf('/') + 1)
}