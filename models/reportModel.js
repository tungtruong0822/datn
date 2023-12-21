const sql = require('./db');

const reportModel = {
  getAllReport: function(callback) {
    sql.query("SELECT * FROM report", function(err, res) {
      if (err) {
        return callback(err, null);
      }
      return callback(null, res);
    });
  },

  insertReport: function(newReport, callback) {
    sql.query("INSERT INTO report SET ?", newReport, function(err, res) {
      if (err) {
        return callback(err, null);
      }
      return callback(null, res);
    });
  },

  findReportById: function(reportId, callback) {
    sql.query("SELECT * FROM report WHERE id=?", reportId, function(err, rows) {
      if (err) {
        return callback(err);
      }
      if (rows.length <= 0) {
        return callback(null, null);
      }
      return callback(null, rows[0]);
    });
  },

  updateReport: function(reportId, updatedReport, callback) {
    sql.query("UPDATE report SET ? WHERE id=?", [updatedReport, reportId], function(err, result) {
      if (err) {
        return callback(err);
      }
      if (!result) {
        return callback("No result returned");
      }
      return callback(null, result.affectedRows);
    });
  },

  deleteReport: function(reportId, callback) {
    sql.query("DELETE FROM report WHERE id=?", reportId, function(err, result) {
      if (err) {
        return callback(err);
      }
      return callback(null, result.affectedRows);
    });
  }
};

module.exports = reportModel;
