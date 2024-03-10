import express from 'express';
import { findMatchingTutors } from './userService';

const router = express.Router();

router.get('/find-matching-tutors', async (req, res) => {
    const desiredCourse = req.query.course;

    try {
        const matchingTutors = await findMatchingTutors(desiredCourse);
        res.json(matchingTutors);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

export default router;