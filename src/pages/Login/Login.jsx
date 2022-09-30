import React from 'react'
import { PageContainer } from './Login.styles'
import { useSelector } from 'react-redux'

import { gprovider } from '../../firebase-config'
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";

export const Login = () => {

    const isDark = useSelector(state => state.settings.dark)

    async function doSignup() {
        const auth = getAuth();
        signInWithPopup(auth, gprovider)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const user = result.user;
                let tmp = {
                    name: user.displayName,
                    mail: user.email,
                    photoURL: user.photoURL,
                    uid: user.uid,
                    token: token
                }
                console.log(tmp)
            }).catch((error) => {
                console.log(error);
            });
    }


	const doSignOut = () => {
		const auth = getAuth();
		signOut(auth).then((res) => {
            console.log(res)
		}).catch((error) => {
			console.log(error);
		});
	}

    return (
        <PageContainer darkMode={isDark} >
            <p>Login</p>
            <button onClick={doSignup}>Login with Google</button>
            <button onClick={doSignOut}>Logout</button>
        </PageContainer>
    )

}
