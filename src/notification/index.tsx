import React from 'react';
import { View, Text } from "react-native";

export interface SharedModuleProps {
    styles?: any;
}

export const NotificationModule: React.FC<SharedModuleProps> = () => {

    return (
        <View style={{ margin: 50 }}>
            <Text>Notification Module</Text>
        </View>
    );
}