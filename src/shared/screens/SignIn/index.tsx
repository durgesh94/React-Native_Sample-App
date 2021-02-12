import React from 'react';
import { Text, View, TouchableOpacity, Share } from 'react-native';
import { useAuth } from '../../providers/AuthProvider';
import { SharedStyles } from "../../styles";
import { useThemes } from '../../providers/ThemeProvider';

export const SignIn: React.FC = ({ navigation }: any) => {

    const { signInUser } = useAuth();
    const { themes } = useThemes();
    const sharedStyles = SharedStyles(themes);

    const onSubmit = () => {
        signInUser({
            username: "durgesh",
            firstname: "Durgesh",
            lastname: "Tambe",
            picture: "https://i.picsum.photos/id/1005/5760/3840.jpg?hmac=2acSJCOwz9q_dKtDZdSB-OIK1HUcwBeXco_RMMTUgfY"
        });
    }

    return (
        <View style={{ flex: 1, marginHorizontal: 15 }}>
            <Text>Sign In</Text>
            <TouchableOpacity style={sharedStyles.button} onPress={() => onSubmit()}>
                <Text style={sharedStyles.btnText}>Submit</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("shared-signUp")}>
                <Text>New User?</Text>
            </TouchableOpacity>
        </View>
    )
}