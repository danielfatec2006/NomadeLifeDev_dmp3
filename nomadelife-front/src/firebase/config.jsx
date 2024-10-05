import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCL3Io1tUHt3YtVXLTf4gMbJtmOtqWplS8",
  authDomain: "nomadelifedevdaniel.firebaseapp.com",
  projectId: "nomadelifedevdaniel",
  storageBucket: "nomadelifedevdaniel.appspot.com",
  messagingSenderId: "986305138154",
  appId: "1:986305138154:web:6b2ecaa09b9e53dcba7693",
  measurementId: "G-V84F6NLCMN"
};

const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
const db = getFirestore(app)

export {db}