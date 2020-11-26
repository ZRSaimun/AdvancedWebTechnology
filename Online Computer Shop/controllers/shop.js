var express = require('express');
var adminModel = require.main.require('./model/adminModel');
var shopModel = require.main.require('./model/shopModel');
var productModel = require.main.require('./model/productModel');
var router = express.Router();

router.get('/:shopId', (req, res) => {
    var shopDetails;
    shopModel.get(req.params.shopId, function(result) {
        if (result.length > 0) {
            shopDetails = result[0];
            productModel.getAllByshopId(req.params.shopId, function(results) {
                if (results.length > 0) {
                    var computer = {
                        shop: shopDetails,
                        computerList: results
                    };
                    res.render('shop/computer', computer);
                } else {
                    var computer = {
                        shop: shopDetails,
                        computerList: ""
                    };
                    res.render('shop/computer', computer);
                }
            });
        }
    });
});



module.exports = router;