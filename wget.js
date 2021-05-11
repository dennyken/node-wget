const https = require('https')
const fs = require('fs')

const flags = process.argv.filter(arg => arg.startsWith('-'))
let url = process.argv.slice(2).find(arg => !arg.startsWith('-'))

https.get(url, (res) => {
  let data = ''

  res.on('data', (chunk) => {
    data += chunk
  })

  res.on('end', () => {
    const fileName = url.slice(url.lastIndexOf('/') + 1)

    fs.writeFile(fileName, data, (err) => {
      if (err) console.log(err)
    })
  })
}).on('error', err => console.log(err))