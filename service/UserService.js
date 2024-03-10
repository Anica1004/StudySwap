const { fetchAllUsers } = require('../model/user');
const { fetchAllRequests } = require('../model/requests');
const nodemailer = require('nodemailer');

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

// Create a transporter object using SMTP transport
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'hackathoncmd@gmail.com',
        pass: 'helloWorld'
    }
});

async function sendEmailNotif(matches) {
    for (const match of matches) {
        // Setup email data
        const mailOptions = {
            from: 'hackathoncmd@gmail.com',
            to: match.user.email,
            subject: 'Test Email',
            text: match.potentialMentees
        };

        // Send email
        transporter.sendMail(mailOptions, function(error, info) {
            if (error) {
                console.error('Error occurred:', error);
            } else {
                console.log('Email sent:', info.response);
            }
        });
     
    }
}


module.exports =  {
    findMatchingTutors, 
sendEmailNotif};