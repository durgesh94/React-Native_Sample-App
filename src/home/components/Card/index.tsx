import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { useThemes } from '../../../shared/providers/ThemeProvider';
import { SharedStyles } from '../../../shared/styles';

interface CardProps {
    navigation: any;
    data: any;
}

export const Card: React.FC<CardProps> = ({ navigation, ...props }: any) => {

    const { themes } = useThemes();
    const sharedStyles = SharedStyles(themes);

    const onProduct = (name: string) => {
        navigation.navigate("home-product", { name: name });
    }

    return (
        <View style={{ marginTop: 10 }}>
            <TouchableOpacity style={sharedStyles.button} onPress={() => onProduct(props.data.name)}>
                <Text style={sharedStyles.btnText}>{props.data.name}</Text>
                <Text style={sharedStyles.btnText}>{props.data.price}</Text>
            </TouchableOpacity>
        </View>
    )
}