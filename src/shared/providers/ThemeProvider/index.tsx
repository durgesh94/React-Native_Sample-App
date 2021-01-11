import React, { createContext, useContext, useState } from 'react';
import { defaultTheme, darkTheme, lightTheme } from "./appThemes";

const ThemeContext = createContext({});

export interface IThemeContext {
    themes: any;
    updateTheme(key: string): any;
}

export const useThemes = () => useContext<IThemeContext>(ThemeContext as any);

export const ThemeProvider: React.FC = ({ children }) => {

    const [themes, setThemes] = useState(defaultTheme);

    const updateTheme = (key: string) => {
        console.log(key);
        switch (key) {
            case "dark":
                setThemes(darkTheme);
                break;
            case 'light':
                setThemes(lightTheme);
                break;
            default:
                setThemes(defaultTheme);
                break;
        }
    }

    return (
        <ThemeContext.Provider value={{ themes, updateTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}