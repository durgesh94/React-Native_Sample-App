import React, { useEffect, useState } from "react";
import { Image } from "react-native";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useAuth } from "../../providers/AuthProvider";
import { useThemes } from "../../providers/ThemeProvider";
import { HomeModule } from "../../../home";
import { SearchModule } from "../../../cart";
import { PostModule } from "../../../orders";
import { TabStyles } from "./appRoutes.style";
import { ProfileModule } from "../../../profile";
import { FavoriteModule } from "../../../favorite";
import { DrawerContent } from "../../components/DrawerContent";

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
                tabBarLabel: 'Cart',
                tabBarIcon: ({ color, size }: any) => <AntDesign name="shoppingcart" color={color} size={size} />
            }} />
            <bottomTab.Screen name="Post" component={PostModule} options={{
                tabBarLabel: 'My Orders',
                tabBarIcon: ({ color, size }: any) => <AntDesign name="folder1" color={color} size={size} />
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

const DrawerScreen = () => (
    <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
        <Drawer.Screen name="Home" component={BottomTabScreen} />
    </Drawer.Navigator>
);

export const AppRoutes = () => (
    <NavigationContainer>
        {/* <BottomTabScreen /> */}
        <DrawerScreen />
    </NavigationContainer>
);