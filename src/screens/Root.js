import { NavigationContainer } from "@react-navigation/native";
import React from 'react';
import { Provider } from "react-redux";

import { FlashMessage } from "../components/FlashNotify";
import AuthProvider from "../providers/AuthProvider";
import store from '../redux/store';
import { LogBox, View } from "react-native";
import ErrorBoundaryDef from "../components/ErrorBoundary";
import CustomText from "../components/CustomText";
LogBox.ignoreAllLogs()

const Root = () => {

    const WelcomeScreen = () => {
        return <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <CustomText color="black">Hello</CustomText>
        </View>
    }
    return (
        <ErrorBoundaryDef>
            <Provider store={store}>
                <NavigationContainer>
                    {/* <AuthProvider /> */}
                    <WelcomeScreen />
                </NavigationContainer>
                <FlashMessage />
            </Provider>
        </ErrorBoundaryDef>
    )
}

export default Root