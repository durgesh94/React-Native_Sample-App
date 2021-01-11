import React from 'react';
import { View, Text } from "react-native";

export interface SharedModuleProps {
    styles?: any;
}

export const FavoriteModule: React.FC<SharedModuleProps> = () => {

    return (
        <View style={{ margin: 50 }}>
            <Text>Favorite Module</Text>
        </View>
    );
}