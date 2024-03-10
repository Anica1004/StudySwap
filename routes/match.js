import express from 'express';
import { make_request } from './userService';

const router = express.Router();

router.get('/make_request', async (req, res) => {
    email = req.query.email;
    wantToLearn = req.query.wantToLearn;
    try {
        make_request(email, wantToLearn);
        res.status(201).send(); // Send a 201 Created response with no content
    } catch (error) {
        console.error('Error adding request to database:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.get('/make_user', async (req, res) => {
    email = req.query.email;
    wantToLearn = req.query.wantToLearn;
    try {
        make_request(email, wantToLearn);
        res.status(201).send(); // Send a 201 Created response with no content
    } catch (error) {
        console.error('Error adding request to database:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

export default router;