import React, { createContext, useEffect, useState } from "react";
import {
    getAuth,
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithPopup,
    signOut,
} from "firebase/auth";
import app from "./firebase.config";

export const AuthContext = createContext();

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const tmpStoreKeyNews = 'ToolsFinder(GoodToolsAi)RegularStoring:_newsId'
    const tmpStoreKeyTool = 'ToolsFinder(GoodToolsAi)RegularStoring:_toolId'
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [toggle,setToggle] = useState(false);
    const [loadData, setLoadData] = useState(false);

    const storeNewsId = (value)=>{
        sessionStorage.setItem(tmpStoreKeyNews, JSON.stringify(value))
    }
    const storeToolId = (value)=>{
        sessionStorage.setItem(tmpStoreKeyTool, JSON.stringify(value))
    }

    const setTrue=()=>{
        setToggle(true)
    }
    const setFalse=()=>{
        setToggle(false)
    }

    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, provider)
            .finally(() => setLoading(false)); 
    };

    const logOut = () => {
        setLoading(true);
        return signOut(auth)
            .finally(() => setLoading(false));  
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => unsubscribe();
    }, []);


    const authInfo = {
        logOut,
        user,
        loading,
        toggle,
        googleSignIn,
        setTrue,
        setFalse,
        storeNewsId,
        storeToolId,
        loadData,
        setLoadData
    };

    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;
