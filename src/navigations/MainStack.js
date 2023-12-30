import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import { ScreenOptions } from "../utilities/anim";
import CustomText from "../components/CustomText";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


const HomeScreen = () => {
    return <CustomText>Welcome Screen</CustomText>
}

// const BottomTabs = () => {
//     return (
//         <>
//             <Tab.Navigator
//                 tabBar={props => <CustomBottomTabBar {...props} />}
//                 screenOptions={ScreenOptions}>
//                 <Tab.Screen
//                     name={"HomeScreen"}
//                     component={HomeScreen} />
//                 <Tab.Screen
//                     name={"OffersScreen"}
//                     component={OffersScreen} />
//                 <Tab.Screen
//                     name={"AddButton"}
//                     component={View} />
//                 <Tab.Screen
//                     name={"CartScreen"}
//                     component={CartScreen} />
//                 <Tab.Screen
//                     name={"AccountScreen"}
//                     component={AccountScreen} />
//             </Tab.Navigator>
//         </>
//     );
// }


const MainStack = () => {
    return (
        <Stack.Navigator screenOptions={ScreenOptions} initialRouteName="HomeScreen">
            <Stack.Screen name={'HomeScreen'} component={HomeScreen} />
        </Stack.Navigator>
    )
}

export default MainStack