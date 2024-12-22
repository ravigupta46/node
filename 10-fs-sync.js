const {readFileSync,writeFileSync}=require('fs');

const first=readFileSync('./content/first.txt','utf8')
const second=readFileSync('./content/second.txt','utf8')

console.log(first,second)
writeFileSync(
    './content/result-stync.txt',`here is the result: ${first},${second}`,{flag:'a'}
)

//flag a is used so as new data is used in append mode mode and does not overwrite on previous one


