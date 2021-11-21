import React, { createContext, useContext } from 'react'
import * as Google from 'expo-google-app-auth';
import {ANDROID_CLIENT_ID} from '@env';
import { GoogleAuthProvider, signInWithCredential } from '@firebase/auth';
import { auth } from '../firebase';

const AuthContext = createContext({});

const config = {
    androidClientId:ANDROID_CLIENT_ID,
    scopes:["profile","email"],
    permissions:["public_profile","email","gender","location"]
}

export const AuthProvider = ({children}) => {

    const signInWithGoogle = async () =>{
        await Google.logInAsync(config).then(async(loginResult)=>{
            if (loginResult.type ==='success'){
                //login..
                const {idToken, accesToken}= loginResult;
                const credential = GoogleAuthProvider.credential(idToken,accesToken);
                await signInWithCredential(auth,credential)
            }
            return Promise.reject();
        })
    }

    return (
        <AuthContext.Provider value={{
            user:null,
            signInWithGoogle
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export default function useAuth(){
    return useContext(AuthContext);
}

