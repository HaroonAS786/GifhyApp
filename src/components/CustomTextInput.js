import React, { useState, useCallback } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Animated from "react-native-reanimated";

import { ErrorIcon, SuccessIcon } from "../assets/svgs";
import { themeColors } from "../config/colors";
import CustomText from "./CustomText";
import Spacer from "./Spacer";

const CustomTextInput = ({
	label,
	placeholder,
	onChangeText,
	onKeyPress,
	maxLength = 50,
	password = false,
	errors = [],
	success = [],
	value = undefined,
	onBlur,
	inputStyle,
	numberOfLines,
	multiline,
	autoCapitalize,
	keyboardType,
	leftIcon,
	leftIconPress,
	rightIcon,
	rightIconPress,
}) => {
	const [isFocused, setIsFocused] = useState(false);

	const handleFocus = useCallback(() => {
		setIsFocused(true);
	}, []);

	const handleBlur = useCallback(() => {
		setIsFocused(false);
	}, []);

	const borderStyle = {
		borderColor: isFocused ? (errors.length > 0 ? "red" : "black") : "#F3F3F3",
	};

	const RenderMsg = useCallback(({ msg, isError }) => {
		return (
			<Animated.View style={styles.msgBox}>
				{isError ? <ErrorIcon /> : <SuccessIcon />}
				<CustomText style={{ marginLeft: 4 }} color={themeColors.black}>
					{msg}
				</CustomText>
			</Animated.View>
		);
	}, [errors, success]);

	return (
		<View>
			{label && (
				<CustomText body medium color={themeColors.label}>
					{label}
				</CustomText>
			)}
			<Spacer height={6} />
			<View style={[styles.mainWrap, { ...borderStyle }]}>
				<TextInput
					value={value}
					maxLength={maxLength}
					placeholder={placeholder}
					placeholderTextColor={themeColors.label}
					style={[styles.container, inputStyle]}
					onChangeText={onChangeText}
					secureTextEntry={password}
					onKeyPress={onKeyPress}
					onBlur={(e) => {
						handleBlur();
						onBlur && onBlur(e);
					}}
					onFocus={handleFocus}
					multiline={multiline}
					keyboardType={keyboardType}
					numberOfLines={numberOfLines}
					autoCapitalize={autoCapitalize}
				/>
				<TouchableOpacity onPress={rightIconPress} activeOpacity={0.6}>
					{rightIcon}
				</TouchableOpacity>
			</View>
			{errors.map((msg) => (
				<RenderMsg key={msg} msg={msg} isError />
			))}
			{success.map((msg) => (
				<RenderMsg key={msg} msg={msg} />
			))}
		</View>
	);
};

const styles = StyleSheet.create({
	mainWrap: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		backgroundColor: "#F3F3F3",
		borderRadius: 8,
		height: 48,
		paddingHorizontal: 12,
		borderWidth: 1, // Set border width
	},
	container: {
		justifyContent: "center",
		alignItems: "center",
		color: themeColors.black,
		backgroundColor: "#F3F3F3",
		// backgroundColor: "red",
		width: "92%",
		height: 45,
		borderRadius: 8,
	},
	msgBox: {
		marginTop: 10,
		marginLeft: 4,
		flexDirection: "row",
		alignItems: "center",
	},
	icon: {
		height: 10,
		width: 10,
		borderRadius: 5,
		marginRight: 5,
	},
});

export default CustomTextInput;
