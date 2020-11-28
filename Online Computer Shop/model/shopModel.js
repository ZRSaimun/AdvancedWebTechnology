var db = require('./db');

module.exports = {
    get: function(shopId, callback) {
        var sql = "select * from shops where R_ID = ?";
        db.getResult(sql, [shopId], function(result) {
            callback(result);
        });
    },
    getAll: function(callback) {
        var sql = "select * from shops";
        db.getResult(sql, [], function(results) {
            callback(results);
        });
    },
    insert: function(shop, callback) {
        var sql = "insert into shops values (NULL, ?, ?, ?, ?, ?)";
        db.execute(sql, [shop.name, shop.description, shop.type, shop.location, shop.status], function(status) {
            callback(status);
        });
    },
    update: function(shop, callback) {
        var sql = "update shops set R_NAME = ?, R_DESCRIPTION = ?, R_TYPE = ?, R_LOCATION = ?, R_STATUS  = ? where R_ID = ?";
        db.execute(sql, [shop.name, shop.description, shop.type, shop.location, shop.status, shop.id], function(status) {
            callback(status);
        });
    },
    delete: function(shopId, callback) {
        var sql = "delete from shops where R_ID = ?";
        db.execute(sql, [shopId], function(status) {
            callback(status);
        });
    }

}