const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000; // 你可以自定义端口号

// 静态文件托管
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
  console.log(`网站已托管在 http://localhost:${port}`);
});
