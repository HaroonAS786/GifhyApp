import { ActivityIndicator, Platform, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { themeColors } from '../config/colors'
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../config/typography'

const Loading = () => {

    return (
        <View style={styles.container}>
            <View style={styles.loaderContainer}>
                <ActivityIndicator size={'large'} color={themeColors.primary} />
            </View>
        </View>
    )
}

export default Loading

const styles = StyleSheet.create({

    container: {
        // ...StyleSheet.absoluteFill,
        // top: -50,
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.5)'",
        // zIndex: 10000,

    },

    loaderContainer: {
        backgroundColor: themeColors.white,
        width: SCREEN_WIDTH * 0.25,
        height: SCREEN_HEIGHT * 0.11,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center'
    }

})