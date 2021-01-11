import React, { createContext, useContext, useState, useEffect } from "react";
import { ActivityIndicator } from "react-native";
import { getProduct } from "./Home.services";

export interface IHome {
    loading: boolean;
    setLoading(isShow: boolean): any;
}

const HomeContext = createContext({});

export const useHome = () => useContext<IHome>(HomeContext as any);

export const HomeProvider: React.FC = ({ children }) => {

    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
    }, []);

    return (
        <HomeContext.Provider
            value={{
                loading,
                setLoading,
            }}
        >
            {children}
            {loading && <ActivityIndicator size="large" />}
        </HomeContext.Provider>
    );
};
