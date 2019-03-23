/* global firebase */

// Add your config from the firebase console
// it will look something like this:
const config = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: ""
};

throw new Error("Missing Firebase Information");

firebase.initializeApp(config);
