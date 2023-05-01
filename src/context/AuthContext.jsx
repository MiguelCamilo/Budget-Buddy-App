import { useEffect, useState } from 'react';
import { useContext, createContext } from 'react';

// google auth
import {
	signInWithPopup,
	signInWithRedirect,
	signOut,
	onAuthStateChanged,
} from 'firebase/auth';
import { auth, provider } from '../firebase.config';

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
	const [user, setUser] = useState({});

	const googleSignIn = () => {
		signInWithPopup(auth, provider);
	};

	const googleSignOut = () => {
		signOut(auth);
	};

	// checks if user is logged in
	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			setUser(currentUser);
			// console.log('User: ', currentUser)
		});
		return () => {
			unsubscribe();
		};
	}, []);

    return (
		<>
			<AuthContext.Provider value={{ googleSignIn, googleSignOut, user }}>
                { children }
            </AuthContext.Provider>
		</>
	);
};

export const UserAuth = () => {
	return useContext(AuthContext);
};
