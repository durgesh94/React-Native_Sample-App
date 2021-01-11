import React from 'react';
import { ProfileProvider } from "./providers/ProfileProvider";
import { ProfileRoutes } from './routes/ProfileRoutes';

export interface HomeModuleProps {
    styles?: any;
}

export const ProfileModule: React.FC<HomeModuleProps> = ({ children }: any) => {

    return (
        <ProfileProvider>
            <ProfileRoutes />
            {children}
        </ProfileProvider>
    );
}