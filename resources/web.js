getAdapter = (protocol) => {
  const adapters = {
    'http:': require('http'),
    'https:': require('https')
  }

  return adapters[protocol]
}

exports.fetchData = (url) => {
  getAdapter(url.protocol).get(url.href, (res) => {
    let data = ''
  
    res.on('data', (chunk) => {
      data += chunk
    })
  
    res.on('end', () => {  
      return data
    })
  }).on('error', err => console.log(err))
}

exports.parseUrl = (url) => {
  try {
    return new URL(url)
  } catch (err) {
    process.stderr.write('Error: Invalid URL')
  }

  process.exit()
}