const fs = require('fs');
const path = require('path');

const fileName = 'example.js';
const filePath = path.join(__dirname, 'generated_scripts', fileName);

const content = `
// 这是一个示例JavaScript文件
function greet(name) {
  return \`Hello, \${name}! Welcome to our JavaScript world.\`;
}

console.log(greet('User'));

const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map(num => num * 2);
console.log('Doubled numbers:', doubledNumbers);

console.log('Current time:', new Date().toLocaleString());
`;

fs.mkdirSync(path.dirname(filePath), { recursive: true });

// 写入文件
fs.writeFile(filePath, content, (err) => {
  if (err) {
    console.error('写入文件时发生错误:', err);
  } else {
    console.log('JavaScript文件创建成功:', filePath);
  }
});
