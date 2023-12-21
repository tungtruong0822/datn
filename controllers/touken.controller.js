//Lấy mã truy cập
const { getPublicToken } = require("../models/services/aps");

exports.get_Token = async function (req, res, next) {
    try {
      res.json(await getPublicToken());
    } catch (err) {
      next(err);
    }
};