const https = require('https')
const { writeFile } = require('./resources/file')
const { parseUrl } = require('./resources/web')

const flags = process.argv.filter(arg => arg.startsWith('-'))
let input = process.argv.slice(2).find(arg => !arg.startsWith('-'))
const url = parseUrl(input)

if(url.href) {
  https.get(url.href, (res) => {
    let data = ''
  
    res.on('data', (chunk) => {
      data += chunk
    })
  
    res.on('end', () => {
      const fileName = url.pathname.slice(url.pathname.lastIndexOf('/') + 1)
  
      writeFile(fileName, data)
    })
  }).on('error', err => console.log(err))
}
