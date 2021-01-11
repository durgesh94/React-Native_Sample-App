import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { useThemes } from '../../providers/ThemeProvider';
import { SharedStyles } from "../../styles";

export const SignUp: React.FC = ({ navigation }: any) => {

    const { themes } = useThemes();
    const sharedStyles = SharedStyles(themes);

    const onSubmit = () => {
        navigation.navigate('shared-signIn');
    }

    return (
        <View style={{ flex: 1, marginHorizontal: 15 }}>
            <Text>Sign Up</Text>
            <TouchableOpacity style={sharedStyles.button} onPress={() => onSubmit()}>
                <Text style={sharedStyles.btnText}>Submit</Text>
            </TouchableOpacity>
        </View>
    )
}