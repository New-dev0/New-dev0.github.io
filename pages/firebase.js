import { getAnalytics, isSupported } from "firebase/analytics";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDTv518AQlwNWO2RMgcLMQilFelf4xp3q8",
  authDomain: "sitedev-75486.firebaseapp.com",
  projectId: "sitedev-75486",
  storageBucket: "sitedev-75486.appspot.com",
  messagingSenderId: "330395980635",
  appId: "1:330395980635:web:c0693ddd438c0f581d407e",
  measurementId: "G-R8EX2K8DB0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const analytics = () => {
    if (typeof window !== "undefined") {
      return getAnalytics(app);
    } 
    return null
    
  }