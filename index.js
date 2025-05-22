const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000; // Render 환경에서도 잘 작동하게 수정

// 🔐 CORS 설정 (GitHub Pages 프론트엔드만 허용)
app.use(cors({
  origin: 'https://kookyomin1.github.io'
}));

// ✅ 간단한 라우터
app.get('/', (req, res) => {
  res.send('안녕, 교민! 백엔드 연결 성공 🎉');
});

// ✅ 서버 시작
app.listen(port, () => {
  console.log(`서버 실행 중: http://localhost:${port}`);
});