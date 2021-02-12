import React from 'react';
import { Text, View } from 'react-native';
import { useThemes } from '../../providers/ThemeProvider';

export const Footer: React.FC = ({ navigation }: any) => {

    const { themes } = useThemes();

    return (
        <View style={{ marginTop: 10, alignItems: "center" }}>
            <Text>FOOTER</Text>
        </View>
    )
}