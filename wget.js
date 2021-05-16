const { writeFile, getFileName } = require('./resources/file')
const { parseUrl, fetchData } = require('./resources/web')

const [nodePath, mainFile, ...args] = process.argv

const [flags, inputs] = (() => {
  const flags = []
  const inputs = []
  
  args.map(arg => {
    arg.startsWith('-') ? flags.push(arg) : inputs.push(arg)
  })

  return [flags, inputs]
})()

const urls = inputs.map(input => parseUrl(input))

urls.map(url => writeFile(getFileName(url), fetchData(url)))