
import App from "App.html";
import Loading from "components/Loading.html";
import firebase from "stores/firebase";


const appLoader = new Loading({
  target: document.querySelector("main#app"),
  props: {
    color: "#2ad",
    text: "Starting your app",
  },
});

// we only show the loading until the first render.

export let app = null;
let firstRender = true;

const unsubscribe = firebase.subscribe( value => {
  
  // we wait until connected to firebase to stop showing the loading screen
  if (value.isConnected && firstRender) {
    firstRender = false;
    
    app = new App({
      target: document.querySelector("main#app"),
      // we could pass props from 'value' here, if needed
    });
    
    appLoader.$destroy();
  }
  
  // app.$set( ... )
  // we could update app with props from our app, if needed.
})
