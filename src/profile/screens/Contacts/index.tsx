import React, { useEffect } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

export const Contacts: React.FC = ({ navigation }: any) => {

    return (
        <View style={{ flex: 1, marginTop: 10, marginHorizontal: 15 }}>
            <View style={{ marginTop: 10 }}>
                <Text>Contact Details</Text>
            </View>
        </View>
    )
}