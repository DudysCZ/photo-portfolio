import { useEffect, useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

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

export type Photo = {
  filename : string;  // photo1
  thumbnail : string; //photo1_m
  extension : string; // .jpg
  path : string;  // album.pathFolder + filename + extension
  caption : string;
  dateCreated : firebase.firestore.Timestamp;
  album : Album;
  position : number;
  // -------------
  photo : string;
  number : number;
};

export type Album = {
  name : string;
  pathFolder: string;
};


// // We can simply cast this type to narrow our collection to Review type
// // Safer way would be to use .withConverter() method
export const photosCollection = db.collection(
  'photos',
) as firebase.firestore.CollectionReference<Photo>;

export const albumsCollection = db.collection(
  'albums',
) as firebase.firestore.CollectionReference<Album>;



//Kniha
export type Post = {
  content: string;
  author: string;
  date: firebase.firestore.Timestamp;
};

export const postsCollection = db.collection(
    'posts',
).orderBy('date', 'desc').limit(100) as firebase.firestore.CollectionReference<Post>;



// Helper to get current time in Timestamp
export const timestampNow = firebase.firestore.Timestamp.now;

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
