const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch'); // ✅ 이 줄 추가

const app = express();
const port = process.env.PORT || 3000;

app.use(cors({
  origin: 'https://kookyomin1.github.io'
}));

app.get('/', (req, res) => {
  res.send('안녕, 교민! 백엔드 연결 성공 🎉');
});

// ✅ 방문자 수 프록시 라우터
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