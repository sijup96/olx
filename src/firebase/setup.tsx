import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

//  web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyChmWSwpzBCFtY_cegHB3zB5vlI54Q--bs",
    authDomain: "olx-clone-c8ae0.firebaseapp.com",
    projectId: "olx-clone-c8ae0",
    storageBucket: "olx-clone-c8ae0.appspot.com",
    messagingSenderId: "827003711838",
    appId: "1:827003711838:web:1a093aae731546b6b5dfcf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()