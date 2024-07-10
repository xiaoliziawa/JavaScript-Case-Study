const fs = require('fs');
const path = require('path');

const fileName = 'example.txt';
const filePath = path.join(__dirname, 'example_txt', fileName);

const content = `我是一个TXT文本鸭,\n现在是:${new Date().toLocaleString()}`

fs.mkdirSync(path.dirname(filePath), { recursive: true });

fs.writeFile(filePath, content, 'utf8', (err) => {
    if (err) {
        console.log("发生了点以为捏~(￣▽￣)~*");
    }
    else {
        console.log("写入成功φ(゜▽゜*)♪");
    }
});