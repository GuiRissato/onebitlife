import { RouteProp, useRoute } from '@react-navigation/native';
import React, { useState } from 'react';
import {Image,View,StyleSheet} from "react-native";
import { SelectList } from 'react-native-dropdown-select-list';
import { RootStackParamsList } from '../../../routes/allpages';

type RouteHabitScreenProps = RouteProp<RootStackParamsList,'SelectFrequency'>

export default function SelectFrequency (){
  const route = useRoute<RouteHabitScreenProps>();
  let {habit,habitFrequency,InputFrequency} = route.params
  const [selected, setSelected] = useState(
    habitFrequency ? habitFrequency : "-"
  )  
    const data = [
      {key:"Diario", value:"Diario"},
      {key:"Semanal", value:"Semanal"},
      {key:"Mensal", value:"Mensal"},
    ]

    const handleInputFrequency = (input:string) =>{
      InputFrequency = input
    }
  return (
    <View style={{marginBottom:20}}>
      <SelectList
        data={data}
        search={false}
        setSelected={setSelected}
        onSelect={()=>{handleInputFrequency}}
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