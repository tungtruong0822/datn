const path = require('path');
require('dotenv').config({ path: path.join(__dirname,'.env') });

let { APS_CLIENT_ID, APS_CLIENT_SECRET, PORT } = process.env;
if (!APS_CLIENT_ID || !APS_CLIENT_SECRET) {
    console.warn('Cảnh báo: Bạn đang thiếu một số biến môi trường.');
    process.exit(1);
}
PORT = PORT || 3000;

module.exports = {
    APS_CLIENT_ID,
    APS_CLIENT_SECRET,
    PORT
};
