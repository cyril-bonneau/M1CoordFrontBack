const express = require('express');
const config = require('../configs/server.config');
const bodyParser = require('body-parser');
const apiRouter = require('../routes');
const cors = require('cors')

//démarrer express
const app = express();

//JWT requires
const jwt = require('jsonwebtoken');

//Route to protect with token
app.post('/api/tests', verifyToken, (req, res) => {
    jwt.verify(req.token, 'secretkey', (err, authData) => {
        if(err){
            res.sendStatus(403);
        }else{
            res.json({
                message:'test tested....',
                authData
            });
        }
    });
});

//Way to get the token
app.post ('/api/login', (req, res) =>{
    //MOCK User
    const user ={
        id: 1,
        username: 'test',
        email : 't@gmail.com'
    }

    jwt.sign({user},'secretkey', {expiresIn: '12h' }, (err, token) => {
        res.json({
            token
        });
    });
})

//middelware Function *******

//FORMAT OF TOKEN 
//Authorization: Bearer <access_token>

//Verify Token!
function verifyToken(req, res, next){
    //Get auth header value
    const bearerHeader = req.headers['authorization'];
    //check if tok is undefined 
    if (typeof bearerHeader !== 'undefined'){
    //Split at the space
    const bearer = bearerHeader.split(' ');
    //Get Token from array
    const bearerToken = bearer[1];
    //set the token
    req.token = bearerToken;
    //next middleware
    next();
    }else{
        //Forbidden
        res.sendStatus (403);
    }
}


// middleware
app.use(bodyParser.json());
app.use(cors())

//routes
app.use('/api/v1', apiRouter);

exports.start = () => {
    let port = config.port;

    app.listen(port, (err) => {
        if (err) {
            console.log(`Error:${err}`);
            // console.log('Error:',port);
            // console.log('Error:'.err);
            process.exit(-1);
        }
        console.log(`app is running on port ${port}`);
    });

}