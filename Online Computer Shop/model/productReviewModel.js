var db = require('./db');

module.exports = {
    get: function(foodReviewId, callback) {
        var sql = "select * from product_review where = FR_ID = ?";

        db.getResult(sql, [productReviewId], function(result) {
            callback(result);
        });
    },
    getByProductId: function(productId, callback) {
        var sql = "select * from product_review where F_ID = ?";

        db.getResult(sql, [productId], function(result) {
            callback(result);
        });
    },
    getAll: function(callback) {
        var sql = "select * from product_review";
        db.getResult(sql, [], function(results) {
            callback(results);
        });
    },
    insert: function(review, callback) {
        var sql = "insert into product_review values (NULL, ?, ?, ?, ?)";
        db.execute(sql, [review.text, review.time, review.productId, review.memberId], function(status) {
            callback(status);
        });
    },
}