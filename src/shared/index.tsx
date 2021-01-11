import React from 'react';
import { AuthProvider } from './providers/AuthProvider';
import { ProtectedRoute } from "./routes/ProtectedRoutes";
import { AppRoutes } from "./routes/AppRoutes";
import { ThemeProvider } from './providers/ThemeProvider';

export interface SharedModuleProps {
    styles?: any;
    appModules?: any;
}

export const SharedModule: React.FC<SharedModuleProps> = () => {
    return (
        <AuthProvider>
            <ThemeProvider>
                <ProtectedRoute>
                    <AppRoutes />
                </ProtectedRoute>
            </ThemeProvider>
        </AuthProvider>
    );
}