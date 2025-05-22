const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// 🔐 CORS (프론트가 따로 없으므로 '*'로 허용해도 무방)
app.use(cors());

// ✅ 정적 파일 서빙: public 폴더
app.use(express.static(path.join(__dirname, 'public')));

// ✅ 기본 라우터 - index.html 서빙
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// ✅ 방문자 수 프록시 API
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