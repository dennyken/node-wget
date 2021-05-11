const https = require('https')
const fs = require('fs')

const url = process.argv[2]

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