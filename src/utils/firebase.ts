import { useEffect, useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// import { Winner } from '../components/Board';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAIAtvGeHVt0j860ApRQeV5d7uVQnOfGIY",
  authDomain: "portfolio-f7ad9.firebaseapp.com",
  projectId: "portfolio-f7ad9",
  storageBucket: "portfolio-f7ad9.appspot.com",
  messagingSenderId: "601960945028",
  appId: "1:601960945028:web:ab0f2b37e2d7a820a7b9d1"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Firestore database
const db = firebase.firestore();

// Simplified user type for referencing users
type User = Pick<firebase.User, 'uid' | 'email'>;

// // Holds information about a review
// export type Review = {
//   by: User;
//   stars: number;
//   description?: string;
// };

// // We can simply cast this type to narrow our collection to Review type
// // Safer way would be to use .withConverter() method
// export const reviewsCollection = db.collection(
//   'reviews',
// ) as firebase.firestore.CollectionReference<Review>;

// Helper to get current time in Timestamp
export const timestampNow = firebase.firestore.Timestamp.now;

// // Holds information about finished match
// export type Match = {
//   by: User;
//   winner: Winner;
//   date: firebase.firestore.Timestamp;
// };

// // TODO: Collection ref object for matches collection
// export const matchesCollection = db.collection(
//   'matches',
// ) as firebase.firestore.CollectionReference<Match>;

// Hook providing logged in user information
export const useLoggedInUser = () => {
  // Hold user info in state
  const [user, setUser] = useState<firebase.User | null>();

  // Setup onAuthStateChanged once when component is mounted
  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(u => setUser(u));

    // Call unsubscribe in the cleanup of the hook
    return () => unsubscribe();
  }, []);

  return user;
};

// Sign up handler
export const signUp = (email: string, password: string) =>
  firebase.auth().createUserWithEmailAndPassword(email, password);

// Sign in handler
export const signIn = (email: string, password: string) =>
  firebase.auth().signInWithEmailAndPassword(email, password);

// Sign out handler
export const signOut = () => firebase.auth().signOut();
