// Import the functions you need from the SDKs you need
import { initializeApp, FirebaseApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getFirestore, Firestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: '',
  authDomain: '',
  databaseURL: '',
  projectId: '',
  storageBucket: '',
  messagingSenderId: '',
  appId: '',
  measurementId: ''
}

// Initialize Firebase
/**
 * Firebase App instance
 */
export const app: FirebaseApp = initializeApp(firebaseConfig)
// const analytics = getAnalytics(app)
/**
 * Firestore instance
 */
export const db: Firestore = getFirestore(app)
