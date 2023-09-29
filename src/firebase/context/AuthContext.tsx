import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';
import {
    getAuth,
    signInWithPopup,
    signInWithRedirect,
    signOut,
    onAuthStateChanged,
    GoogleAuthProvider,
    User,
    createUserWithEmailAndPassword,
} from 'firebase/auth';
import { useContext, createContext, useEffect, useState } from 'react';
import { firebaseConfig } from '../config';

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const firestore = getFirestore();
export const analytics = getAnalytics();

//screen display sizes
const mobileScreen = window.screen.width <= 768;

type AuthContextProviderProps = {
    children?: React.ReactNode;
};

type AuthContextType = {
    userSignInGoogle: () => void;
    logOut: () => void;
    user: User | null;
};

// create the auth context
export const AuthContext = createContext<AuthContextType>({
    userSignInGoogle: () => {},
    logOut: () => {},
    user: null,
});

// component to wrap the app and provide the auth context
export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
    const [user, setUser] = useState<User | null>(null);

    // Email - create user account
    const createUserEmail = (email: string, password: string) => {
        createUserWithEmailAndPassword(auth, email, password);
        // .then((userCredential) => {
        //     // Signed in
        //     const user = userCredential.user;

        // })
        // .catch((error) => {
        //     const errorCode = error.code;
        //     const errorMessage = error.message;

        // });
    };

    // Google - create user account and/or sign in
    const userSignInGoogle = () => {
        const provider = new GoogleAuthProvider();
        provider.setCustomParameters({ prompt: 'select_account' });
        if (mobileScreen) {
            signInWithRedirect(auth, provider);
        } else {
            signInWithPopup(auth, provider);
        }
    };

    // log out
    const logOut = () => {
        signOut(auth);
    };

    // Listen to the Firebase Auth state and set the local state.
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            console.log('User', currentUser);
        });
        return () => {
            unsubscribe();
        };
    }, []);

    return (
        <AuthContext.Provider
            value={{ userSignInGoogle, createUserEmail, logOut, user }}
        >
            {children}
        </AuthContext.Provider>
    );
};

// custom hook to use the auth context
export const UserAuth = () => {
    return useContext(AuthContext);
};
