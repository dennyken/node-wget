const https = require('https')
const { writeFile, getFileName } = require('./resources/file')
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
      writeFile(getFileName(url), data)
    })
  }).on('error', err => console.log(err))
}
