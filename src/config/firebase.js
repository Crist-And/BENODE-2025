import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import dotenv from "dotenv";

dotenv.config();

const firebaseConfig = {
  apiKey: process.env.FIRE_API_KEY,
  authDomain: process.env.FIRE_AUTH_DOMAIN,
  projectId: process.env.FIRE_PROJECT_ID,
  storageBucket: process.env.FIRE_STORAGE,
  messagingSenderId: process.env.FIRE_MSG,
  appId: process.env.FIRE_APP_ID
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
