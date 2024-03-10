const { firestoreDb } = require('../firebase.js');
const { randomUUID } = require('crypto');
const { uploadProcessedData } = require('../firebase');
const { v4: uuidv4 } = require('uuid');
const admin = require('../firebase');


class User {
    constructor(email, username, name, password, canTeach, wantToLearn, volunteer, inPerson, online) {
        this.username = username; // registration / login
        this.name = name;
        this.email = email; // registration / login
        this.password = password;
        this.canTeach = canTeach; // array of courses
        this.wantToLearn = wantToLearn; // array of courses
        this.volunteer = volunteer; // boolean
        this.inPerson = inPerson; // boolean
        this.online = online; // boolean
    }

    static async fromSnapshot(snapshot) {
        const data = snapshot.data();
        return new User(
            snapshot.id,
            data.username,
            data.password,
            data.canTeach,
            data.wantToLearn,
            data.volunteer,
            data.inPerson,
            data.online
        );
    }

    toObject() {
        return {
            email: this.email,
            password: this.password,
            canTeach: this.canTeach,
            wantToLearn: this.wantToLearn,
            volunteer: this.volunteer,
            inPerson: this.inPerson,
            online: this.online
        };
    }
}

async function make_user(email, password) {
    let myuuid = uuidv4();

    const userData = {
        username: myuuid,
        email: email,
        password: password,
      };
      console.log(myuuid);
      try {
        const docRef = firestoreDb.collection('users').doc(myuuid);
        let dataUpdated = await docRef.set(userData);
        console.log(dataUpdated);
        return myuuid;

        } catch (error) {
        console.log(error);
    }
}

async function login_user(email, password) {
    const users = await fetchAllUsers(); // Await to get the users
    
    let foundUser = null;

    for (const user of users) {
        const found = await User.find({ email: user.email });
        if (found && found.password === password) {
            foundUser = found;
            break; // Stop searching once a user is found
        }
    }

    if (!foundUser) {
        return "No user found with the provided email and password.";
    } else {
        return foundUser.username;
    }
}


async function user_profile( username, canTeach, volunteer) {
    const userData = {
        canTeach: canTeach,
        volunteer: volunteer,

      };

      try {
        const docRef = firestoreDb.collection('users').doc(username);
        let dataUpdated = await docRef.set(userData);
        console.log(dataUpdated);

        } catch (error) {
        console.log(error);
    }
}

async function user_request( username, canTeach, inPerson, online) {
    const userData = {
        canTeach: canTeach,
        inPerson: inPerson,
        online: online

      };

      try {
        const docRef = firestoreDb.collection('users').doc(username);
        let dataUpdated = await docRef.set(userData);
        console.log(dataUpdated);

        } catch (error) {
        console.log(error);
    }
}


async function fetchAllUsers() {
    try {
        const usersCollection = firestoreDb.collection('users');
        const snapshot = await usersCollection.get();
        const allUsers = [];

        snapshot.forEach(doc => {
            const user = User.fromSnapshot(doc);
            allUsers.push(user);
        });

        return allUsers;
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
}

module.exports = { User, fetchAllUsers, make_user, user_request, user_profile, login_user };
