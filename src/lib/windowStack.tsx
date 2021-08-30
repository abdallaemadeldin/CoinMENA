import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from 'src/screens/Splash/Splash';
import Home from 'src/screens/Home/Home';
import CountriesList from 'src/screens/CountriesList/CountriesList';

const Stack = createNativeStackNavigator();

export default () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Splash">
                <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false, animation: "slide_from_bottom" }} />
                <Stack.Screen name="Home" component={Home} options={{ headerShown: false, animation: "slide_from_bottom" }} />
                <Stack.Screen name="CountriesList" component={CountriesList} options={{
                    animation: "slide_from_bottom",
                    headerStyle: { backgroundColor: "#081e39" },
                    headerTintColor: "#fff",
                    headerBackTitle: '',
                }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}