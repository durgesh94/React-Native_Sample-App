import React, { createContext, useContext, useState } from 'react';
import i18n from 'i18n-js';
import * as Localization from 'expo-localization';
// Import all locales
import en from './locales/en.json';
import he from './locales/he.json';
import hi from './locales/hi.json';
import fr from './locales/fr.json';

const LocalizationContext = createContext({});

export interface ILocalizationContext {
    strings(name: string): any;
    updateLangauge(type: string): any;
}

export const useLocalization = () => useContext<ILocalizationContext>(LocalizationContext as any);

export const LocalizationProvider: React.FC = ({ children }) => {

    const [locale, setLocale] = useState(Localization.locale);

    // Define the supported translations
    i18n.translations = {
        en,
        he,
        hi,
        fr
    };

    // Set the locale once at the beginning of your app.
    i18n.locale = locale;//Localization.locale;
    // When a value is missing from a language it'll fallback to another language with the key present.
    i18n.fallbacks = true;

    const strings = (name: string) => {
        return i18n.t(name);
    };

    const updateLangauge = () => {

    }

    return (
        <LocalizationContext.Provider value={{ strings, updateLangauge }}>
            {children}
        </LocalizationContext.Provider>
    );

}