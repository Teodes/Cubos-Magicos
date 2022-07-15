import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAFelV4BG-4QcdwVrHGQs25j60YHw0rI_k",
  authDomain: "cubos-magicos.firebaseapp.com",
  projectId: "cubos-magicos",
  storageBucket: "cubos-magicos.appspot.com",
  messagingSenderId: "260319793506",
  appId: "1:260319793506:web:37a08571f773a0a7b45c3b",
};

const app = initializeApp(firebaseConfig);

export const getFirestoreApp = () => {
  return app;
};
