import { StyleSheet, Text, View, SafeAreaView, ScrollView, Image } from 'react-native';
import Colors from '../constants/Colors';
import CbButton from '../components/CbButton';

import { WatchlistState } from '../store/reducers/watchlist';
import { useSelector, useDispatch } from 'react-redux';
import * as watchlistActions from '../store/actions/watchlist';
import { useEffect } from 'react';

export default function App() {
    const dispatch = useDispatch();

    const loadData = () => {
        try {
            dispatch(watchlistActions.fetchCoinData());
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        loadData();
    }, []);
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={{ alignItems: 'center' }}>
                <Image style={styles.image} source={{ uri: 'https://i.imgur.com/9EEaSaS.png' }} />
                <Text style={styles.title}>Welcome to Coinbase!</Text>
                <Text style={styles.subTitle}>Make your first investment today</Text>
                <CbButton title="Get Started" />
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: '#fff'
    },
    image: {
        height: 250,
        width: 150,
        marginTop: 40
    },
    title: {
        fontSize: 21,
        fontWeight: '600',
        marginBottom: 8,
        letterSpacing: 0.5
    },
    subTitle: {
        fontSize: 17,
        marginBottom: 24,
        color: Colors.subtitle
    }
});
