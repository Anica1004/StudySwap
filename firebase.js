// Import the functions you need from the SDKs you need
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, doc, setDoc } = require('firebase-admin/firestore');
const serviceAccount = require("./creds.json");
const admin = require("firebase-admin");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
const {
    API_KEY,
    AUTH_DOMAIN,
    PROJECT_ID,
    STORAGE_BUCKET,
    MESSAGING_SENDER_ID,
    APP_ID,
    MEASUREMENT_ID
} = process.env;


// Initialize Firebase
let app;
let firestoreDb;

const initializeFirebaseApp = () => {
    console.log('call initializeFirebaseApp');
    try {
        //app = initializeApp(firebaseConfig);
        firestoreDb = getFirestore();
        return app;
    } catch (error) {
        console.log(error);
    }
};

initializeFirebaseApp();

const uploadProcessedData = async () => {
    const dataToUpload = {
        canTeach: 'CPSC110',
        inPerson: true,
        online: true,
        password: 'newPassword',
        volunteer: false,
        wantToLearn: 'that'
    };
    try {
        const docRef = firestoreDb.collection('users').doc('Ruby');
        let dataUpdated = await docRef.set(dataToUpload);
        console.log(dataUpdated);
        return dataUpdated;
    } catch (error) {
        console.log(error);
    }
}

const getFirebaseApp = () => app;

module.exports = {
    initializeFirebaseApp,
    getFirebaseApp,
    uploadProcessedData,
    firestoreDb
};