var express = require('express');
var adminModel = require.main.require('./model/adminModel');
var customerModel = require.main.require('./model/customerModel');
var shopModel = require.main.require('./model/shopModel');
var productModel = require.main.require('./model/productModel');
var productReviewModel = require.main.require('./model/productReviewModel');

var router = express.Router();


var router = express.Router();

router.get('*', function(req, res, next) {
    if (req.session.uId != null) {
        next();
    } else {
        res.redirect('/login');
    }
});

router.get('/', (req, res) => {
    shopModel.getAll(function(results) {
        if (results.length > 0) {
            var shops = {
                name: req.session.uId,
                shopList: results
            };
            res.render('customer/index', shops);
        } else {
            var shops = {
                name: req.session.uId,
                shopList: ""
            };
            res.render('customer/index', shops);
        }
    });
});

router.get('/profile', (req, res) => {
    customerModel.get(req.session.uId, function(result) {
        if (result.length > 0) {
            res.render('customer/profile', result[0]);
        }
    });
});


//*todo customer review product

router.get('/shop/:shopId', (req, res) => {
    var shopDetails;
    shopModel.get(req.params.shopId, function(result) {
        if (result.length > 0) {
            shopDetails = result[0];
            productModel.getAllByShopId(req.params.shopId, function(results) {
                if (results.length > 0) {
                    var computer = {
                        shop: shopDetails,
                        computerList: results
                    };
                    res.render('customer/shopComputer', computer);
                } else {
                    var computer = {
                        shop: shopDetails,
                        computerList: ""
                    };
                    res.render('customer/shopComputer', computer);
                }
            });
        }
    });
});

router.get('/shop/:shopId/computer/review/:productId', (req, res) => {
    console.log("db product review");
    console.log(req.params.productId);
    productReviewModel.getByProductId(req.params.productId, function(results) {
        if (results.length > 0) {
            console.log("get product review");
            var comments = {
                productId: req.params.productId,
                commentList: results
            };
            res.render('customer/productReview', comments);
        } else {
            console.log("not get product review");
            var comments = {
                productId: req.params.productId,
                commentList: ""
            }
            res.render('customer/productReview', comments);
        }
    });
});

//*todo AJAX XXXXXXXX
router.get('/productReview/:productId/:commentText', (req, res) => {
    var comment = {
        customerId: req.session.uId,
        text: req.params.commentText,
        time: new Date(),
        productId: req.params.productId
    };
    console.log("ajaxxx");

    console.log(comment.productId);
    productReviewModel.insert(comment, function(success) {
        if (success) {
            console.log("ajax done");
            productReviewModel.getByProductId(req.params.productId, function(results) {
                if (results.length > 0) {
                    res.send(results);
                } else {
                    res.send(results);
                }
            });
        }
    });

});


//*todo product/computer details
router.get('/shop/:shopId/:productID', (req, res) => {

    productModel.get(req.params.productID, function(result) {
        if (result.length > 0) {
            var productDetails = {
                product: result[0]
            }
            console.log(result[0].F_IMAGE);
            res.render('customer/productDetails', productDetails);
        }
    });
});

module.exports = router;