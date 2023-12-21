const sql = require('./db');

const typeAssetModel = {
  getAllType: function(callback) {
    sql.query("SELECT * FROM asset_type", function(err, res) {
      if (err) {
        return callback(err, null);
      }
      return callback(null, res);
    });
  },

  insertType: function(newType, callback) {
    sql.query("INSERT INTO asset_type SET ?", newType, function(err, res) {
      if (err) {
        return callback(err, null);
      }
      return callback(null, res);
    });
  },

  findTypeById: function(typeId, callback) {
    sql.query("SELECT * FROM asset_type WHERE asset_type_id=?", typeId, function(err, rows) {
      if (err) {
        return callback(err);
      }
      if (rows.length <= 0) {
        return callback(null, null);
      }
      return callback(null, rows[0]);
    });
  },

  updateType: function(typeId, updatedType, callback) {
    sql.query("UPDATE asset_type SET ? WHERE asset_type_id=?", [updatedType, typeId], function(err, result) {
      if (err) {
        return callback(err);
      }
      if (!result) {
        return callback("No result returned");
      }
      return callback(null, result.affectedRows);
    });
  },

  deleteType: function(typeId, callback) {
    sql.query("DELETE FROM asset_type WHERE asset_type_id=?", typeId, function(err, result) {
      if (err) {
        return callback(err);
      }
      return callback(null, result.affectedRows);
    });
  }
};

module.exports = typeAssetModel;
