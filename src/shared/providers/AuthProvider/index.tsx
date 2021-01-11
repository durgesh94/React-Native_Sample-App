import React, { createContext, useContext, useState, useEffect } from 'react';
import { AsyncStorage, ActivityIndicator } from 'react-native';
import { User } from "../../models";
import { getUserInfo } from "./Auth.services";
import Toast from "react-native-simple-toast";

export interface IUseAuth {
    isSignedIn: boolean;
    init: boolean;
    loading: boolean;
    user: any | null;
    token: string;
    setLoading(flag: boolean): any;
    setStatus(status: number | null): any;
    signInUser(userDetails: any): Promise<any>;
    OTPVerification(userDetails: any): Promise<any>;
    signUpUser(userDetails: any): Promise<boolean>;
    signOut(): Promise<boolean>;
}

const AuthContext = createContext({});

export const useAuth = () => useContext<IUseAuth>(AuthContext as any);

export const AuthProvider: React.FC = ({ children }) => {

    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [init, setInit] = useState<boolean>(false);
    const [token, setToken] = useState('');

    useEffect(() => {
        // AsyncStorage.clear();
        AsyncStorage.getItem("token").then((response: any) => {
            if (response !== null) {
                getMe();
            } else {
                setUser(null);
                setInit(true);
            }
        });
        const getMe = async () => {
            const user = getUserInfo();
            setUser(user);
            setInit(true);
            // await getUserInfo().then((data: User) => {
            //     setUser(data)
            // }).catch((error: any) => {
            //     Toast.show(error.message, Toast.LONG);
            // }).finally(() => {
            //     setInit(true);
            // });
        }
    }, [user]);

    const signInUser = async (userDetails: User): Promise<any> => {
        // return await postUserLogin(userDetails);
        setUser(userDetails);
        console.log(user);
        AsyncStorage.setItem('token', 'token');
    }

    const OTPVerification = async (userDetails: any): Promise<any> => {

    }

    const signUpUser = async (userDetails: any): Promise<any> => {

    }

    const signOut = async (): Promise<any> => {
        await AsyncStorage.clear();
        await AsyncStorage.removeItem('token');
    }

    return (
        <AuthContext.Provider value={{
            isSignedIn: !!user,
            loading,
            init,
            user,
            token,
            setLoading,
            signInUser,
            OTPVerification,
            signUpUser,
            signOut,
        }}>
            {children}
            {loading && <ActivityIndicator size="large" color="#00ff00" />}
        </AuthContext.Provider>
    );
}
