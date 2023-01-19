import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AllPages from "./allpages";
import HomePage from './HomePage';

export default function Routes(){
   const [showHome, setShowHome] = useState<boolean>(false); 
   return(
     <NavigationContainer independent={true}>
        <>
         {showHome == true ? <HomePage/> : <AllPages/>}
        </>
     </NavigationContainer> 
    ) 
    
}