import React, { createContext, useContext, useState, useEffect } from 'react';
import { defaultTheme, darkTheme, lightTheme } from "./appThemes";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { THEME } from "../../contants/theme.enum";

const ThemeContext = createContext({});

export interface IThemeContext {
    themes: any;
    updateTheme(key: string): any;
    currentTheme: string;
}

export const useThemes = () => useContext<IThemeContext>(ThemeContext as any);

export const ThemeProvider: React.FC = ({ children }) => {

    const [themes, setThemes] = useState<any>(defaultTheme);
    const [currentTheme, setCurrentTheme] = useState<any>();

    const updateTheme = (key: string) => {
        console.log(key);
        switch (key) {
            case THEME.DARK:
                setThemes(darkTheme);
                setCurrentTheme(THEME.DARK);
                break;
            case THEME.LIGHT:
                setThemes(lightTheme);
                setCurrentTheme(THEME.LIGHT);
                break;
            default:
                setThemes(defaultTheme);
                break;
        }
    }

    const getTheme = async () => {
        try {
            const value = await AsyncStorage.getItem('currentTheme');
            if (value !== null) {
                updateTheme(value);
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getTheme()
    }, []);

    return (
        <ThemeContext.Provider value={{ themes, updateTheme, currentTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}