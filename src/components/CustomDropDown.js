import React, { useCallback, useState } from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';

import Animated, { FadeInDown } from 'react-native-reanimated';
import { ArrowDown, ErrorIcon, PhoneDownArrow, SuccessIcon } from '../assets/svgs';
import { themeColors } from '../config/colors';
import CustomText from './CustomText';
import Spacer from './Spacer';

const CustomDropdown = ({ options, onSelect, selectedOption, label, customStyle, contentStyle, isCountryFlag, errors = [], success = [], placeholder }) => {
    
    const [isDropdownVisible, setDropdownVisible] = useState(false);

    const handleSelectOption = (option) => {
        onSelect(option);
        setDropdownVisible(false);
    };

    const RenderMsg = useCallback(({ msg, isError }) => {
        return (
            <Animated.View style={styles.msgBox}>
                {isError ? <ErrorIcon /> : <SuccessIcon />}
                <CustomText style={{ marginLeft: 4 }} color={themeColors.black}>{msg}</CustomText>
            </Animated.View>
        )
    }, [errors, success])

    return (
        <View style={styles.container}>
            {label && <CustomText body medium color={themeColors.label}>{label}</CustomText>}
            <Spacer height={6} />
            <TouchableOpacity
                style={[styles.dropdownButton, customStyle]}
                onPress={() => setDropdownVisible(!isDropdownVisible)}
            >
                <CustomText body color='gray'>
                    {selectedOption ? selectedOption : placeholder ? placeholder : 'Select an option'}
                </CustomText>
                {isCountryFlag ? <PhoneDownArrow /> : <ArrowDown />}
            </TouchableOpacity>
            {errors.map(msg => <RenderMsg key={msg} msg={msg} isError />)}
            {success.map(msg => <RenderMsg key={msg} msg={msg} />)}
            {isDropdownVisible && (
                isCountryFlag ?
                    <View style={[styles.dropdownContent, contentStyle]}>
                        <ScrollView>
                            {options.map((val, index) => {
                                return (
                                    <Animated.View entering={FadeInDown.delay(50 * index)} key={index}
                                        style={styles.dropdownOption}>
                                        <TouchableOpacity activeOpacity={0.6} onPress={() => handleSelectOption(val)}>
                                            {val}
                                        </TouchableOpacity>
                                    </Animated.View>
                                )
                            })}
                        </ScrollView>
                    </View>
                    :
                    <View style={[styles.dropdownContent, contentStyle]}>
                        <ScrollView>
                            {options.map((val, index) => {
                                return (
                                    <Animated.View entering={FadeInDown.delay(50 * index)} key={index}
                                        onPress={() => handleSelectOption(val)}
                                        style={styles.dropdownOption}>
                                        <TouchableOpacity activeOpacity={0.6} onPress={() => handleSelectOption(val)}>
                                            <CustomText body titilium color='black' >{val}</CustomText>
                                        </TouchableOpacity>
                                    </Animated.View>
                                )
                            })}
                        </ScrollView>
                    </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'relative',
    },
    dropdownButton: {
        backgroundColor: "#f6f6f6",
        borderRadius: 8,
        padding: 12,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    selectedOptionText: {
        color: 'black',
    },
    dropdownList: {
        position: 'absolute',
        top: '100%',
        left: 0,
        zIndex: 1,
        width: '100%',
        backgroundColor: "white"
    },

    dropdownContent: {
        position: 'absolute',
        top: 65,
        width: '100%',
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        borderWidth: 0.2,
        borderColor: themeColors.label,
        borderRadius: 5,
        backgroundColor: '#fff',
        elevation: 4,
    },
    dropdownOption: {
        padding: 10,
        borderBottomColor: 'lightgrey',
        borderBottomWidth: 1
    },
    msgBox: {
        marginTop: 10,
        marginLeft: 4,
        flexDirection: "row",
        alignItems: "center"
    },
});

export default CustomDropdown;
