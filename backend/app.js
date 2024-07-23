const express = require('express');
const cors = require('cors'); // CORS 설정을 위한 패키지
const app = express();
const bodyParser = require('body-parser');
const models = require('./models');

app.use(cors()); // CORS 미들웨어를 사용하여 다른 도메인에서 오는 요청을 허용합니다.
app.use(bodyParser.json()); // 요청 본문을 JSON으로 파싱합니다.

const bookRoutes = require('./routes/bookRoutes');
const memberRoutes = require('./routes/memberRoutes');
const loanRoutes = require('./routes/loanRoutes');

//bookRoutes, memberRoutes, loanRoutes는 책, 회원, 대출 관련 API 엔드포인트를 정의한 라우터 모듈

//해당 경로로 들어오는 요청을 라우터로 전달
app.use('/api/books', bookRoutes);
app.use('/api/members', memberRoutes);
app.use('/api/loans', loanRoutes);

//Sequelize ORM을 사용하여 db에 연결
models.sequelize.authenticate().then(() => {
  console.log('Database connected');
  app.listen(5000, () => {
    console.log('Server running on port 5000');
  });
}).catch(err => {
  console.error('Unable to connect to the database:', err);
});