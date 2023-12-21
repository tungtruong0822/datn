const sql = require('./db');

const assetsModel = {
  getAllAsset: function(callback) {
    sql.query("SELECT * FROM assets", function(err, res) {
      if (err) {
        return callback(err, null);
      }
      return callback(null, res);
    });
  },
}

//   insertAsset: function(newAsset, callback) {
//     sql.query("INSERT INTO assets SET ?", newAsset, function(err, res) {
//       if (err) {
//         return callback(err, null);
//       }
//       return callback(null, res);
//     });
//   },

//   findAssetById: function(typeId, callback) {
//     sql.query("SELECT * FROM assets WHERE asset_type_id=?", assetId, function(err, rows) {
//       if (err) {
//         return callback(err);
//       }
//       if (rows.length <= 0) {
//         return callback(null, null);
//       }
//       return callback(null, rows[0]);
//     });
//   },

//   updateType: function(typeId, updatedType, callback) {
//     sql.query("UPDATE asset_type SET ? WHERE asset_type_id=?", [updatedType, typeId], function(err, result) {
//       if (err) {
//         return callback(err);
//       }
//       if (!result) {
//         return callback("No result returned");
//       }
//       return callback(null, result.affectedRows);
//     });
//   },

//   deleteType: function(typeId, callback) {
//     sql.query("DELETE FROM asset_type WHERE asset_type_id=?", typeId, function(err, result) {
//       if (err) {
//         return callback(err);
//       }
//       return callback(null, result.affectedRows);
//     });
//   }
// };

module.exports = assetsModel;
