import { readable } from 'svelte/store';
import firebase from "helpers/firebase";

const db = firebase.database();
const ref = db.ref("/");

export default readable({ isConnected: false,  }, set => {
  
  const getValue = ref.on("value", snapshot => {
    const isConnected = true;
    const data = snapshot.val();
    console.log("data:", data)
    
    if (data) set({ isConnected, ...data });
    
  }, err => console.warn(err));
  
  const stop = () => ref.off("value", getValue);
  
  return stop;
});