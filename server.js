const { PORT } = require("./config/config.js");
const routes = require('./routes/routes');
const express = require("express");
const bodyParser = require("body-parser");
const methodOverride = require('method-override');
const session = require('express-session');
const moment = require('moment');
const flash = require('express-flash');
const cookieParser = require('cookie-parser');
const { check, validationResult } = require('express-validator');
const http = require('http');
const socketIo = require('socket.io');
const axios = require('axios');
const mysql = require('mysql');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.locals.moment = moment;
app.locals.shortDateFormat = "DD/MM/YYYY";

require('dotenv/config');

app.use(cookieParser('keyboard cat'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Sử dụng ejs
app.set("view engine", "ejs");
// Đặt thư mục chứa views
app.set('views', __dirname + '/views');

// Public
app.use(express.static("public"));

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: true,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}));

app.use("/assets", express.static("assets"));

app.use(methodOverride('_method', { methods: ['POST', 'GET'] }));
app.use(methodOverride(function (req, res) {
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    var method = req.body._method;
    delete req.body._method;
    return method;
  }
}));



// Kết nối đến cơ sở dữ liệu MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root', // Thay đổi tên người dùng và mật khẩu nếu cần
  password: '',
  database: 'demo', // Thay đổi tên cơ sở dữ liệu nếu cần
});

db.connect((err) => {
  if (err) {
    console.error('Lỗi kết nối cơ sở dữ liệu:', err);
  } else {
    console.log('Kết nối cơ sở dữ liệu thành công');
  }
});
// Phần xử lý POST request từ biểu mẫu
// Xử lý POST request từ biểu mẫu
app.post("/projects", (req, res) => {
  const {
    construction_name,
    asset_name,
    location,
    note,
    suggest,
    test_day,
    time,
    technical_name,
  } = req.body;

  // Thực hiện truy vấn để lưu dữ liệu vào cơ sở dữ liệu
  const sql = `INSERT INTO report (construction_name, asset_name, location, note, suggest, test_day, time, technical_name)
               VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;
  const values = [
    construction_name,
    asset_name,
    location,
    note,
    suggest,
    test_day,
    time,
    technical_name,
  ];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error("Lỗi truy vấn cơ sở dữ liệu:", err);
      res.status(500).send("Lỗi khi lưu dữ liệu vào cơ sở dữ liệu");
    } else {
      console.log("Dữ liệu đã được lưu thành công");
          // Gửi thông báo tới máy chủ Webhooks thông qua HTTP POST request
          const webhookData = {
            technical_name,
            time,
          };

          axios.post('http://localhost:3000/webhook', webhookData)
            .then(response => {
              console.log('Response từ Webhooks:', response.data);
            })
            .catch(error => {
              console.error('Lỗi khi gửi POST request tới Webhooks:', error);
            });
      res.send("Dữ liệu đã được lưu thành công");
    }
  });
});
// Máy chủ Webhooks
app.post('/webhook', (req, res) => {
  console.log('Nhận dữ liệu từ Webhooks:', req.body);

  // Xử lý dữ liệu từ Webhooks ở đây
  const { technical_name, time } = req.body;

  // Gửi thông báo tới trang admin thông qua Socket.io
  io.emit('new-proposal', { technical_name, time });

  res.status(200).send('OK');
});






// Xử lý các sự kiện với Socket.io
io.on('connection', (socket) => {
  console.log('A user connected');

  socket.on('sendReport', (reportData) => {
    io.emit('newReport', reportData);
  });

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

app.use(flash());

app.use('/', routes);

// Xử lý lỗi
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send(err.message);
});

app.listen(PORT, function () {
  console.log(`Chương trình khởi động ở cổng ${PORT}...`);
  console.log(`Nhấn vào đây để sử dụng chương trình (Ctrl + Click): http://localhost:${PORT}`);
});
