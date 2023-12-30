import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../../../config/typography'
import { themeColors } from '../../../../config/colors'
import CustomText from '../../../../components/CustomText'
import Spacer from '../../../../components/Spacer'
import Animated, { FadeInDown } from 'react-native-reanimated'

const GifhyCard = ({ item, index }) => {

    return (
        <Animated.View entering={FadeInDown.delay(100 * index)} style={styles.container}>
            <View style={styles.imgContainer}>
                <Image source={{ uri: item.images.original.url }} style={styles.imgContainer} alt='No Gif Available' />
            </View>
            <View style={styles.wrapCon}>
                <Spacer height={SCREEN_HEIGHT * 0.02} />
                <View style={styles.row}>
                    <CustomText color={themeColors.black} semiBold>Username :</CustomText>
                    <Spacer width={SCREEN_WIDTH * 0.02} />
                    <CustomText color={themeColors.black} medium>{item.username?item.username.toUpperCase():"Not Available"}</CustomText>
                </View>
                <Spacer height={SCREEN_HEIGHT * 0.02} />
                <View style={styles.row}>
                    <CustomText color={themeColors.black} semiBold>Title :</CustomText>
                    <Spacer width={SCREEN_WIDTH * 0.02} />
                    <CustomText color={themeColors.black} style={{ width: "90%" }} medium>{item.title}</CustomText>
                </View>
                <Spacer height={SCREEN_HEIGHT * 0.02} />
                <View style={styles.row}>
                    <CustomText color={themeColors.black} semiBold>Rating :</CustomText>
                    <Spacer width={SCREEN_WIDTH * 0.02} />
                    <CustomText color={themeColors.black} medium>{item.rating}</CustomText>
                </View>
            </View>
        </Animated.View>
    )
}

export default GifhyCard

const styles = StyleSheet.create({

    container: {
        backgroundColor: themeColors.white,
        borderRadius: 8,
        paddingBottom: 20,
        marginTop: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,

        elevation: 2,
    },

    imgContainer: {
        height: 200,
        backgroundColor: 'lightgrey',
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8
    },
    wrapCon: {
        paddingHorizontal: 12
    },
    row: {
        flexDirection: 'row'
    }

})