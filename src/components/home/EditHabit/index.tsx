import React from 'react'
import { ColorValue, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

interface EditHabit{
  habit: string,
  frequency: string,
  habitArea: string,
  checkColor: ColorValue
}

export default function EditHabit(editHabit: EditHabit){
function handleEdit(){
  // console.log("botao editar clicado")
}
function handleCheck(){
  // console.log("botao de check do", editHabit.habitArea)
}

  return(

    <TouchableOpacity
      activeOpacity={0.9}
      style={styles.button}
      onPress={handleEdit}
    >
      <View style={styles.habitText}>
        <Text style={styles.habitTitle}>{editHabit.habit}</Text>
        <Text style={styles.habitFrequency}>{editHabit.frequency}</Text>
      </View>
      <TouchableOpacity
        style={[styles.check, {borderColor:editHabit.checkColor}]}
        onPress={handleCheck}
      >
      </TouchableOpacity>
    </TouchableOpacity>
  )

}

const styles = StyleSheet.create({
  button:{
    backgroundColor:"#151515",
    borderRadius:5,
    width:320,
    marginVertical:10,
    paddingVertical: 10,
    paddingHorizontal:20,
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between",
  },
  habitText:{

  },
  habitTitle:{
    color:"white",
    fontWeight:"bold",
  },
  habitFrequency:{
    color: "white",
  },
  check:{
    width:20,
    height:20,
    borderWidth: 1,
    borderRadius:10,
  },
})