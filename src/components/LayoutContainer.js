import { debounce } from 'lodash';
import React, { useCallback } from 'react';
import {
    Platform,
    RefreshControl,
    SafeAreaView,
    StyleSheet,
    TouchableOpacity,
    View
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { ArrowLeft } from '../assets/svgs';
import { themeColors } from '../config/colors';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../config/typography';
import CustomText from './CustomText';
import MyStatusBar from './MyStatusBar';
import Spacer from './Spacer';


const LayoutContainer = ({
    leftIcon,
    rightIcon,
    rightIconPress = () => null,
    headerTitle,
    isHeader,
    isHeader2,
    children,
    style,
    refreshing,
    onRefresh,
    pullToRefresh,
    scrollEnable = true,
    isForm,
    noHeight,
    backOnPress = () => null,
    referralStyles,
}) => {


    const delayedTapBack = useCallback(
        debounce(() => backOnPress(), 200),
        [],
    );
    const delayedTapRight = useCallback(
        debounce(() => rightIconPress(), 200),
        [],
    );

    if (isHeader) {
        return (
            <>
                <MyStatusBar backgroundColor={themeColors.primary} barStyle="light-content" />
                <View style={[styles.mainContWrap, style]}>
                    <SafeAreaView>
                        <View style={[styles.topCont]}>
                            <View style={styles.barCont}>
                                <TouchableOpacity
                                    activeOpacity={0.6}
                                    onPress={delayedTapBack}
                                    style={styles.backIconCont}>
                                    {leftIcon ? leftIcon : <ArrowLeft />}
                                </TouchableOpacity>
                                <CustomText bold size={16} color={themeColors.white}>{headerTitle}</CustomText>
                                <View />
                            </View>
                        </View>
                    </SafeAreaView>
                    {isForm ? (
                        <KeyboardAwareScrollView
                            style={[styles.scrollWrap, style]}
                            contentContainerStyle={[styles.headerWrap, style]}
                            showsVerticalScrollIndicator={false}>
                            {children}
                        </KeyboardAwareScrollView>
                    ) : noHeight ? (
                        <KeyboardAwareScrollView
                            scrollEnabled={scrollEnable}
                            style={[styles.scrollWrap, style]}
                            contentContainerStyle={[styles.wrapNoHeight, style]}
                            showsVerticalScrollIndicator={false}
                            refreshControl={
                                pullToRefresh ? (
                                    <RefreshControl
                                        refreshing={refreshing}
                                        onRefresh={onRefresh}
                                    />
                                ) : null
                            }>
                            {children}
                        </KeyboardAwareScrollView>
                    ) : headerTitle ? (
                        <View style={[styles.headerWrap, style, referralStyles]}>
                            <View style={[styles.rowWrap]}>
                                <View style={styles.barCont}>
                                    <TouchableOpacity
                                        activeOpacity={0.6}
                                        onPress={delayedTapBack}
                                        style={styles.backIconCont}>
                                        {leftIcon ? leftIcon : <ArrowLeft />}
                                    </TouchableOpacity>
                                    <CustomText h6 color={themeColors.white}>{headerTitle}</CustomText>
                                    <View />
                                </View>
                            </View>
                            {children}
                        </View>
                    ) : null}
                </View>
            </>
        );
    } else if (isHeader2) {
        return (
            <>
                <MyStatusBar backgroundColor={themeColors.primary} barStyle="light-content" />
                <SafeAreaView style={[styles.mainContWrap, style]}>
                    <View style={[styles.mainContWrap, style]}>
                        <SafeAreaView>
                            <View style={[styles.topCont]}>
                                <View style={styles.barCont}>
                                    {leftIcon ? <TouchableOpacity
                                        activeOpacity={0.6}
                                        onPress={delayedTapBack}
                                        style={styles.backIconCont}>
                                        {leftIcon}
                                    </TouchableOpacity> : <Spacer width={SCREEN_WIDTH * 0.05} />}
                                    <CustomText style={styles.header2View} h6 color={themeColors.white}>{headerTitle}</CustomText>
                                    <TouchableOpacity
                                        activeOpacity={0.6}
                                        onPress={delayedTapRight}
                                        style={styles.backIconCont}>
                                        {rightIcon && rightIcon}
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </SafeAreaView>
                        {isForm ? (
                            <KeyboardAwareScrollView
                                enableOnAndroid={true}
                                enableAutomaticScroll={Platform.OS === 'ios'}
                                style={[styles.scrollWrap, style]}
                                contentContainerStyle={[styles.headerWrap, style]}
                                showsVerticalScrollIndicator={false}>
                                {children}
                            </KeyboardAwareScrollView>
                        ) : noHeight ? (
                            <KeyboardAwareScrollView
                                nestedScrollEnabled={true}
                                style={[styles.scrollWrap, style]}
                                contentContainerStyle={[styles.wrapNoHeight, style]}
                                showsVerticalScrollIndicator={false}>
                                {children}
                            </KeyboardAwareScrollView>
                        ) : (
                            <View style={[styles.headerWrap, style]}>{children}</View>
                        )}
                    </View>
                </SafeAreaView>
            </>
        );
    }
    else {
        return (
            <>
                <MyStatusBar backgroundColor={themeColors.primary} barStyle={"light-content"} />
                {isForm ? (
                    <KeyboardAwareScrollView
                        style={[styles.wrap, style]}
                        contentContainerStyle={[styles.wrapNoHeight, style]}
                        showsVerticalScrollIndicator={false}>
                        {children}
                    </KeyboardAwareScrollView>
                ) : noHeight ? (
                    <View style={{ flex: 1,backgroundColor:themeColors.white }}>
                        <KeyboardAwareScrollView
                            scrollEnabled={scrollEnable}
                            style={[styles.scrollWrap, style]}
                            contentContainerStyle={[styles.wrapNoHeight, style]}
                            refreshControl={
                                pullToRefresh ? (
                                    <RefreshControl
                                        refreshing={refreshing}
                                        onRefresh={onRefresh}
                                    />
                                ) : null
                            }
                            showsVerticalScrollIndicator={false}>
                            {children}
                        </KeyboardAwareScrollView>
                    </View>
                ) : (
                    <View
                        style={[
                            styles.wrap,
                            style,
                            { alignItems: 'center', justifyContent: 'flex-start' },
                        ]}>
                        {children}
                    </View>
                )}
            </>
        );
    }
}

export default LayoutContainer

const styles = StyleSheet.create({
    mainContWrap: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: themeColors.white,
    },
    wrap: {
        height: SCREEN_HEIGHT,
        width: SCREEN_WIDTH,
        backgroundColor: themeColors.white,
    },
    headerWrap: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: themeColors.white,
    },
    wrapNoHeight: {
        width: SCREEN_WIDTH,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    topCont: {
        height: Platform.OS === "android" ? SCREEN_HEIGHT * 0.08 : SCREEN_HEIGHT * 0.06,
        width: SCREEN_WIDTH,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: themeColors.primary,
        paddingBottom: Platform.OS === "android" && SCREEN_HEIGHT * 0.01
    },
    barCont: {
        height: SCREEN_HEIGHT * 0.035,
        width: SCREEN_WIDTH * 0.87,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: Platform.OS === 'ios' ? SCREEN_HEIGHT * 0.01 : 0,
    },
    backIconCont: {
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    rowTxt: {
        color: themeColors.primary,
        marginLeft: 5,
    },
    headingTitle: {
        marginTop: SCREEN_HEIGHT * 0.01,
    },
    backIconStyle: {
        width: '55%',
        height: '55%',
        resizeMode: 'contain',
    },
    rowWrap: {
        width: SCREEN_WIDTH * 0.85,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        paddingBottom: SCREEN_HEIGHT * 0.01,
    },
    topPadding: {
        paddingTop: SCREEN_HEIGHT * 0.02,
    },
    header2View: {
        textAlign: 'center'
    }
});