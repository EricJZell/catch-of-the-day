import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAWiifyXqDNdsLVuc6MGdVHnd1zatWr2SA",
  authDomain: "catch-of-the-day-eric-zell.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-eric-zell.firebaseio.com"
})

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// This is a default export
export default base;
