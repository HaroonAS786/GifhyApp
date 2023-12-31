import { StyleSheet } from 'react-native'
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../../config/typography'

export const getStyles = () => StyleSheet.create({
    container: {
        width: SCREEN_WIDTH,
        paddingHorizontal: 16,
    },

    noGifCon: {
        // flex: 1,
        height: SCREEN_HEIGHT * 0.6,
        alignItems: "center",
        justifyContent: 'center'
    }
})