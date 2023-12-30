import React, { useCallback } from "react";
import { Platform, Pressable, StyleSheet, View } from "react-native";

import Animated, {
    useAnimatedStyle,
    withSpring
} from "react-native-reanimated";
import { AccountIcon, CartIcon, HomeIcon, OffersIcon } from "../assets/svgs";
import { themeColors } from "../config/colors";
import CreateAddButton from "./CreateAddButton";
import CustomText from "./CustomText";
import Spacer from "./Spacer";

const CustomBottomTabBar = ({ state, navigation }) => {

    const getIcon = (name, isFocused) => {
        switch (name) {
            case "HomeScreen": return <HomeIcon strokeColor={isFocused ? "#433B95" : "#5E5E5E"} />
            case "OffersScreen": return <OffersIcon strokeColor={isFocused ? "#433B95" : "#5E5E5E"} />
            case "AddButton": return <CreateAddButton onPress={() => navigation.navigate("UserRoleScreen")} />
            case "CartScreen": return <CartIcon strokeColor={isFocused ? "#433B95" : "#5E5E5E"} />
            case "AccountScreen": return <AccountIcon strokeColor={isFocused ? "#433B95" : "#5E5E5E"} />
        }
    }
    const getName = (name) => {
        switch (name) {
            case "HomeScreen": return "Home"
            case "OffersScreen": return "Offers"
            case "CartScreen": return "Cart"
            case "AccountScreen": return "Account"
        }
    }

    const renderTab = useCallback((route, index) => {
        const isFocused = state.index === index;

        const onPress = () => {
            const event = navigation.emit({
                type: 'tabPress',
                target: route.key,
            });
            if (!isFocused && !event.defaultPrevented) {
                navigation.navigate(route.name);
            }
        };

        const animatedStyle = useAnimatedStyle(() => {
            const scale = withSpring(isFocused ? 1.05 : 1);
            return { transform: [{ scale }], };
        });

        return (
            <Animated.View
                key={index}
                style={[
                    styles.button,
                    animatedStyle,
                    {
                        borderTopColor: isFocused ? index !== 2 ? themeColors.primary : themeColors.white : null,
                        borderTopWidth: isFocused ? 3 : 0,
                    }
                ]}>
                <Pressable onPress={onPress}>
                    <View style={{ justifyContent: "center", alignItems: "center" }}>
                        {getIcon(route.name, isFocused)}
                    </View>
                    <Spacer height={8} />
                    <CustomText body2 medium color={isFocused ? "#433B95" : "#5E5E5E"} titiliumSemiBold>{getName(route.name)}</CustomText>
                </Pressable>
            </Animated.View >

        );
    }, [state])

    return (
        <View style={styles.mainContainer}>
            {
                state.routes.map((route, index) => renderTab(route, index))
            }
        </View>
    )
}

const styles = StyleSheet.create({

    mainContainer: {
        flexDirection: 'row',
        backgroundColor: themeColors.white,
        borderColor: '#E8E8E8',
        borderWidth: 1,
        paddingTop: 0,
        paddingBottom: Platform.OS === 'ios' ? 16 : 0

    },
    button: {
        flex: 1,
        marginBottom: 10,
        paddingTop: 6,
        justifyContent: 'center',
        alignItems: 'center',
    },

})

export default CustomBottomTabBar;