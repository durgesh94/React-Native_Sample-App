import React, { useEffect } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useThemes } from '../../../shared/providers/ThemeProvider';
import { SharedStyles } from '../../../shared/styles';
import { useLocalization } from '../../../shared/providers/LocalizationProvider';
import { THEME } from "../../../shared/contants/theme.enum";

export const Settings: React.FC = ({ navigation }: any) => {

    const { themes, updateTheme, currentTheme } = useThemes();
    const sharedStyles = SharedStyles(themes);
    const { strings, updateLangauge } = useLocalization();

    const onChangeTheme = async () => {
        currentTheme == THEME.DARK ? await updateTheme(THEME.LIGHT) : await updateTheme(THEME.DARK)
    }

    const onChangeLangauge = async () => {
        await updateLangauge('hi');
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