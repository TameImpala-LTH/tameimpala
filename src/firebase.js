// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signOut } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyAgnBE5dWcBzLAyqCg9sm1nKej-3LIHKHs",
//   authDomain: "heritage-byteme-hackathon.firebaseapp.com",
//   projectId: "heritage-byteme-hackathon",
//   storageBucket: "heritage-byteme-hackathon.firebasestorage.app",
//   messagingSenderId: "511488166181",
//   appId: "1:511488166181:web:bee7669697365d13cd72cc"
// };
const firebaseConfig = {
  apiKey: "AIzaSyCC-Uv30PtlBm50MxPMgqosyeRFUhH_BpE",
  authDomain: "tameimpala-7023e.firebaseapp.com",
  projectId: "tameimpala-7023e",
  storageBucket: "tameimpala-7023e.firebasestorage.app",
  messagingSenderId: "913194355309",
  appId: "1:913194355309:web:efb12f40e4cfd6adfd8d64",
  measurementId: "G-TXSFK3VXRW"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app); //cant get to see where its coming from but okay.
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const logout = () => signOut(auth);
