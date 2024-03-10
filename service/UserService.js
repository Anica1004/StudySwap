const { fetchAllUsers } = require('../model/user');
const { fetchAllRequests } = require('../model/requests');

async function findMatchingTutors() {
    try {
        const users = await fetchAllUsers();
        const requests = await fetchAllRequests();
        const matches = [];

        for (const user of users) {
            let potentialMentees =[];

            if (user.volunteer) {
                
                potentialMentees = requests.filter(request => request.wantToLearn.some(subject => user.canTeach.includes(subject)));
            } else {
                const matchingMentees = requests.filter(request => request.wantToLearn.some(subject => user.canTeach.includes(subject)));
    
                potentialMentees = matchingMentees.filter(mentee => {
                    return mentee.canTeach.some(subject => user.wantToLearn.includes(subject));
                });
            }
            
            matches.push({ mentor: user, mentees: potentialMentees });
        }

        return matches;
    } catch (error) {
        console.error("Error finding matching tutors:", error);
        throw error; 
    }
}


module.exports = findMatchingTutors;