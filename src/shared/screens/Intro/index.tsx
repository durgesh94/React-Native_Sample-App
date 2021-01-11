import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { useThemes } from '../../providers/ThemeProvider';
import { SharedStyles } from '../../styles';

export const Intro: React.FC = ({ navigation }: any) => {

    const { themes } = useThemes();
    const sharedStyles = SharedStyles(themes);

    const onGetStrated = () => {
        navigation.navigate('shared-signIn');
    }

    return (
        <View style={{ flex: 1, marginTop: 50, marginHorizontal: 15 }}>
            <Text>Intro</Text>
            <TouchableOpacity style={sharedStyles.button} onPress={() => onGetStrated()}>
                <Text style={sharedStyles.btnText}>Get Started</Text>
            </TouchableOpacity>
        </View>
    )
}