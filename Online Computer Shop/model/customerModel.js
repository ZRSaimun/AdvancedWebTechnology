var db = require('./db');

module.exports = {
    get: function(customerId, callback) {
        var sql = "select * from customers where M_ID = ?";

        db.getResult(sql, [customerId], function(result) {
            callback(result);
        });
    },
    getAll: function(callback) {
        var sql = "select * from customers";
        db.getResult(sql, [], function(results) {
            callback(results);
        });
    },
    insert: function(customer, callback) {
        var sql = "insert into customers values (?, ?, ?, ?)";
        db.execute(sql, [customer.id, customer.name, customer.address, customer.email], function(status) {
            callback(status);
        });
    },
    delete: function(customerId, callback) {
        var sql = "delete from customers where M_ID = ?";
        db.execute(sql, [customerId], function(status) {
            callback(status);
        });
    }
}