import React from "react"
import { Text, ColorValue, StyleSheet, TouchableOpacity } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { StackNavigator } from "../../../routes/allpages";

interface Habit{
  habitArea: string,
  borderColor: ColorValue,
}

export default function CreateHabit(habit: Habit){
  const navigation = useNavigation<StackNavigator>();

  function handleCreate(){
   navigation.navigate('HabitPage',{create:true, habitArea: habit.habitArea.toString()})
  }
return(
  <TouchableOpacity
    activeOpacity={0.8}
    style={[styles.button, {borderColor: habit.borderColor}]}
    onPress={handleCreate}
  >
    <Text style={styles.habitArea}>
      Adicionar meta {habit.habitArea === "Mente" ? "da" : "do"} {habit.habitArea}
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