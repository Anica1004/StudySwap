const admin = require('firebase-admin');

class Request {
    constructor(email, wantToLearn) {
        this.email = email;
        this.wantToLearn = wantToLearn;
    }

    static async fromSnapshot(snapshot) {
        const data = snapshot.data();
        return new Request(
            data.email,
            data.wantToLearn,

        );
    }

    toObject() {
        return {
            email: this.email,
            wantToLearn: this.wantToLearn,
        };
    }
}

async function fetchAllRequests() {

    
    try {
        const requestsCollection = admin.firestore().collection('requests');
        const snapshot = await requestsCollection.get();
        const allRequests = [];

        if (snapshot.empty) {
            console.log('No requests found.');
            return null; 
        }

        snapshot.forEach(doc => {
            const request = Request.fromSnapshot(doc);
            allRequests.push(request);
        });

        return allRequests;
    } catch (error) {
        console.error('Error fetching requests:', error);
        throw error;
    }
}

async function make_request(email, wantToLearn) {
    new Request(email, wantToLearn);
}

module.exports = { Request, fetchAllRequests, make_request };
