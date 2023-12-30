import { createStackNavigator } from "@react-navigation/stack";

import { ScreenOptions } from "../utilities/anim";
import CustomText from "../components/CustomText";


const Stack = createStackNavigator();

const LoginScreen = () => {
    return <CustomText>Login Screen</CustomText>
}

const AuthStack = () => {
    return (
        <Stack.Navigator screenOptions={ScreenOptions} initialRouteName="LoginScreen">
            <Stack.Screen name={'LoginScreen'} component={LoginScreen} />
        </Stack.Navigator>
    )
}

export default AuthStack