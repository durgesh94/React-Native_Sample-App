import React from 'react';
import { Text, View, TouchableOpacity, Image, Linking } from 'react-native';
import { useThemes } from '../../providers/ThemeProvider';
import { Entypo, MaterialIcons, Ionicons } from "@expo/vector-icons";
import { drawerContentStyles } from "./drawerContent.style";
import { useAuth } from '../../providers/AuthProvider';
import { ProfileModule } from "../../../profile";
import { FavoriteModule } from "../../../favorite";

export const DrawerContent = ({ navigation, ...props }: any) => {

    const { themes } = useThemes();
    const styles = drawerContentStyles(themes);
    const { user, signOut } = useAuth();

    const onLogout = async () => {
        await signOut();
    }

    return (
        <View style={{ marginTop: 65 }}>

            <View style={{ alignItems: "center" }}>
                <Image source={{ uri: user.picture }} style={styles.image} />
            </View>

            <View style={{ alignItems: "center", marginTop: 10 }}>
                <Text style={styles.txtUser}>{user.username}</Text>
            </View>
            <View>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('home')}>
                    <Entypo name="home" size={24} color={themes.orangeActiveTabTextColor} />
                    <Text style={styles.btnText}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Profile')}>
                    <Entypo name="user" size={24} color={themes.orangeActiveTabTextColor} />
                    <Text style={styles.btnText}>Profile</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Notification')}>
                    <Ionicons name="notifications-sharp" size={24} color={themes.orangeActiveTabTextColor} />
                    <Text style={styles.btnText}>Notification</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => Linking.openURL('https://github.com/durgesh94')}>
                    <Entypo name="link" size={24} color={themes.orangeActiveTabTextColor} />
                    <Text style={styles.btnText}>Help</Text>
                </TouchableOpacity>
            </View>
            <View style={{ position: "absolute", marginTop: 700 }}>
                <TouchableOpacity style={styles.btnLogout} onPress={() => onLogout()}>
                    <MaterialIcons name="logout" size={24} color={themes.orangeActiveTabTextColor} />
                    <Text style={styles.txtLogout}>Logout</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}