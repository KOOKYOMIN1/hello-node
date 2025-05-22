const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('안녕, 교민!');
});

app.listen(port, () => {
  console.log(`서버 실행 중: http://localhost:${port}`);
});
fetch('http://localhost:3000')
  .then(res => res.text())
  .then(data => {
    document.body.innerHTML = data;
  });