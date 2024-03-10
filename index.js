const router = require ("./routes/match.js"); 
const express = require('express'); //Import the express dependency
const app = express();              //Instantiate an express app, the main work horse of this server
const port = 3001;                  //Save the port number where your server will be listening
require('dotenv').config();
const { uploadProcessedData } = require('./firebase');
const cors = require("cors");

// const corsOptions ={
//     origin: "http://127.0.0.1:5500/",
//     optionsSuccessStatus: 200
// }

app.use(router); 
app.use(cors);
// app.post(('/make_user',cors(corsOptions), async (req, res) => {
//     console.log(req.body); 
// }));

// app.get('/test-upload', (req, res) => {
//     uploadProcessedData();
//     res.sendStatus(200);
//     console.log('upload data');
// })


app.listen(port, () => {            //server starts listening for any attempts from a client to connect at port: {port}
    console.log(`Now listening on port ${port}`); 
});



