// userService.js
import User from './user';

async function findMatchingTutors(desiredCourse, searchMode) {
    try {

        const tutors = await User.find({ canTeach: desiredCourse });
        tutors = findExchangeTarget(tutors);
    
        return tutors;
    } catch (error) {
        console.error("Error finding matching tutors:", error);
        throw error;
    }
}

async function findExchangeTarget(tutors) {
    try {

        const tutors = await User.find({ canTeach: desiredCourse });
        return tutors;
    } catch (error) {
        console.error("Error finding matching tutors:", error);
        throw error;
    }
}

export { findMatchingTutors };