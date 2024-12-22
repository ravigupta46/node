const { log } = require('console')
const path=require('path')
console.log(path.sep)

const filepath=path.join('/content/','subfolder','text.txt')
//i have not created this files but output will be /content/subfolder/test.txt

const base=path.basename(filePath)
console.log(base)

const absolute=path.resolve(__dirname,'content','subfolder','text.txt')
console.log(absolute)