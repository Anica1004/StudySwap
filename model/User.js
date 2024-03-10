const admin = require('firebase-admin');

class User {
    constructor(email, username, password, canTeach, wantToLearn, volunteer, inPerson, online) {
        this.email = email;
        this.username = username;
        this.password = password;
        this.canTeach = canTeach;
        this.wantToLearn = wantToLearn;
        this.volunteer = volunteer;
        this.inPerson = inPerson;
        this.online = online;
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

async function newUser(email, password, canTeach, wantToLearn, volunteer, inPerson, online) {
    // write to database :DDD
    const usersCollection = admin.firestore().collection('users');

    const userData = {
        email: email,
        password: password,
        canTeach: canTeach,
        wantToLearn: wantToLearn,
        volunteer: volunteer,
        inPerson: inPerson,
        online: online
      };

      

}

async function fetchAllUsers() {
    try {
        const usersCollection = admin.firestore().collection('users');
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

module.exports = { User, fetchAllUsers };
