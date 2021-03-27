import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../source/screens/HomeScreen' ;
import SearchScreen from '../source/screens/SearchScreen';
import CarSelection from '../source/screens/CarSelection';



const HomeStack = createStackNavigator()

const Appnav = () => {

    return(
        <NavigationContainer>
            <HomeStack.Navigator>
            <HomeStack.Screen name = 'Home' component={HomeScreen} options={{header:()=>{return false}}} />
            <HomeStack.Screen name = 'Selection' component={CarSelection} options={{header:()=>{return false}}} />
            <HomeStack.Screen name = 'Search' component={SearchScreen} options={{header:()=>{return false}}}/>
            </HomeStack.Navigator>
        </NavigationContainer>
    )
}

export default Appnav