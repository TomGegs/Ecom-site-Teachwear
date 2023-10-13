import {
    signInWithPopup,
    signInWithRedirect,
    signOut,
    onAuthStateChanged,
    GoogleAuthProvider,
    User,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';

import { useContext, createContext, useEffect, useState } from 'react';
import { auth, db } from '../config';

//screen display sizes
const mobileScreen = window.screen.width <= 768;

type AuthContextProviderProps = {
    children?: React.ReactNode;
};

// auth context type
type AuthContextType = {
    userSignInGoogle: () => void;
    userSignInEmail: (email: string, password: string) => void;
    createUserEmail: (email: string, password: string) => void;
    logOut: () => void;
    user: User | null;
};

// create the auth context
export const AuthContext = createContext<AuthContextType>({
    userSignInGoogle: () => {},
    userSignInEmail: () => {},
    createUserEmail: () => {},
    logOut: () => {},
    user: null,
});

// component to wrap the app and provide the auth context
export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
    const [user, setUser] = useState<User | null>(null);

    // Email - create user account
    const createUserEmail = (email: string, password: string) => {
        createUserWithEmailAndPassword(auth, email, password);
        setDoc(doc(db, 'users', email), {
            displayName,
            email,
            createdDate: timestamp,
            ...additionalData,
        });
        setDoc(doc(db, 'users', email), {
            savedClothing: [],
        });
    };

    // Email - sign in
    const userSignInEmail = async (email: string, password: string) => {
        return signInWithEmailAndPassword(auth, email, password);
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
        setDoc(doc(db, 'users', userCredential), {
            savedClothing: [],
        });
    };

    // log out
    const logOut = () => {
        signOut(auth);
        console.log('User signed out');
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
            value={{
                userSignInGoogle,
                userSignInEmail,
                createUserEmail,
                logOut,
                user,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

// custom hook to use the auth context
export const UserAuth = () => {
    return useContext(AuthContext);
};
