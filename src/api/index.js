import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import { getDatabase } from "firebase/database"
//Set up firebase
const firebaseConfig = {
  apiKey: "AIzaSyCTOankLa189x7qD_b8iIxETPefX_a-yeU",
  authDomain: "citation-34f48.firebaseapp.com",
  databaseURL: "https://citation-34f48-default-rtdb.firebaseio.com",
  projectId: "citation-34f48",
  storageBucket: "citation-34f48.appspot.com",
  messagingSenderId: "1082271308226",
  appId: "1:1082271308226:web:20420b71130671e1601e5b",
  measurementId: "G-H7VLSVWSN6",
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig)
export const analytics = getAnalytics(firebase)
export const db = getDatabase()
