const express = require('express')
const app = express();
const port = 8080;

app.get('/', (req, res) => {
    res.json({
        "message": "Welcome to Node js"
    })
    // res.send('<h1>Hello Welcome to Node js!!!!</h1>')
})

app.listen(port, function(err){
    if(err){
        console.log(`Error in running the server : ${err}`);
        return;
    }
    console.log(`Server is up and running on port : ${port}`);
})


