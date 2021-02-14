import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useThemes } from '../../../shared/providers/ThemeProvider';
import { useAuth } from '../../../shared/providers/AuthProvider';
// import { SharedStyles } from '../../../shared/styles';

interface CardProps {
    navigation: any;
    data: any;
}

export const Card: React.FC<CardProps> = ({ navigation, ...props }: any) => {

    const { themes } = useThemes();
    const sharedStyles = SharedStyles(themes);
    const { user } = useAuth();

    const onProduct = (name: string) => {
        navigation.navigate("home-product", { name: name });
    }

    return (
        <View style={{ margin: 10, borderRadius: 15, borderColor: "grey", borderWidth: 1, backgroundColor: "white" }}>
            <TouchableOpacity style={sharedStyles.button} onPress={() => onProduct(props.data.name)}>
                <Image source={{ uri: user.picture }} style={sharedStyles.image} />
                <Text style={sharedStyles.btnText}>{props.data.name}</Text>
                <Text style={sharedStyles.btnText}>{props.data.price}</Text>
            </TouchableOpacity>
        </View>
    )
}

export const SharedStyles = (theme: any) => (
    StyleSheet.create({
        image: {
            resizeMode: 'cover',
            height: 70,
            width: 70,
        },
        button: {
            alignItems: 'center',
            padding: 10
        },
        btnText: {
            fontSize: 16,
            color: theme.orangeHeaderTitleTextColor
        },
    })
)