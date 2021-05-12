exports.parseUrl = (url) => {
  try {
    return new URL(url)
  }
  catch (err) {
    console.error('Error: Invalid URL') 
  }

  process.exit()
}