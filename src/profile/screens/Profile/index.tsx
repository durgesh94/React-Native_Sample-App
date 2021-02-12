import React, { useEffect } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { useThemes } from '../../../shared/providers/ThemeProvider';
import { SharedStyles } from '../../../shared/styles';
import { useAuth } from '../../../shared/providers/AuthProvider';

export const Profile: React.FC = ({ navigation }: any) => {

    const { themes } = useThemes();
    const sharedStyles = SharedStyles(themes);
    const { signOut } = useAuth();

    const onLogout = () => {
        signOut();
    }

    return (
        <View style={{ flex: 1, marginTop: 50, marginHorizontal: 15 }}>
            <View style={{ marginLeft: 10 }}>
                <Text>Username</Text>
                <Text>Profile details</Text>
            </View>
            <View style={{ marginTop: 10 }}>
                <TouchableOpacity style={sharedStyles.button} onPress={() => navigation.navigate("profile-settings")}>
                    <Text style={sharedStyles.btnText}>Settings</Text>
                </TouchableOpacity>
            </View>
            <View style={{ marginTop: 10 }}>
                <TouchableOpacity style={sharedStyles.button} onPress={() => navigation.navigate("profile-contacts")}>
                    <Text style={sharedStyles.btnText}>Contacts</Text>
                </TouchableOpacity>
            </View>
            <View style={{ marginTop: 10 }}>
                <TouchableOpacity style={sharedStyles.button} onPress={() => onLogout()}>
                    <Text style={sharedStyles.btnText}>Logout</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}