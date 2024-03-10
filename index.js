const matchRoute = require ("./routes/match.js"); 
const authRoute = require('./routes/auth.js');
const usersRoute = require('./routes/users.js');
const { db } = require('./firebase.js');
const express = require('express'); //Import the express dependency
const cors = require("cors");
const app = express();              //Instantiate an express app, the main work horse of this server
const port = 3001;                  //Save the port number where your server will be listening
require('dotenv').config();



app.use(cors);
app.use(express.json());
app.use('/match',matchRoute);
app.use('/auth', authRoute);
app.use('/users', usersRoute);



// const corsOptions ={
//     origin: "http://127.0.0.1:5500/",
//     optionsSuccessStatus: 200
// }


app.listen(port, () => {            //server starts listening for any attempts from a client to connect at port: {port}
    console.log(`Now listening on port ${port}`); 
});



