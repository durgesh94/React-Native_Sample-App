import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import { useThemes } from '../../providers/ThemeProvider';
import { useAuth } from '../../providers/AuthProvider';

export const Header: React.FC = ({ navigation }: any) => {

    const { themes } = useThemes();
    const { user } = useAuth();

    return (
        <View style={style.welcomeView}>
            <Text>Welcome to</Text>
            {/* <Image source={{ uri: user.picture }} style={style.image} /> */}
            <Image source={require('../../../../assets/brand.jpg')} style={style.image} />
        </View>
    )
}

const style = StyleSheet.create({
    image: {
        resizeMode: 'cover',
        height: 120,
        width: 250,
        borderRadius: 10
    },
    welcomeView: {
        marginTop: 10,
        padding: 10,
        alignItems: "center",
        backgroundColor: "white",
        borderRadius: 20
    }
})