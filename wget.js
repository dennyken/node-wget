const { writeFile, getFileName } = require('./resources/file')
const { parseUrl, fetchData } = require('./resources/web')

const flags = process.argv.filter(arg => arg.startsWith('-'))
let input = process.argv.slice(2).find(arg => !arg.startsWith('-'))
const url = parseUrl(input)

writeFile(getFileName(url), fetchData(url))