exports.parseUrl = (url) => {
  try {
    return new URL(url)
  }
  catch (err) {
    process.stderr.write('Error: Invalid URL')
  }

  process.exit()
}