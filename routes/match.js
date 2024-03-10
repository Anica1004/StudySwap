const express = require('express');


const { make_request } = require('../model/Requests');
const { findMatchingTutors, sendEmailNotif } = require('../service/users');
const { make_user, user_profile, user_request, login_user } = require('../model/User');

const router = express(); 
router.use(express.json()); 



router.get("/", (req, res) => {
    res.send("hello this is auth endpoint");
})



router.get('/make_request', async (req, res) => {
    username = req.query.username;
    wantToLearn = req.query.wantToLearn;
    try {
        make_request(username, wantToLearn);
        const arry = findMatchingTutors();
        console.log(arry);
        sendEmailNotif(arry);
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



router.get('/user_profile', async (req, res) => {
    const username = req.query.username;
    const canTeach = req.query.canTeach;
    const wantToLearn = req.query.wantToLearn;

    try {
        user_profile(username, canTeach, wantToLearn);
        res.status(201).send(); // Send a 201 Created response with no content
    } catch (error) {
        console.error('Error updating user to database:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});


router.get('/user_request', async (req, res) => {
    const username = req.query.username;
    const wantToLearn = req.query.wantToLearn;
    const inPerson = req.query.inPerson;
    const online = req.query.online;

    try {
        user_request(username, canTeach, wantToLearn, volunteer, inPerson, online);
        console.log(username);
        res.status(201).send(); // Send a 201 Created response with no content
    } catch (error) {
        console.error('Error updating user to database:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});


module.exports = router;