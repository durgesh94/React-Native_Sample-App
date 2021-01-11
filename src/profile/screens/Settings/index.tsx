import React, { useEffect } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { useThemes } from '../../../shared/providers/ThemeProvider';
import { SharedStyles } from '../../../shared/styles';
import { useLocalization } from '../../../shared/providers/LocalizationProvider';

export const Settings: React.FC = ({ navigation }: any) => {

    const { themes, updateTheme } = useThemes();
    const sharedStyles = SharedStyles(themes);
    const { strings } = useLocalization();

    const onChangeTheme = () => {
        console.log('them');
    }

    const onChangeLangauge = async () => {
        await updateTheme('dark');
    }

    return (
        <View style={{ flex: 1, marginTop: 50, marginHorizontal: 15 }}>
            <View style={{ marginTop: 10 }}>
                <TouchableOpacity style={sharedStyles.button} onPress={() => onChangeTheme()}>
                    <Text style={sharedStyles.btnText}>Change Theme</Text>
                </TouchableOpacity>
            </View>
            <View style={{ marginTop: 10 }}>
                <TouchableOpacity style={sharedStyles.button} onPress={() => onChangeLangauge()}>
                    <Text style={sharedStyles.btnText}>Change Langauge</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}