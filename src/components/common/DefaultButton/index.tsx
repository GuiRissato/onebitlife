import React from 'react';
import { StyleSheet, Text,TouchableOpacity } from 'react-native';

interface defaultButton {
  buttonText: string,
  handlePress: any | undefined,
  width: number,
  height:number
}

export default function DefaultButton(defaultButton:defaultButton){
  const {buttonText,handlePress,width,height} = defaultButton
  return(
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={handlePress}
      style = {[styles.button, {width: width, height:height}]}
    >
      <Text style={styles.buttonText}>{buttonText}</Text>

    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    alignItems:"center",
    justifyContent:"center",
    borderWidth: 1,
    borderColor: "#FFFFFF",
    borderRadius: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight:'bold',
    fontSize: 20,

  }
})