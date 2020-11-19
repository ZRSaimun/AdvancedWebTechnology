var express = require('express');
var customerModel = require.main.require('./model/customerModel');

var router = express.Router();

router.get('*', function(req, res, next) {
    if (req.session.uId != null) {
        next();
    } else {
        res.redirect('/login');
    }
});

router.get('/profile', (req, res) => {
    customerModel.get(req.session.uId, function(result) {
        if (result.length > 0) {
            res.render('customer/profile', result[0]);
        }
    });
});



module.exports = router;