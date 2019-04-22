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

// remove this line once you've filled out the info above!
throw new Error("firebase-svelte-starter setup: Missing Firebase Information");

firebase.initializeApp(config);


