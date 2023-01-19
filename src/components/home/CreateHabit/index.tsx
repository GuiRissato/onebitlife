import React from "react"
import { Text, ColorValue, StyleSheet, TouchableOpacity } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { StackNavigator } from "../../../routes/allpages";
import { Habit } from "../../../pages/Home";

interface propsCreateHabit{
  habitArea: string,
  borderColor: ColorValue,
  habit:Habit
}

export default function CreateHabit(props: propsCreateHabit){
  
  const navigation = useNavigation<StackNavigator>();
  
  const createHabit:Habit = {
    
      habitName: "",
      habitArea: props.habitArea,
      habitFrequency: undefined,
      habitTime: undefined,
      checkColor: ''
  }

  function handleCreate(){
   navigation.navigate("HabitPage",{create:true, habitArea:props.habitArea,habit:createHabit})
  }
  
  return(
    <TouchableOpacity
      activeOpacity={0.8}
      style={[styles.button, {borderColor: props.borderColor}]}
      onPress={handleCreate}
    >
      <Text style={styles.habitArea}>
        Adicionar meta {props.habitArea === "Mente" ? "da" : "do"} {props.habitArea}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button:{
    width:315,
    marginVertical:10,
    paddingVertical:10,
    paddingHorizontal:20,
    borderWidth:2,
    borderStyle:"dotted",
    borderColor:"white",
    borderRadius: 5,
    justifyContent:"center",
    alignItems: "center",
  },
  habitArea:{
    color:"white",
    fontSize: 16,
    fontWeight:"bold",
  }
})