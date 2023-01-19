import React, { useMemo, useState } from 'react';
import {Image,View,StyleSheet} from "react-native";
import { SelectList } from 'react-native-dropdown-select-list';
import { Habit } from '../../../pages/Home';

interface propsSelectFrequency{
  habit:Habit,
  frequencyInput: (s:string) => void
}

export default function SelectFrequency (props:propsSelectFrequency){

  const [selected, setSelected] = useState(
    props.habit?.habitFrequency ? props.habit?.habitFrequency : "-"
  )  
    const data = [
      {key:"Diario", value:"Diário"},
      {key:"Semanal", value:"Semanal"},
      {key:"Mensal", value:"Mensal"},
    ]
  
  return (
    <View style={{marginBottom:20}}>
      <SelectList
        data={data}
        search={false}
        setSelected={setSelected}
        onSelect={()=>{props.frequencyInput(selected)}}
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

    </View>
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