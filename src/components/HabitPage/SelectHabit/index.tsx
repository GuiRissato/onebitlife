import React, { useMemo, useState } from 'react'
import { Image, StyleSheet } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';
import {dataMind,dataMoney,dataBody,dataFun} from '../../../Database/HabitData';
import { Habit } from '../../../pages/Home';

interface propsSelectHabit{
  habit:Habit,
  habitInput: (s:string|undefined) => void
}

export default function SelectHabit(props:propsSelectHabit) {
  
  const [selected,setSelected] = useState(
   props.habit?.habitName ? props.habit?.habitName : "-"
  );

  const data:any = useMemo(()=>{
    if(props.habit?.habitArea == 'Mente'){
      return dataMind
    }
    if(props.habit?.habitArea == 'Financeiro'){
      return dataMoney
    }
    if(props.habit?.habitArea == 'Corpo'){
      return dataBody
    }
    if(props.habit?.habitArea == 'Humor'){
      return dataFun
    }
    props.habitInput(props.habit?.habitName ? props.habit?.habitName : undefined)
    
  },[props.habit?.habitArea])

  return(
    <>
      <SelectList
        setSelected={setSelected}
        data={data}
        search={false}
        onSelect={()=>{props.habitInput(selected)}}
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