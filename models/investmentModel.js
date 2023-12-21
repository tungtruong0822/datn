const sql = require('./db');

const investmentModel = {
  getAllInvestment: function(callback) {
    sql.query("SELECT * FROM investment", function(err, res) {
      if (err) {
        return callback(err, null);
      }
      return callback(null, res);
    });
  },

  insertInvestment: function(newInvestment, callback) {
    sql.query("INSERT INTO investment SET ?", newInvestment, function(err, res) {
      if (err) {
        return callback(err, null);
      }
      return callback(null, res);
    });
  },

  findInvestmentById: function(investmentId, callback) {
    sql.query("SELECT * FROM investment WHERE id=?", investmentId, function(err, rows) {
      if (err) {
        return callback(err);
      }
      if (rows.length <= 0) {
        return callback(null, null);
      }
      return callback(null, rows[0]);
    });
  },

  updateInvestment: function(investmentId, updatedInvestment, callback) {
    sql.query("UPDATE investment SET ? WHERE id=?", [updatedInvestment, investmentId], function(err, result) {
      if (err) {
        return callback(err);
      }
      if (!result) {
        return callback("No result returned");
      }
      return callback(null, result.affectedRows);
    });
  },

  deleteInvestment: function(investmentId, callback) {
    sql.query("DELETE FROM investment WHERE id=?", investmentId, function(err, result) {
      if (err) {
        return callback(err);
      }
      return callback(null, result.affectedRows);
    });
  }
};

module.exports = investmentModel;
