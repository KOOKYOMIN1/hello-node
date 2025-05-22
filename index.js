const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors({
  origin: 'https://hello-node-fixed.onrender.com'
}));
// ✅ 정적 파일 서빙
app.use(express.static(path.join(__dirname, 'public')));

// ✅ 루트 경로 → index.html 열기
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/api/visitor', async (req, res) => {
  try {
    const response = await fetch('https://api.countapi.xyz/hit/kookyomin1.github.io/visits');
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'API 요청 실패' });
  }
});

app.listen(port, () => {
  console.log(`서버 실행 중: http://localhost:${port}`);
});