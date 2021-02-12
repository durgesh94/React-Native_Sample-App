import React, { useEffect, useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useAuth } from "../../providers/AuthProvider";
import { useThemes } from "../../providers/ThemeProvider";
import { HomeModule } from "../../../home";
import { SearchModule } from "../../../search";
import { PostModule } from "../../../post";
import { FavoriteModule } from "../../../favorite";
import { ProfileModule } from "../../../profile";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { Image } from "react-native";
import { TabStyles } from "./appRoutes.style";

const bottomTab = createBottomTabNavigator();

const BottomTabScreen = () => {

    const { user } = useAuth();
    const { themes } = useThemes();
    const tabStyles = TabStyles(themes);
    const [pic, setPic] = useState();

    useEffect(() => {
        setPic(user.picture);
    }, [user]);

    return (
        <bottomTab.Navigator tabBarOptions={{
            activeTintColor: themes.orangeActiveTabTextColor,
            inactiveTintColor: themes.greyInActiveTabTextColor,
            style: {
                backgroundColor: themes.whiteTabBackgroundColor,
                borderTopWidth: 1,
                borderColor: themes.blueGreyBorderColor
            },
        }}>
            <bottomTab.Screen name="Home" component={HomeModule} options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({ color, size }: any) => <AntDesign name="home" color={color} size={size} />
            }} />
            <bottomTab.Screen name="Search" component={SearchModule} options={{
                tabBarLabel: 'Search',
                tabBarIcon: ({ color, size }: any) => <AntDesign name="search1" color={color} size={size} />
            }} />
            <bottomTab.Screen name="Post" component={PostModule} options={{
                tabBarLabel: 'Post',
                tabBarIcon: ({ color, size }: any) => <AntDesign name="camerao" color={color} size={size} />
            }} />
            <bottomTab.Screen name="Favorite" component={FavoriteModule} options={{
                tabBarLabel: 'Favorite',
                tabBarIcon: ({ color, size }: any) => <MaterialIcons name="favorite-border" color={color} size={size} />
            }} />
            <bottomTab.Screen name="Profile" component={ProfileModule} options={{
                tabBarLabel: '',
                tabBarIcon: () => <Image source={{ uri: pic }} resizeMode="cover" style={tabStyles.image} />
            }} />
        </bottomTab.Navigator>
    );
}

const Drawer = createDrawerNavigator();

const SideDrawerScreen = () => {

    return (
        <Drawer.Navigator
            openByDefault
            overlayColor="transparent"
            drawerStyle={{
                backgroundColor: 'blue',
                width: 240,
            }}
            drawerContentOptions={{
                activeTintColor: 'red',
                inactiveTintColor: 'yellow',
                itemStyle: { marginVertical: 5 },
            }}
        >
            <Drawer.Screen name="Feed" component={HomeModule} />
            <Drawer.Screen name="Article" component={ProfileModule} />
        </Drawer.Navigator>
    )
}

export const AppRoutes = () => (
    <NavigationContainer>
        <BottomTabScreen />
    </NavigationContainer>
);