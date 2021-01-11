import React from 'react';
import { Text, View, TouchableOpacity, Share } from 'react-native';
import { useThemes } from '../../../shared/providers/ThemeProvider';
import { SharedStyles } from '../../../shared/styles';

export const Product: React.FC = ({ navigation }: any) => {

    const { themes } = useThemes();
    const sharedStyles = SharedStyles(themes);

    const onProduct = () => {
        navigation.navigate("home-productDetails");
    }

    return (
        <View style={{ flex: 1, marginHorizontal: 15 }}>
            <Text>Product List:</Text>
            <TouchableOpacity style={sharedStyles.button} onPress={() => onProduct()}>
                <Text style={sharedStyles.btnText}>Product</Text>
            </TouchableOpacity>
        </View>
    )
}