const router = require ("./routes/match.js"); 
const express = require('express'); //Import the express dependency
const app = express();              //Instantiate an express app, the main work horse of this server
const port = 3001;                  //Save the port number where your server will be listening
require('dotenv').config();
const { uploadProcessedData } = require('./firebase');
app.use(router); 
app.get('/test-upload', (req, res) => {
    uploadProcessedData();
    res.sendStatus(200);
    console.log('upload data');
})


app.listen(port, () => {            //server starts listening for any attempts from a client to connect at port: {port}
    console.log(`Now listening on port ${port}`); 
});



