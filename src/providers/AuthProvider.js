import React, { createContext, useEffect } from "react";
import SplashScreen from "react-native-splash-screen";
import { useDispatch, useSelector } from "react-redux";

import AuthStack from "../navigations/AuthStack";
import MainStack from "../navigations/MainStack";
import { getUserAccessToken } from "../utilities/storage";
import { continueSession, signOut } from "../redux/actions";

export const AuthContext = createContext();

const AuthProvider = () => {

    const dispatch = useDispatch();
    const authState = useSelector((state) => state.AuthReducer);

    useEffect(() => {
        setTimeout(() => {
            SplashScreen.hide();
        }, 5000);
        const handleNav = () => {
            const userToken = getUserAccessToken();
            if (userToken) {
                dispatch(continueSession(userToken));
            } else {
                dispatch(signOut());
            }
        };
        handleNav();
    }, [dispatch]);

    return (
        <AuthContext.Provider value={authState}>
            {!authState?.isLogged ? <MainStack /> : <AuthStack />}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
