import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from '@react-navigation/native';
import { Profile } from "../../screens/Profile";
import { Settings } from "../../screens/Settings";
import { useLocalization } from "../../../shared/providers/LocalizationProvider";
import { useThemes } from "../../../shared/providers/ThemeProvider";
import { useTab } from "../../../shared/providers/TabProvider";
import { Contacts } from "../../screens/Contacts";

const ProfileStack = createStackNavigator();

const ProfileStackScreen = () => {

    const navigation = useNavigation();
    const { strings } = useLocalization();
    const { themes } = useThemes();
    const { showBottomTabBar } = useTab();

    navigation.setOptions({ tabBarVisible: showBottomTabBar });

    return (
        <ProfileStack.Navigator screenOptions={{
            headerTintColor: themes.orangeHeaderTitleTextColor,
            headerStyle: {
                backgroundColor: themes.blackHeaderBackgroundColor,
            }
        }}>
            <ProfileStack.Screen name="profile" component={Profile} options={{
                headerShown: false
            }} />
             <ProfileStack.Screen name="profile-contacts" component={Contacts} options={{
                headerShown: true, headerTitle: "Contacts"
            }} />
            <ProfileStack.Screen name="profile-settings" component={Settings} options={{
                headerShown: true, headerTitle: "Settings"
            }} />
        </ProfileStack.Navigator>
    )
}

export const ProfileRoutes = () => <ProfileStackScreen />