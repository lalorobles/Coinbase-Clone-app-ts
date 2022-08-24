import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import * as Haptics from 'expo-haptics';
import { Ionicons } from '@expo/vector-icons';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import Colors from '../constants/Colors';

const TabBar = ({ state, navigation }: BottomTabBarProps) => {
    return <View></View>;
};

const styles = StyleSheet.create({
    tabBar: {
        flexDirection: 'row',
        height: 85,
        borderColor: 'white',
        borderTopColor: Colors.border,
        borderWidth: 1,
        justifyContent: 'space-evenly'
    },
    tabItem: {
        width: 60
    },
    tabBarText: {
        fontSize: 10,
        fontWeight: '700'
    },
    actionsButton: {
        width: 42,
        height: 42,
        backgroundColor: Colors.cbBlue,
        borderRadius: 21,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default TabBar;
