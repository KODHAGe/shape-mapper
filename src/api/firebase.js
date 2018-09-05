// Firebase API-handler

// Firebase libs
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import _ from 'lodash'

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

const db = firebase.firestore();
const firestoreSettings = { timestampsInSnapshots: true };
db.settings(firestoreSettings);

function anonymousSignOn() {
  firebase.auth().signInAnonymously().catch(function() {
    // Let user know they are not identifiable
  });

  return new Promise((resolve) => {
    firebase.auth().onAuthStateChanged(user => {
      resolve(user.uid)
    })
  })
}

let addResultRecords = _.debounce((resultArray, userId, callback) => {
  if(resultArray && userId) {
    let setArray = []
    resultArray.forEach((resultObject) => {
      resultObject['userId'] = userId
      let docId = userId + resultObject.title.toLowerCase().replace(/\s/g,'')
      let set = db.collection("results").doc(docId).set(resultObject)
      setArray.push(set)
    })
    Promise.all(setArray).then((resolve) =>  {
      callback(true)
    }).catch((error) => {
      callback('error ', error)
    })
  }
}, 500)

// Exports
export { firebase, db, addResultRecords, anonymousSignOn }