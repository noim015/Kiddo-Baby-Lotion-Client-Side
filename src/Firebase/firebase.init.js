import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const firebaseauthentication = () => {

    initializeApp(firebaseConfig);

}

export default  firebaseauthentication;