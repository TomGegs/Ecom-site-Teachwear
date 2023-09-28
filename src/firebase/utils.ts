import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';

import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

import { firebaseConfig } from './config';

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const firestore = getFirestore();
export const analytics = getAnalytics(app);

//Social Sign In Providers

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => {
    signInWithPopup(auth, googleProvider);
};
