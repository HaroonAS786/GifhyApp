import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import Animated, { interpolate, useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";

import { ErrorIcon, InfoIcon, SuccessIcon, WarningIcon } from "../assets/svgs";
import { themeColors } from "../config/colors";
import { SCREEN_WIDTH } from "../config/typography";
import { ENUMS } from "../utilities/enums";
import CustomText from "./CustomText";
import Spacer from "./Spacer";

const FlashNotification = {
    show: (message, type = 'default', long = false) => {
        global.flashMessageRef(message, type, long);
    }
}

const FlashMessage = ({ }) => {
    const animValue = useSharedValue(0);
    const animStyle = useAnimatedStyle(() => {
        return {
            transform: [{ translateY: interpolate(animValue.value, [0, 1], [-100, 60]) }],
            opacity: interpolate(animValue.value, [0, 1], [0, 1]),
        }
    });

    const [text, setText] = useState("");
    const [messageType, setMessageType] = useState("default");

    useEffect(() => {
        global.flashMessageRef = show
    }, [])

    const show = (message, type, long) => {
        setText(message);
        setMessageType(type);
        animValue.value = withTiming(1, { duration: 500 });
        setTimeout(() => {
            animValue.value = withTiming(0, { duration: 500 });
            setTimeout(() => {
                setText("");
                setMessageType("default");
            }, 1000);
        }, long ? 4000 : 2000);
    }

    const getIcon = (type) => {
        switch (type) {
            case ENUMS.SUCCESS: return <SuccessIcon />
            case ENUMS.ERROR: return <ErrorIcon />
            case ENUMS.INFO: return <InfoIcon />
            case ENUMS.WARNING: return <WarningIcon />
        }
    }
    const getBgColor = (type) => {
        switch (type) {
            case ENUMS.SUCCESS:
                return {
                    backgroundColor: themeColors.success50,
                }
            case ENUMS.ERROR:
                return {
                    backgroundColor:themeColors.error50,
                }
            case ENUMS.INFO:
                return {
                    backgroundColor: themeColors.info50,
                }
            case ENUMS.WARNING:
                return {
                    backgroundColor: themeColors.warning50,
                }
            default:
                return null
        }
    }
    const getTypeColor = (type) => {
        switch (type) {
            case ENUMS.SUCCESS:
                return {
                    borderColor: themeColors.success,
                }
            case ENUMS.ERROR:
                return {
                    borderColor: themeColors.error,
                }
            case ENUMS.INFO:
                return {
                    borderColor: themeColors.info,
                }
            case ENUMS.WARNING:
                return {
                    borderColor: themeColors.warning,
                }
            default:
                return null
        }
    }

    return !!text && (
        <Animated.View style={[styles.container, animStyle, getBgColor(messageType)]}>
            <View style={styles.wrapCon}>
                <View style={[styles.view, getTypeColor(messageType)]} />
                <View style={styles.row}>
                    {getIcon(messageType)}
                    <Spacer width={SCREEN_WIDTH * 0.02} />
                    <CustomText body medium color={themeColors.black} style={{ width: '85%' }}>{text}</CustomText>
                </View>
            </View>
        </Animated.View>
    );
}


const styles = StyleSheet.create({
    container: {
        position: "absolute",
        height: 65,
        left: 10,
        right: 10,
        borderRadius: 10,
    },
    view: {
        backgroundColor: "transparent",
        height: "100%",
        width: "5%",
        borderWidth: 5,
        borderRadius: 10,
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
        borderTopWidth: 0,
        borderBottomWidth: 0,
        borderRightWidth: 0

    },
    wrapCon: {
        flexDirection: 'row',
        borderRadius: 10,
        height: '100%'
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    }
});

export {
    FlashMessage
};

export default FlashNotification;
