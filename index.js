const express = require('express')
const app = express();
const port = 8080;
const jwt = require('jsonwebtoken');

app.get('/', (req, res) => {
    res.json({
        "message": "Welcome to Node js"
    })
    // res.send('<h1>Hello Welcome to Node js!!!!</h1>')
})

app.post('/tokenGenerate', (req, res) => {
    const user = {
        id: 998983,
        username: 'Jan20231',
        email: 'jan23@coding.com'
    }
    jwt.sign(user, 'secret', {expiresIn: '60s'}, function(err, token) {
        if(err){
            res.statusCode(403);
        } else {
            res.json({
                token
            })
        }
      });
})

app.post('/verifyToken', extractToken, (req, res) => {
    jwt.verify(req.token, 'secret', function(err, data) {
        if(err){
            res.sendStatus(403);
        } else {
            res.json({
                message: 'User access granted',
                info: data
            })
        }
      });
})

// middleware
function extractToken(req, res, next) {
    const bearerHeader = req.headers['authorization']; //"Bearer token"
    if(bearerHeader !== undefined){
        const bearer = bearerHeader.split(' '); // ['Bearer', token]
        const bearerToken = bearer[1];
        req.token = bearerToken;
        next()
    } else {
        res.sendStatus(403);
    }
}

app.listen(port, function(err){
    if(err){
        console.log(`Error in running the server : ${err}`);
        return;
    }
    console.log(`Server is up and running on port : ${port}`);
})


