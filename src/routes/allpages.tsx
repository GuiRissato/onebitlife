import React from 'react';
import { NavigationContainer, NavigationProp} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Start from "../pages/start";
import AppExplanation from '../pages/appExplanation';
import Home, { Habit } from '../pages/Home';
import HabitPage from '../pages/HabitPage';
import SelectHabit from '../pages/HabitPage/SelectHabit';

const Stack = createNativeStackNavigator();

export type StackNavigator = NavigationProp<RootStackParamsList>
export type RootStackParamsList = {
  
  Home: undefined,
  
  HabitPage: {
    create:boolean,
    habitArea: string
  },
  
  Start: undefined,
  
  AppExplanation: undefined,
  
  SelectHabit:{
    habit: Habit,
    habitInput: string,
  }
}

export default function AllPages(){

  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator
        screenOptions={{
          headerShown:false,
        }}
      >
        <Stack.Screen name='Start' component={Start}/>
        <Stack.Screen name='AppExplanation' component={AppExplanation}/>
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='HabitPage' component={HabitPage}/>
        <Stack.Screen name='SelectHabit' component={SelectHabit}/>
      </Stack.Navigator>

    </NavigationContainer>
  )
}
