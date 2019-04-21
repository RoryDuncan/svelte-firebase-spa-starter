import { Store } from "svelte/store";
import App from "App.html";
import Loading from "components/Loading.html";
import firebase from "helpers/firebase";


const appLoader = new Loading({
  target: document.querySelector("main#app"),
  data: {
    color: "#2ad",
    text: "Starting your app",
  }
});

// this is where we perform our initial render (Loading.html), 
// then setup the store, and then hook it into firebase
const store = new Store({
  siteTitle: "Your App"
});


const db = firebase.database();
const ref = db.ref("/");

let firstRender = true;
let app = null;

ref.on('value', (snapshot) => {
  const data = snapshot.val();
  
  // if firebase has data, update our store
  if (data) {
    let { siteTitle, areas } = data;
    store.set({siteTitle, areas});
  }
  
  if (firstRender) {
    firstRender = false;

    app = new App({
      target: document.querySelector("main#app"),
      store,
    });
    
    appLoader.destroy();
  }
});



