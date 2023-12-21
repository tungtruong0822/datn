const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const axios = require("axios");
const app = express();
const port = 3000;

// Cấu hình ứng dụng
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Kết nối đến cơ sở dữ liệu MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'demo',
});

db.connect((err) => {
  if (err) {
    console.error('Lỗi kết nối cơ sở dữ liệu:', err);
  } else {
    console.log('Kết nối cơ sở dữ liệu thành công');
  }
});

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

// Ứng dụng lắng nghe cổng 3000
const server = app.listen(port, () => {
  console.log(`Server đang lắng nghe tại http://localhost:${port}`);
});

const io = require('socket.io')(server);
