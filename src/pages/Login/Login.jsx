import React from 'react'
import { PageContainer, Gbtn, Button } from './Login.styles'
import { useSelector, useDispatch } from 'react-redux'

import { setUser, logoutUser } from '../../features/user/userSlice'
import { gprovider } from '../../firebase-config'
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";

export const Login = () => {
    const dispatch = useDispatch();
    const isDark = useSelector(state => state.settings.dark)
    const user = useSelector(state => state.user.user)

    async function doSignup() {
        const auth = getAuth();
        signInWithPopup(auth, gprovider)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const user = result.user;
                let usr = {
                    name: user.displayName,
                    mail: user.email,
                    photoURL: user.photoURL,
                    uid: user.uid,
                    token: token
                }
                dispatch(setUser(usr))
            }).catch((error) => {
                console.log(error);
            });
    }

    const doSignOut = () => {
        const auth = getAuth();
        signOut(auth).then(() => {
            dispatch(logoutUser())
        }).catch((error) => {
            console.log(error);
        });
    }

    return (
        <PageContainer darkMode={isDark} >
            {user ?
                <Button onClick={doSignOut}>Logout</Button> :
                <Gbtn onClick={doSignup} src="sign-in-with-google.png" alt="" />
            }
            {user ?
                <div>
                    <p>Logged in as:</p>
                    <p>{user.name}</p>
                    <p>{user.mail}</p>
                </div>
                :
                null}
        </PageContainer>
    )

}
