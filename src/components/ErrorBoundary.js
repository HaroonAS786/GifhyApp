import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

import CustomText from './CustomText';
import { themeColors } from '../config/colors';
import ErrorBoundary from 'react-native-error-boundary';

const ErrorFallback = ({ error }) => (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <CustomText body semiBold color={themeColors.black}>
            Something went wrong: {error.message}
        </CustomText>
    </SafeAreaView>
);

const ErrorBoundaryDef = ({ children }) => {
    return <ErrorBoundary FallbackComponent={ErrorFallback}>{children}</ErrorBoundary>;
};

export default ErrorBoundaryDef;

const styles = StyleSheet.create({
    errorFallBackContainer: {

    }
})


