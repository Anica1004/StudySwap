const express = require('express');
const { make_request } = require('../model/requests');
const { findMatchingTutors } = require('../service/userService');
const { make_user, user_profile, user_request } = require('../model/user');
const router = express(); 
//const cors = require("cors");
router.use(express.json()); 

//router.use(cors);

// const corsOptions ={
//     origin: "http://127.0.0.1:5500/",
//     optionsSuccessStatus: 200
// }

// router.options("/*", async (req, res)=> {
//     console.log("AHHHHHHHHHHHH");
//     res.header = {
//         "Access-Control-Allow-Origin": "*"
//     }
// });

router.get('/make_request', async (req, res) => {
    username = req.query.username;
    wantToLearn = req.query.wantToLearn;
    try {
        make_request(username, wantToLearn);
        const arry = findMatchingTutors();
        console.log(arry);
        res.status(201).send(); // Send a 201 Created response with no content
    } catch (error) {
        console.error('Error adding request to database:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});


router.get('/make_user',async (req, res) => {
  
    const email = req.query.email;
    const password = req.query.password;
    try {
        const username = await make_user(email, password);

        res.status(201).json({ username: username }); // Send the newly created user's username in the response
    } catch (error) {
        console.error('Error adding user to database:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});


router.get('/login_user', async (req, res) => {
    const email = req.query.email;
    const password = req.query.password;

    try {
        const user = await login_user(email, password);

        res.status(201).json({ username: user.username }); // Send the newly created user's username in the response
    } catch (error) {
        console.error('Error updating user to database:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});



router.post('/user_profile', async (req, res) => {
    const username = req.body.username;
    const name = req.body.name;
    const canTeach = req.body.canTeach;
    const wantToLearn = req.body.wantToLearn;
    const volunteer = req.body.volunteer;


    try {
        update_user(username, canTeach, wantToLearn, volunteer);
        res.status(201).send(); // Send a 201 Created response with no content
    } catch (error) {
        console.error('Error updating user to database:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});


router.post('/user_request', async (req, res) => {
    const username = req.body.username;
    const wantToLearn = req.body.wantToLearn;
    const inPerson = req.body.inPerson;
    const online = req.body.online;

    try {
        update_user(username, canTeach, wantToLearn, volunteer, inPerson, online);
        res.status(201).send(); // Send a 201 Created response with no content
    } catch (error) {
        console.error('Error updating user to database:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});


module.exports = router;