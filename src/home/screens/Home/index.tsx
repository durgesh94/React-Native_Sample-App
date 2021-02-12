import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { useThemes } from '../../../shared/providers/ThemeProvider';
import { SharedStyles } from '../../../shared/styles';
import { useHome } from '../../providers/HomeProvider';
import { Header } from '../../../shared/components/Header';
import { Card } from '../../components/Card';
import { Product } from "../../models/Product";

export const Home: React.FC = ({ navigation }: any) => {

    const { themes } = useThemes();
    const sharedStyles = SharedStyles(themes);
    const { setLoading } = useHome();

    const [data, setData] = useState<Product[]>([]);

    useEffect(() => {
        // api call for p
        const p = [
            { name: "prod-1", price: 100 },
            { name: "prod-2", price: 150 },
            { name: "prod-3", price: 90 },
        ];
        setData(p);
    }, []);

    return (
        <View style={{ flex: 1, marginTop: 50, marginHorizontal: 15 }}>
            <Header />
            <View style={{ marginTop: 10 }}>
                {data.map((element: Product) =>
                    <Card navigation={navigation} data={element} />
                )}
            </View>
        </View>
    )
}