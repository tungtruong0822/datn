const sql = require('./db');
const constructionModel = {

 getAllConstruction : function (result) {
  sql.query("SELECT * FROM construction", function (err, rows,fields) {
    if (err) {
      return result(err, null);
    }else{
    return result(null, rows);
    }
  });
},
 insertConstruction :  function (newConstruction, result) {
  sql.query("INSERT INTO construction SET ?", newConstruction, function (err, res) {
    if (err) {
      return result(err, null);
    }
    return result(null, res);
  });
},
findConstructionById: function(constructionId, callback) {
  sql.query("SELECT * FROM construction WHERE id=?", constructionId, function(err, rows) {
    if (err) {
      return callback(err);
    }
    if (rows.length <= 0) {
      return callback(null, null);
    }
    return callback(null, rows[0]);
  });
},

}
module.exports = constructionModel;