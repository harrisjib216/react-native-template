/**
 * react native imports
*/
import React from 'react';
import {
    Home,
} from "../views";


/**
 * routing imports
*/
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


/**
 * Router
 * Handle navigation and view props for the application
 *
 * Import views from views/index
 * Build view for each view
*/
function Router() {
    const Stack = createStackNavigator();

    return (
        /**
         *
        */
        <NavigationContainer>

            {/**
             * stack navigator
            */}
            <Stack.Navigator initialRouteName="Home">

                {/**
                 * screens and components
                */}
                <Stack.Screen name="Home" component={Home} />

            </Stack.Navigator>

        </NavigationContainer>
    );
};


// export
export default Router;
