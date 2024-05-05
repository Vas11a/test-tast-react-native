import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Home from './Home'
import Img from './Img'

const Stack = createNativeStackNavigator()

export default function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{ title: 'Home',headerShown: false }}
                />
                <Stack.Screen
                    name="Img"
                    component={Img}
                    options={{ title: 'Img', headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
