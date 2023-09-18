// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDVCe7uu0tbIY7MWQIEUguv7X-j402Tsck',
  authDomain: 'ivtrip.firebaseapp.com',
  projectId: 'ivtrip',
  storageBucket: 'ivtrip.appspot.com',
  messagingSenderId: '892590844366',
  appId: '1:892590844366:web:bcf487c531005b1c50e39f',
}

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig)

export default firebaseApp
