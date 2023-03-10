import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppExplanation from '../pages/appExplanation';
import Home from '../pages/Home';
import HabitPage from '../pages/HabitPage';

const Stack = createNativeStackNavigator();

export default function HomePage(){
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator
        screenOptions={{
          headerShown:false,
        }}
      >
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='HabitPage' component={HabitPage}/>
        <Stack.Screen name='AppExplanation' component={AppExplanation}/>
      </Stack.Navigator>

    </NavigationContainer>
  )
}
