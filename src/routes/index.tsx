import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '../screens/Home';
import { ListCharacters } from '../screens/ListCharacters';
import { DetailsCharacter } from '../screens/DetailsCharacter';

const { Navigator, Screen } = createStackNavigator();

export function Routes() {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown: false }}>
                <Screen
                    name="Home"
                    component={Home}
                />

                <Screen
                    name="ListCharacters"
                    component={ListCharacters}
                />

                <Screen
                    name="DetailsCharacter"
                    component={DetailsCharacter}
                />
            </Navigator>
        </NavigationContainer>
    )
}