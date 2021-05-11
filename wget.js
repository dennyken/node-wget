const url = require('url')
const https = require('https')
const fs = require('fs')

const flags = process.argv.filter(arg => arg.startsWith('-'))
let input = process.argv.slice(2).find(arg => !arg.startsWith('-'))

try {
  input = new URL(input)
}
catch (err) {
  console.error('Error: Invalid URL')
}


https.get(input, (res) => {
  let data = ''

  res.on('data', (chunk) => {
    data += chunk
  })

  res.on('end', () => {
    const fileName = input.slice(input.lastIndexOf('/') + 1)

    fs.writeFile(fileName, data, (err) => {
      if (err) console.log(err)
    })
  })
}).on('error', err => console.log(err))