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
        username: 'Jan2023',
        email: 'jan23@coding.com'
    }
    jwt.sign(user, 'secret', function(err, token) {
        if(err){
            res.statusCode(403);
        } else {
            res.json({
                token
            })
        }
      });
})

app.listen(port, function(err){
    if(err){
        console.log(`Error in running the server : ${err}`);
        return;
    }
    console.log(`Server is up and running on port : ${port}`);
})


