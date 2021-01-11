import React, { createContext, useContext, useState, useEffect } from "react";
import { ActivityIndicator } from "react-native";

export interface IProfile {
    loading: boolean;
    setLoading(isShow: boolean): any;
}

const ProfileContext = createContext({});

export const useProfile = () => useContext<IProfile>(ProfileContext as any);

export const ProfileProvider: React.FC = ({ children }) => {

    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
    }, []);

    return (
        <ProfileContext.Provider
            value={{
                loading,
                setLoading,
            }}
        >
            {children}
            {loading && <ActivityIndicator size="large" />}
        </ProfileContext.Provider>
    );
};
