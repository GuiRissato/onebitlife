import { useNavigation } from '@react-navigation/native'
import React, { useMemo, useState } from 'react'
import { Image, StyleSheet } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';
import {dataMind,dataMoney,dataBody,dataFun} from '../../../components/Database/HabitData';

import { Habit } from '../../Home';

export default function SelectHabit(habit:Habit) {
  
  const navigation = useNavigation();
  
  
  const [selected,setSelected] = useState(
    habit?.habitArea ? habit?.habitArea : "-" 
  );

  console.log(habit?.habitArea)

  const data = useMemo(()=>{
    if(habit?.habitArea == 'Mente'){
      return dataMind
    }
    if(habit?.habitArea == 'Financeiro'){
      return dataMoney
    }
    if(habit?.habitArea == 'Corpo'){
      return dataBody
    }
      return dataFun
  },[habit?.habitArea])

  return(
    <>
      <SelectList
        setSelected={setSelected}
        data={data}
        search={false}
        onSelect={()=>{}}
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