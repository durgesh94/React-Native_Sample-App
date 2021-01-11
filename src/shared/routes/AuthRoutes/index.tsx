import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { Intro } from "../../screens/Intro";
import { SignIn } from "../../screens/SignIn";
import { SignUp } from "../../screens/SignUp";
import { useThemes } from "../../providers/ThemeProvider";

const AuthStack = createStackNavigator();

const AuthStackScreen = () => {

    const { themes } = useThemes();

    return (
        <AuthStack.Navigator screenOptions={{
            headerStyle: { backgroundColor: themes.blackHeaderBackgroundColor },
            headerTintColor: themes.orangeHeaderTitleTextColor,
        }}>
            <AuthStack.Screen name="shared-intro" component={Intro} options={{
                headerShown: false
            }} />
            <AuthStack.Screen name="shared-signIn" component={SignIn} options={{
                headerShown: true, headerTitle: "Sign In"
            }} />
            <AuthStack.Screen name="shared-signUp" component={SignUp} options={{
                headerShown: true, headerTitle: "Sign Up"
            }} />
        </AuthStack.Navigator>
    )
};

export const AuthRoutes = () => (
    <NavigationContainer>
        <AuthStackScreen />
    </NavigationContainer>
);