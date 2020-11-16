var express = require('express');

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
            var Shops = {
                name: req.session.uId,
                ShopList: results
            };
            res.render('customer/index', Shops);
        } else {
            var Shops = {
                name: req.session.uId,
                ShopList: ""
            };
            res.render('customer/index', Shops);
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

router.get('/editProfile', (req, res) => {
    customerModel.get(req.session.uId, function(result) {
        if (result.length > 0) {
            res.render('customer/editProfile', result[0]);
        }
    });
});

router.post('/editProfile', (req, res) => {
    var customer = {
        id: req.session.uId,
        name: req.body.name,
        address: req.body.address,
        email: req.body.email
    }
    customerModel.update(customer, function(success) {
        if (success) {
            res.redirect('/customer/profile');
        } else {
            res.redirect('/customer/editProfile');
        }
    });
});

router.get('/Shop/:ShopId', (req, res) => {
    var ShopDetails;
    ShopModel.get(req.params.ShopId, function(result) {
        if (result.length > 0) {
            ShopDetails = result[0];
            productModel.getAllByShopId(req.params.ShopId, function(results) {
                if (results.length > 0) {
                    var menu = {
                        Shop: ShopDetails,
                        menuList: results
                    };
                    res.render('customer/ShopMenu', menu);
                } else {
                    var menu = {
                        Shop: ShopDetails,
                        menuList: ""
                    };
                    res.render('customer/ShopMenu', menu);
                }
            });
        }
    });
});

router.get('/Shop/:ShopId/menu/review/:productId', (req, res) => {
    productReviewModel.getByproductId(req.params.productId, function(results) {
        if (results.length > 0) {
            var comments = {
                productId: req.params.productId,
                commentList: results
            };
            res.render('customer/productReview', comments);
        } else {
            var comments = {
                productId: req.params.productId,
                commentList: ""
            }
            res.render('customer/productReview', comments);
        }
    });
});

//AJAX
router.get('/productReview/:productId/:commentText', (req, res) => {
    var comment = {
        customerId: req.session.uId,
        text: req.params.commentText,
        time: new Date(),
        productId: req.params.examId
    };
    productReviewModel.insert(comment, function(success) {
        if (success) {
            productReviewModel.getByproductId(req.params.productId, function(results) {
                if (results.length > 0) {
                    res.send(results);
                } else {
                    res.send(results);
                }
            });
        }
    });

});

module.exports = router;