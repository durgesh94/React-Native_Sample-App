import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { useThemes } from '../../providers/ThemeProvider';
import { SharedStyles } from "../../styles";
import { DrawerActions } from '@react-navigation/native';
import { FontAwesome } from "@expo/vector-icons";

interface TabBarProps {
    navigation: any;
}

export const TabBar: React.FC<TabBarProps> = ({ navigation }: any) => {

    const { themes } = useThemes();
    const sharedStyles = SharedStyles(themes);

    return (
        <View style={{ backgroundColor: themes.blackHeaderBackgroundColor, flexDirection: "row" }}>
            <View>
                <TouchableOpacity style={{ margin: 15 }} onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
                    <FontAwesome name="bars" size={24} color={themes.orangeHeaderTitleTextColor} />
                </TouchableOpacity>
            </View>
            <View style={{ marginTop: 12, marginLeft: 100 }}>
                <Text style={{ color: themes.orangeHeaderTitleTextColor, fontSize: 18 }}>Home</Text>
            </View>
        </View>
    )
}