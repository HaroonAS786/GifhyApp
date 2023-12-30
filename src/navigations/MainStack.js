
import { createStackNavigator } from "@react-navigation/stack";
import GifhyListScreen from "../screens/main/GifhyList";
import { ScreenOptions } from "../utilities/anim";

const Stack = createStackNavigator()

const MainStack = () => {
    return (
        <Stack.Navigator screenOptions={ScreenOptions} initialRouteName="HomeScreen">
            <Stack.Screen name={'GifhyListScreen'} component={GifhyListScreen} />
        </Stack.Navigator>
    )
}

export default MainStack