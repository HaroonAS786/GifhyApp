import React, { useEffect, useState } from 'react';

import CustomText from './CustomText';
import { themeColors } from '../config/colors';
import { StyleSheet, View } from 'react-native';
import Button from './Button';
import Spacer from './Spacer';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../config/typography';
import FlashNotification from './FlashNotify';
import { ENUMS } from '../utilities/enums';

const TimeComponent = ({ durationInSeconds, otpResendClick }) => {

    const [timer, setTimer] = useState(durationInSeconds);

    useEffect(() => {
        setTimer(durationInSeconds)
    }, [otpResendClick])

    useEffect(() => {
        if (timer > 0) {
            const countdown = setTimeout(() => {
                setTimer(timer - 1);
            }, 1000); // decrement the timer every second (1000 milliseconds)

            return () => clearTimeout(countdown);
        }
    }, [timer]);

    const formatTime = time => {
        const minutes = Math.floor(time / 60)
            .toString()
            .padStart(2, '0');
        const seconds = (time % 60).toString().padStart(2, '0');
        return `${minutes}:${seconds}`;
    };

    return (
        <>
            <View style={styles.container}>
                <CustomText color={themeColors.label} body2 style={{ textAlign: 'center' }}>{`Resend code in  `}</CustomText>
                <CustomText disabled={true} F
                    color={themeColors.label}
                    body2
                    style={{ textAlign: 'center', }}>
                    {`${formatTime(timer)}`}
                </CustomText>
            </View>
            <Spacer height={SCREEN_HEIGHT * 0.018} />
            {timer === 0 && <Button label={"Resend"} buttonTextColor={themeColors.primary} onPress={otpResendClick} buttonContainerStyle={styles.btnContainer} />}
        </>
    );
};

export default TimeComponent;

const styles = StyleSheet.create({

    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 10,
    },
    btnContainer: {
        backgroundColor: themeColors.white,
        borderColor: themeColors.primary,
        borderWidth: 1,
        width: SCREEN_WIDTH * 0.35,
        height: SCREEN_HEIGHT * 0.05,
        alignSelf: 'center'
    }
})
