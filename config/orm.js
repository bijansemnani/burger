var connection = require("../config/connection.js");
function objToSql(ob) {
  var arr = [];

  // loop through the keys and push the key/value as a string int arr
  for (var key in ob) {
    var value = ob[key];
    // check to skip hidden properties
    if (Object.hasOwnProperty.call(ob, key)) {
      // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
        value = "'" + value + "'";
      // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
      // e.g. {sleepy: true} => ["sleepy=true"]
      arr.push(key + "=" + value);
    }
  }

  // translate array of strings to a single comma-separated string
  return arr.toString();
}

var orm = {
  selectAll: function(tableInput, cb) {
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  insertOne: function (tableName, tableInputObj, cb) {
    console.log("here");
    var queryString = "INSERT INTO " + tableName + " SET ";
    queryString += objToSql(tableInputObj);
    console.log(queryString);

    connection.query(queryString, function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });

  },
  updateOne: function () {

  }
}

module.exports = orm;
