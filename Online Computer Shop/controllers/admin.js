var express = require('express');
var adminModel = require.main.require('./model/adminModel');
var shopModel = require.main.require('./model/shopModel');
var productModel = require.main.require('./model/productModel');
var router = express.Router();

router.get('*', function(req, res, next) {
    if (req.session.uId != null) {
        next();
    } else {
        res.redirect('/login');
    }
});

router.get('/', (req, res) => {
    var user = {
        name: req.session.uId
    };
    res.render('admin/index', user);
});
router.get('/profile', (req, res) => {
    adminModel.get(req.session.uId, function(result) {
        if (result.length > 0) {
            res.render('admin/profile', result[0]);
        }
    });
});

//*todo edit profile
router.get('/editProfile', (req, res) => {
    adminModel.get(req.session.uId, function(result) {
        if (result.length > 0) {
            res.render('admin/editProfileDetails', result[0]);
        }
    });
});
router.post('/editProfile', (req, res) => {
    console.log("addddddmin");
    var admin = {
        id: req.session.uId,
        name: req.body.name,
        address: req.body.address,
        email: req.body.email
    }
    adminModel.update(admin, function(success) {
        if (success) {
            res.redirect('/admin/profile');
        } else {

            res.redirect('/admin/editProfile');

        }
    });
});

//*todo edit profile endddddddd


//*todo add shop
router.get('/addShop', (req, res) => {
    res.render('admin/addShop');
});
router.post('/addShop', (req, res) => {
    var shop = {
        name: req.body.name,
        description: req.body.description,
        type: req.body.type,
        location: req.body.location,
        status: "VALID",

    };

    shopModel.insert(shop, function(success) {
        if (success) {
            res.redirect('/admin');
        } else {
            res.render("/admin/addShop");
        }
    });
});

//*todo add shop endddddddd


//*todo edit shop
router.get('/shops', (req, res) => {
    shopModel.getAll(function(results) {
        if (results.length > 0) {
            var shops = {
                shopList: results
            };
            res.render('admin/shopList', shops);
        }
    });
});

router.post('/shop/edit/:shopId', (req, res) => {

    var shop = {
        id: req.body.id,
        name: req.body.name,
        description: req.body.description,
        type: req.body.type,
        location: req.body.location,
        status: "VALID",
    };
    shopModel.update(shop, function(success) {
        if (success) {
            res.redirect('/admin/shops');
        } else {
            res.render("/admin/shop/edit/" + req.params.shopId);
        }
    });
});

//*todo edit shop endd


//*todo add computer
router.get('/shop/addComputer1/:shopId', (req, res) => {
    shopModel.get(req.params.shopId, function(result) {
        if (result.length > 0) {
            res.render('admin/addComputer1', result[0]);
        }
    });
});

router.post('/shop/addComputer1/:shopId', (req, res) => {
    console.log("ad mcomputeru");
    var product = {
        title: req.body.title,
        description: req.body.description,
        image: "/pictures/" + res.req.file.filename,
        shopId: req.params.shopId
    };
    console.log(product.image);
    productModel.insert(product, function(success) {
        if (success) {
            res.redirect('/admin/shop/view/' + req.params.shopId);
        } else {
            res.redirect("/admin/shop/addComputer/" + req.params.shopId);
        }
    });
});

router.get('/shop/:shopId/computer/delete/:computerId', (req, res) => {
    productModel.get(req.params.computerId, function(result) {
        if (result.length > 0) {
            res.render('admin/deleteComputer', result[0]);
        }
    });
});

router.post('/shop/:shopId/computer/delete/:computerId', (req, res) => {
    productModel.delete(req.params.computerId, function(success) {
        if (success) {
            res.redirect('/admin/shop/view/' + req.params.shopId);
        } else {
            res.redirect('/admin/shop/' + req.params.shopId + '/computer/delete/' + req.params.computerId);
        }
    });
});

//*todo add computer endddd

//*todo edit shop
router.get('/shop/edit/:shopId', (req, res) => {
    shopModel.get(req.params.shopId, function(result) {
        if (result.length > 0) {
            res.render('admin/editShop', result[0]);
        } else {
            res.redirect('/admin/shops');
        }
    });
});

router.post('/shop/edit/:shopId', (req, res) => {
    var shop = {
        id: req.body.id,
        name: req.body.name,
        description: req.body.description,
        type: req.body.type,
        location: req.body.location,
        status: "VALID",
    };
    shopModel.update(shop, function(success) {
        if (success) {
            res.redirect('/admin/shops');
        } else {
            res.render("/admin/shop/edit/" + req.params.shopId);
        }
    });
});
//*todo edit shop endddd


//*todo delete shop
router.get('/shop/delete/:shopId', (req, res) => {
    shopModel.get(req.params.shopId, function(result) {
        if (result.length > 0) {
            res.render('admin/deleteShop', result[0]);
        } else {
            res.redirect('/admin/shops');
        }
    });
});

router.post('/shop/delete/:shopId', (req, res) => {
    shopModel.delete(req.params.shopId, function(success) {
        if (success) {
            res.redirect('/admin/shops');
        } else {
            res.redirect("/admin/shop/delete/" + req.params.shopId);
        }
    });
});

//*todo delete shop endddddd

router.get('/shop/view/:shopId', (req, res) => {
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
                    res.render('admin/shopComputer', computer);
                } else {
                    var computer = {
                        shop: shopDetails,
                        computerList: ""
                    };
                    res.render('admin/shopComputer', computer);
                }
            });
        }
    });
});







module.exports = router;