import React, { createContext, useContext, useState } from 'react';

const TabContext = createContext({});

export interface ITabContext {
    showBottomTabBar: boolean;
    setShowBottomTabBar(flag: boolean): any;
}

export const useTab = () => useContext<ITabContext>(TabContext as any);

export const TabProvider: React.FC = ({ children }) => {

    const [showBottomTabBar, setShowBottomTabBar] = useState<boolean>(false);

    return (
        <TabContext.Provider value={{ showBottomTabBar, setShowBottomTabBar }}>
            {children}
        </TabContext.Provider>
    );
}