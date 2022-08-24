import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Actions from '../screens/Actions';
import Home from '../screens/Home';
import News from '../screens/News';
import Portfolio from '../screens/Portfolio';
import Prices from '../screens/Prices';
import Settings from '../screens/Settings';

const TabBarNavigator = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <TabBarNavigator.Navigator>
            <TabBarNavigator.Screen name="Home" component={Home} />
            <TabBarNavigator.Screen name="Portfolio" component={Portfolio} />
            <TabBarNavigator.Screen name="Actions" component={Actions} />
            <TabBarNavigator.Screen name="Prices" component={Prices} />
            <TabBarNavigator.Screen name="Settings" component={Settings} />
        </TabBarNavigator.Navigator>
    );
};

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <TabNavigator />
        </NavigationContainer>
    );
};

export default AppNavigator;
