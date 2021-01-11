import React, { useEffect } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { useThemes } from '../../../shared/providers/ThemeProvider';
import { SharedStyles } from '../../../shared/styles';
import { useHome } from '../../providers/HomeProvider';

export const Home: React.FC = ({ navigation }: any) => {

    const { themes } = useThemes();
    const sharedStyles = SharedStyles(themes);
    const { setLoading } = useHome();

    const onProduct = () => {
        navigation.navigate("home-product", { name: "Fruits" });
    }

    return (
        <View style={{ flex: 1, marginTop: 50, marginHorizontal: 15 }}>
            <View style={{ marginTop: 10 }}>
                <Text>New Products:</Text>
                <TouchableOpacity style={sharedStyles.button} onPress={() => onProduct()}>
                    <Text style={sharedStyles.btnText}>Product</Text>
                </TouchableOpacity>
            </View>
            <View style={{ marginTop: 10 }}>
                <Text>Trending Products:</Text>
                <TouchableOpacity style={sharedStyles.button} onPress={() => onProduct()}>
                    <Text style={sharedStyles.btnText}>Product</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}