import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ScrollView } from 'react-native';
import { useThemes } from '../../../shared/providers/ThemeProvider';
import { SharedStyles } from '../../../shared/styles';
import { useHome } from '../../providers/HomeProvider';
import { Header } from '../../../shared/components/Header';
import { Card } from '../../components/Card';
import { Product } from "../../models/Product";
import { TabBar } from "../../../shared/components/TabBar";

export const Home: React.FC = ({ navigation }: any) => {

    const { themes } = useThemes();
    const sharedStyles = SharedStyles(themes);
    const { setLoading } = useHome();

    const [data, setData] = useState<Product[]>([]);

    useEffect(() => {
        // api call for pro
        const pro: Product[] = [
            { id: 1, name: "prod-1-2-3", price: 100 },
            { id: 2, name: "prod-2-3-4", price: 150 },
            { id: 3, name: "prod-3-3-3", price: 90 },
            { id: 4, name: "prod-3-3-3", price: 90 },
            { id: 5, name: "prod-3-3-3", price: 90 },
            { id: 6, name: "prod-3-3-3", price: 90 },
            { id: 7, name: "prod-3-3-3", price: 90 },
        ];
        setData(pro);
    }, []);

    return (
        <View style={{ marginTop: 40, marginBottom: 50 }}>
            <TabBar navigation={navigation} />
            <ScrollView>
                <View style={{ flex: 1, marginTop: 0, marginHorizontal: 15 }}>
                    <Header />
                    {/* <View style={{ marginTop: 10 }}>
                        {data.map((element: Product, idx: number) =>
                            <Card navigation={navigation} data={element} key={idx} />
                        )}
                    </View> */}
                    <View style={{ backgroundColor: "white", borderRadius: 15, padding: 5, marginTop: 20 }}>
                        <View style={{ flexDirection: "row", margin: 10 }}>
                            <Text>Please Select:</Text>
                        </View>
                        <FlatList
                            numColumns={3}
                            data={data}
                            keyExtractor={(item) => item.name}
                            renderItem={({ item }) => (
                                <Card navigation={navigation} data={item} key={item.id} />
                            )}
                        />
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}