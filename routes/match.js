import express from 'express';
import { make_request } from './userService';
import { make_user } from './user';
import { user_profile } from './user';
import { user_request } from './user';


const router = express.Router();

router.post('/make_request', async (req, res) => {
    username = req.body.username;
    wantToLearn = req.body.wantToLearn;
    try {
        make_request(username, wantToLearn);
        res.status(201).send(); // Send a 201 Created response with no content
    } catch (error) {
        console.error('Error adding request to database:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});


router.post('/make_user', async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    try {
        const user = await make_user(email, password);

        res.status(201).json({ username: user.username }); // Send the newly created user's username in the response
    } catch (error) {
        console.error('Error adding user to database:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});


router.post('/login_user', async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

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


export default router;