import { RouteProp, useRoute } from '@react-navigation/native'
import React, { useMemo, useState } from 'react'
import { Image, StyleSheet } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';
import {dataMind,dataMoney,dataBody,dataFun} from '../../Database/HabitData';
import { RootStackParamsList } from '../../../routes/allpages';

type RouteHabitScreenProps = RouteProp<RootStackParamsList,'SelectHabit'>

export default function SelectHabit() {
  
  const route = useRoute<RouteHabitScreenProps>();
  let {habit,habitArea,InputHabit} = route.params  
  const [selected,setSelected] = useState(
   habit?.habitName ? habit?.habitName : "-"
  );

  
  const handleInputHabit = (input:string) =>{
    InputHabit = input
  }

  const data:any = useMemo(()=>{
    if(habitArea == 'Mente'){
      return dataMind
    }
    if(habitArea == 'Financeiro'){
      return dataMoney
    }
    if(habitArea == 'Corpo'){
      return dataBody
    }
    if(habitArea == 'Humor'){
      return dataFun
    }
    if(habit?.habitName){
     return InputHabit = habit?.habitName
    }
    return InputHabit = undefined
    
  },[habitArea])

  return(
    <>
      <SelectList
        setSelected={setSelected}
        data={data}
        search={false}
        onSelect={()=>{handleInputHabit(selected)}}
        placeholder={selected}
        boxStyles={styles.boxStyle}
        inputStyles={styles.inputStyle} 
        dropdownStyles={styles.dropdownStyle}
        dropdownItemStyles={styles.dropdownItemStyle}
        dropdownTextStyles={styles.dropdownTextStyle}
        arrowicon={
          <Image
            source={require("../../../assets/icons/arrowDropdown.png")}
            style={styles.arrow}
          />
        }
      />
        
      
    </>
  )
}

const styles = StyleSheet.create({
  boxStyle: {
    borderWidth: 1,
    borderColor:"white",
    paddingHorizontal:20,
    paddingVertical:15,
  },
  inputStyle: {
    color:"white",
  },
  dropdownStyle:{
    borderWidth:0,
  },
  dropdownItemStyle:{
    borderWidth:1,
    borderColor:"#BBBBBB",
    borderRadius:10,
    marginBottom:15,
  },
  dropdownTextStyle:{
    color: "#BBBBBB"
  },
  arrow:{
    width:20,
    height:20
  }

})