import React from "react";
import { ActivityIndicator } from "react-native";
import { AuthRoutes } from "../AuthRoutes";
import { useAuth } from "../../providers/AuthProvider";

export const ProtectedRoute: React.FC = ({ children }) => {

    const { init, isSignedIn } = useAuth();

    if (!init) return <ActivityIndicator />

    return (
        <React.Fragment>
            {!isSignedIn ? <AuthRoutes /> : children}
        </React.Fragment>)
}