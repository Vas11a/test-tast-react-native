import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Image, ScrollView, ActivityIndicator, RefreshControl, TouchableOpacity } from 'react-native';
import { useAppSelector, useAppDispatch } from '../hooks';
import { fetchData } from '../store/asyncFunctions';
import { Elem } from '../types';

export default function Home({ navigation }: any) {
    const dispatch = useAppDispatch();
    const data = useAppSelector((state) => state.main.imgsList);
    const [loading, setLoading] = useState(false);
    const [refreshing, setRefreshing] = useState(false);

    useEffect(() => {
        setLoading(true);
        dispatch(fetchData())
            .finally(() => setLoading(false));
    }, []);

    const onRefresh = () => {
        setRefreshing(true);
        dispatch(fetchData())
            .finally(() => setRefreshing(false));
    };

    return (
        <ScrollView
            style={styles.container}
            refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        >
            <View style={{ paddingBottom: 30 }}>
                {loading && <ActivityIndicator size="large" color="#0000ff" />}
                {
                    data.map((item: Elem, idx: number) => {
                        return (
                            <View key={idx} style={styles.imgContainer} >
                                <TouchableOpacity onPress={() => navigation.navigate('Img', { url: item.url })}>
                                <Image
                                    style={styles.img}
                                    source={{ uri: item.url }}
                                />
                                </TouchableOpacity>
                                <Text style={styles.description} >{item.description}</Text>
                            </View>
                        )
                    })
                }
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        padding: 20,
        paddingTop: 20,
        backgroundColor: 'white',
        marginTop: 38
    },
    imgContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20,
        marginBottom: 30
    },
    img: {
        width: 70,
        height: 70,
        borderRadius: 10
    },
    description: {
        fontSize: 16,
        maxWidth: 200
    },
});
