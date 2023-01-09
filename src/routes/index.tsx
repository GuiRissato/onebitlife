import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AllPages from "./allpages";

export default function Routes(){
  return(
     <NavigationContainer independent={true}>
        <AllPages/>
     </NavigationContainer> 
    ) 
    
}