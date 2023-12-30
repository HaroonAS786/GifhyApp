import Snackbar from "react-native-snackbar";
import { themeColors } from "../config/colors";

export const screenAnimation = {
    showModal: {
        enter: {
            enabled: true,
            alpha: {
                from: 0,
                to: 1,
                duration: 300,
            },
        },
        exit: {
            enabled: true,
            alpha: {
                from: 1,
                to: 0,
                duration: 300,
            },
        },
    },
};

export const ScreenOptions = {
    headerShown: false,
    animations: screenAnimation,
}

export const showSnackbar = (message) => {
    Snackbar.show({
        text: message,
        duration: Snackbar.LENGTH_LONG,
        backgroundColor:themeColors.primary,
        action: {
            // text: 'UNDO',
            textColor: themeColors.white,
            // onPress: () => {
            //     // Handle action press
            //     Snackbar.dismiss();
            // },
        },
    });
};
