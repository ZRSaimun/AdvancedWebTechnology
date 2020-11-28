var db = require('./db');

module.exports = {
    get: function(productId, callback) {
        var sql = "select * from products where F_ID = ?";
        db.getResult(sql, [productId], function(result) {
            callback(result);
        });
    },
    getAll: function(callback) {
        var sql = "select * from products";
        db.getResult(sql, [], function(results) {
            callback(results);
        });
    },
    insert: function(product, callback) {
        var sql = "insert into products values (NULL, ?, ?, ?, ?)";
        db.execute(sql, [product.title, product.description, product.shopId, product.image], function(status) {
            callback(status);
        });
    },
    getAllByShopId: function(shopId, callback) {
        var sql = "select * from products where R_ID = ?";
        db.getResult(sql, [shopId], function(results) {
            callback(results);
        });
    },
    delete: function(productId, callback) {
        var sql = "delete from products where F_ID = ?";
        db.execute(sql, [productId], function(status) {
            callback(status);
        });
    }
}