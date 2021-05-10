console.log(process.argv)

const https = require('https');
const fs = require('fs')

const url = 'https://jsonplaceholder.typicode.com/posts'

https.get(url, (res) => {
  let data = '';  

res.on('data', (chunk) => {
    data += chunk
  })

  res.on('end', () => {
    const fileName = url.slice(url.lastIndexOf('/') + 1)

    fs.writeFile(fileName, data, (err) => {
      if (err) console.log(err)
    })
  })
}).on('error', (err) => {
  console.log(err)
})