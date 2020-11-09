const express 	= require('express');
const router 	= express.Router();

router.get('/create', (req, res)=>{
	
	if(req.cookies['uname'] != ""){
		res.render('user/create');
	}else{
		res.redirect('/login');
	}
});

router.post('/create', (req, res)=>{
	
	if(req.cookies['uname'] != ""){
		
		var user = [req.body.username, req.body.password, req.body.email];
		 req.session.userlist.push(user);
		// newlist.push(user);
		console.log(user,req.session.userlist);
		// req.session.userlist = newlist;
		
		res.send('New user info:'+
					"<br> Username: "+req.body.username+
					"<br> Password: "+req.body.password+
					"<br> Email: "+req.body.email
				);
	}else{
		res.redirect('/login');
	}
});

router.get('/edit/:id', (req, res)=>{

	//res.send(req.params.id + "<br>"+ req.params.name);
	
	if(req.cookies['uname'] != ""){
		
		var user = {
			username: 'test',
			password: 'test',
			email: 'ZrSaimun@aiub.edu'
		};

		res.render('user/edit', user);
	}else{
		res.redirect('/login');
	}
});

router.post('/edit/:id', (req, res)=>{
	
	if(req.cookies['uname'] != ""){
		//res.send('updated');
		res.redirect('/home/userlist');
	}else{
		res.redirect('/login');
	}
});

router.get('/delete/:id', (req, res)=>{
	
	if(req.cookies['uname'] != ""){
		var user = {username: 'ZrSaimun', password: '123', email: 'email@gmail.com'};
		res.render('user/delete', user);
	}else{
		res.redirect('/login');
	}
});

router.post('/delete/:id', (req, res)=>{
	
	if(req.cookies['uname'] != ""){
		//res.send('done!');
		res.redirect('/home/userlist');
	}else{
		res.redirect('/login');
	}
});

module.exports = router;

