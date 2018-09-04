// Firebase API-handler

// Firebase libs
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Config
const config = {
  apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
  authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.VUE_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VUE_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_FIREBASE_MSG_SENDER_ID
};

firebase.initializeApp(config)

const db = firebase.firestore()

function anonymousSignOn() {
  firebase.auth().signInAnonymously().catch(function() {
    // Let user know they are not identifiable
  });

  return new Promise((resolve, reject) => {
    firebase.auth().onAuthStateChanged(user => {
      resolve(user.uid)
    })
  })
}

function addResultRecords(resultArray, userId) {
  if(resultArray && userId) {
    resultArray.forEach((resultObject) => {
      console.log(resultObject)
      resultObject['userId'] = userId
      let docId = userId + resultObject.title.toLowerCase().replace(/\s/g,'')
      db.collection("results").doc(docId).set(resultObject)
      .then(function() {
          // Return successful save notification
      })
      .catch(function(error) {
          // Notify of unsuccessful save op
      });
    })
  }
}

// Exports
export { firebase, db, addResultRecords, anonymousSignOn }