import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { useThemes } from '../../providers/ThemeProvider';
import { SharedStyles } from '../../styles';
import { dummyData } from "../../contants/dummyData";
// import { Carousel } from "../../components/Carousel";
import { Carousel } from "../../components/Carousel2";
import { images } from "../../contants/images";

export const Intro: React.FC = ({ navigation }: any) => {

    const { themes } = useThemes();
    const sharedStyles = SharedStyles(themes);

    return (
        <View style={{ flex: 1, marginTop: 50, marginHorizontal: 15 }}>
            <Text style={{ textAlign: "center", padding: 20 }}>Slider</Text>
            {/* <Carousel data={dummyData} /> */}
            <Carousel images={images} />
            <View style={{ flexDirection: "row" }}>
                <TouchableOpacity style={sharedStyles.button} onPress={() => navigation.navigate('shared-signIn')}>
                    <Text style={sharedStyles.btnText}>Sign In</Text>
                </TouchableOpacity>
                <TouchableOpacity style={sharedStyles.button} onPress={() => navigation.navigate('shared-signUp')}>
                    <Text style={sharedStyles.btnText}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}