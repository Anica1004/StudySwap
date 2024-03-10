// Import the functions you need from the SDKs you need
const { initializeApp } = require('firebase-admin/app');
//const { getAnalytics } = require('firebase/analytics');
const { getFirestore, doc, setDoc } = require('firebase-admin/firestore');

const {
    API_KEY,
    AUTH_DOMAIN,
    PROJECT_ID,
    STORAGE_BUCKET,
    MESSAGING_SENDER_ID,
    APP_ID,
    MEASUREMENT_ID
} = process.env;
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const admin = require("firebase-admin");

var serviceAccount = require("./peertutor-c0292-firebase-adminsdk-3954u-fcfb7841aa.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: MESSAGING_SENDER_ID,
  appId: APP_ID,
  measurementId: MEASUREMENT_ID
};

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
        // const document = doc(firestoreDb, 'users', 'i1IbOegKoXcT6vWgCA66');
        const docRef = firestoreDb.collection('users').doc('Ruby');
        let dataUpdated = await docRef.set(dataToUpload);
        // let dataUpdated = setDoc(document, dataToUpload);
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