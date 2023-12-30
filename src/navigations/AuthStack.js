import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "../screens/auth/login";
import { ScreenOptions } from "../utilities/anim";


const Stack = createStackNavigator();

const AuthStack = () => {
    return (
        <Stack.Navigator screenOptions={ScreenOptions} initialRouteName="LoginScreen">
            <Stack.Screen name={'LoginScreen'} component={LoginScreen} />
        </Stack.Navigator>
    )
}

export default AuthStack