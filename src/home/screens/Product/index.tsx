import React from 'react';
import { Text, View, TouchableOpacity, Share } from 'react-native';
import { useThemes } from '../../../shared/providers/ThemeProvider';
import { SharedStyles } from '../../../shared/styles';

export const Product: React.FC = ({ navigation }: any) => {

    const { themes } = useThemes();
    const sharedStyles = SharedStyles(themes);

    return (
        <View style={{ flex: 1, marginHorizontal: 15 }}>
            <Text>Product Details</Text>
        </View>
    )
}