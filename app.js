import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AuthScreen from './components/AuthScreen';
import BookListScreen from './components/BookListScreen';
import LoanTicketScreen from './components/LoanTicketScreen';

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Auth">
                <Stack.Screen name="Auth" component={AuthScreen} />
                <Stack.Screen name="BookList" component={BookListScreen} />
                <Stack.Screen name="LoanTicket" component={LoanTicketScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
