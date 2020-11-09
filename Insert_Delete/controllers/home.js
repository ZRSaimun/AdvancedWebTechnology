const express 	= require('express');
const router 	= express.Router();



//
let userlist = [ 
	[ 'ZrSaimun', '1243', 'zrsaimun@gmail.com'],
	[ 'abc', '1243', 'abc@gmail.com'],
	[ 'xy', '1243', 'xy@gmail.com']
];

router.get('/', (req, res)=>{
	if (req.session.userlist ==0) {
		req.session.userlist = userlist;
	}

	if(req.cookies['uname'] != null){
		res.render('home/index', {name: 'ZrSaimun', id:'123'});		
	}else{
		res.redirect('/login');
	}
});


router.get('/userlist', (req, res)=>{

	if(req.cookies['uname'] != ""){

	console.log(req.session.userlist);

		res.render('home/userlist', {users: req.session.userlist });		
	}else{
		res.redirect('/login');
	}
})

module.exports = router;

//url design eg. /logout -> get or post request
//adding middleware to app.js
//creating controller/router  eg. router.get(), router.post()
//creating VIEWS
//sending response -> json, ejs
