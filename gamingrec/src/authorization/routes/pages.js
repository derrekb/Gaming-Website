const express = require('express');
const User = require('../core/user');
const router = express.Router();

const user = new User();

//get index page
router.get('/', (req, res, next) => {
    res.render('index', {title: "Login/Registration Page"});
})

//Get home page
router.get('/home', (req, res, next) => {
    res.send ('This is the home page');
});


//Post login data
router.post('/login', (req, res, next) => {
    user.login(req.body.username, req.body.password, function(result) {
        if (result) {
                res.send('Logged in as : '+ result.username);
        }else {
            res.send('Username/Password Incorrect!');
        }
    })
    //res.json(req.body);
});

//Post register data
router.post('/register', (req, res, next) => {
    let userInput = {
        username: req.body.username,
        fullname: req.body.fullname,
        password: req.body.password
    };

    //res.json(req.body);
    user.create(userInput, function(lastId){
            if(lastId) {
                res.send('Welcome ' + userInput.username + ' to GMRZ');
            } else{
                console.log('Error, you aint a gamer. Nothing personal kid...');
            }
    });
});



module.exports = router;

