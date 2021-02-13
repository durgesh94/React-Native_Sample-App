import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from '@react-navigation/native';
import { Home } from "../../screens/Home";
import { Product } from "../../screens/Product";
import { useLocalization } from "../../../shared/providers/LocalizationProvider";
import { useThemes } from "../../../shared/providers/ThemeProvider";
import { useTab } from "../../../shared/providers/TabProvider";

const HomeStack = createStackNavigator();

const HomeStackScreen = () => {

    const navigation = useNavigation();
    const { strings } = useLocalization();
    const { themes } = useThemes();
    const { showBottomTabBar } = useTab();

    navigation.setOptions({ tabBarVisible: showBottomTabBar });

    return (
        <HomeStack.Navigator screenOptions={{
            headerTintColor: themes.orangeHeaderTitleTextColor,
            headerStyle: {
                backgroundColor: themes.blackHeaderBackgroundColor,
            }
        }}>
            <HomeStack.Screen name="home" component={Home} options={{
                headerShown: false, headerTitle: "Home"
            }} />
            <HomeStack.Screen name="home-product" component={Product} options={
                ({ route }: any) => ({ title: route.params.name })
            } />
        </HomeStack.Navigator>
    )
}

export const HomeRoutes = () => <HomeStackScreen />