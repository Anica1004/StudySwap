

const createUser = async (req, res, next) => {
    const newHotel = new User(req.body);
    try {
      const savedUser = await newHotel.save();
      res.status(200).json(savedUser);
    } catch (err) {
      next(err);
    }
  };

module.exports =  {
    createUser};

// const { fetchAllUsers } = require('../model/User');
// const { fetchAllRequests } = require('../model/Requests');
// const nodemailer = require('nodemailer');

// async function findMatchingTutors() {
//     try {
//         const users = await fetchAllUsers();
//         const requests = await fetchAllRequests();
//         const matches = [];

//         for (const user of users) {
//             let potentialMentees =[];

//             if (user.volunteer) {
                
//                 potentialMentees = requests.filter(request => request.wantToLearn.some(subject => user.canTeach.includes(subject)));
//             } else {
//                 const matchingMentees = requests.filter(request => request.wantToLearn.some(subject => user.canTeach.includes(subject)));
    
//                 potentialMentees = matchingMentees.filter(mentee => {
//                     return mentee.canTeach.some(subject => user.wantToLearn.includes(subject));
//                 });
//             }
            
//             matches.push({ mentor: user, mentees: potentialMentees });
//         }

//         return matches;
//     } catch (error) {
//         console.error("Error finding matching tutors:", error);
//         throw error; 
//     }
// }

// // Create a transporter object using SMTP transport
// const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         user: 'hackathoncmd@gmail.com',
//         pass: 'helloWorld'
//     }
// });

// async function sendEmailNotif(matches) {
//     const { mentor, mentees } = match;
    
//     for (const match of matches) {
//         const { mentor, mentees } = match;

//         // Prepare email text
//         let emailText = 'Potential mentees:\n';
//         mentees.forEach(mentee => {
//             emailText += `${mentee.email}\n`;
//         });

//         // Setup email data
//         const mailOptions = {
//             from: 'hackathoncmd@gmail.com',
//             to: mentor.email, // Corrected accessing mentor's email
//             subject: 'Test Email',
//             text: emailText // Corrected accessing mentees' emails
//         };

//         // Send email (awaiting the operation)
//         try {
//             const info = await transporter.sendMail(mailOptions);
//             console.log('Email sent:', info.response);
//         } catch (error) {
//             console.error('Error occurred:', error);
//         }
//     }
// }


// module.exports =  {
//     findMatchingTutors, 
// sendEmailNotif};