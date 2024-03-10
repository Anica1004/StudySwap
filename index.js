const express = require('express'); //Import the express dependency
const mongoose = require('mongoose');
const app = express();              //Instantiate an express app, the main work horse of this server
const port = 3000;                  //Save the port number where your server will be listening

// mongoose.connect('mongodb://localhost/peertutor');

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyCndeft3ObHmXX7FDhJha0R3i240Dsxi4A",
//   authDomain: "peertutor-c0292.firebaseapp.com",
//   projectId: "peertutor-c0292",
//   storageBucket: "peertutor-c0292.appspot.com",
//   messagingSenderId: "440486577624",
//   appId: "1:440486577624:web:24ebc1dbf333e244911ead",
//   measurementId: "G-QSMCJVPTLR"
// };

// Initialize Firebase
const apple = initializeApp(firebaseConfig);
const analytics = getAnalytics(apple);

//Idiomatic expression in express to route and respond to a client request
app.get('/', (req, res) => {        //get requests to the root ("/") will route here
    res.sendFile('index.html', {root: __dirname});      //server responds by sending the index.html file to the client's browser
                                                        //the .sendFile method needs the absolute path to the file, see: https://expressjs.com/en/4x/api.html#res.sendFile 
});

app.listen(port, () => {            //server starts listening for any attempts from a client to connect at port: {port}
    console.log(`Now listening on port ${port}`); 
});

