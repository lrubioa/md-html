const fs = require('fs')
const MarkdownIT = require('markdown-it')

md = new MarkdownIT();

const readStream = fs.createReadStream('input.md', 'utf8')
const writeStream = fs.createWriteStream('output.html', 'utf8')

var result = md.render(writeStream)
console.log(result)