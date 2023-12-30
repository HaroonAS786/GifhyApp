import { NavigationContainer } from "@react-navigation/native";
import React from 'react';
import { Provider } from "react-redux";

import { LogBox } from "react-native";
import ErrorBoundaryDef from "../components/ErrorBoundary";
import { FlashMessage } from "../components/FlashNotify";
import AuthProvider from "../providers/AuthProvider";
import store from '../redux/store';
LogBox.ignoreAllLogs()

const Root = () => {

    return (
        <ErrorBoundaryDef>
            <Provider store={store}>
                <NavigationContainer>
                 <AuthProvider/>
                </NavigationContainer>
                <FlashMessage />
            </Provider>
        </ErrorBoundaryDef>
    )
}

export default Root