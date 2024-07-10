const fs = require('fs');
const path = require('path');

const fileName = 'example.json';
const filePath = path.join(__dirname, 'exported_files', fileName);

const content = JSON.stringify({ 
  name: "Example",
  description: "这是一个示例JSON文件",
  createdAt: new Date().toISOString()
}, null, 2);

fs.mkdirSync(path.dirname(filePath), { recursive: true });

// 写入文件
fs.writeFile(filePath, content, (err) => {
  if (err) {
    console.error('写入文件时发生错误:', err);
  } else {
    console.log('文件创建成功:', filePath);
  }
});
