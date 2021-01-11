import React from 'react';
import { HomeProvider } from "./providers/HomeProvider";
import { HomeRoutes } from './routes/HomeRoutes';

export interface HomeModuleProps {
    styles?: any;
}

export const HomeModule: React.FC<HomeModuleProps> = ({ children }: any) => {

    return (
        <HomeProvider>
            <HomeRoutes />
            {children}
        </HomeProvider>
    );
}