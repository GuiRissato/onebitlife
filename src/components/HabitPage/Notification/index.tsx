import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Switch } from "react-native-gesture-handler";

interface propsNotification{
  notificationToggle: boolean,
  setNotificationToggle: (b:boolean) => void,
}

export default function Notification(notification:propsNotification){
  
  const toggleSwitch = () =>
  {
    notification.setNotificationToggle(!notification.notificationToggle)
  }
  
  return(
    <>
    <View style={styles.container}>
      <Text style={styles.title}>Notificação</Text>
      <Switch
        trackColor={{false: "#FF0044", true: "#2DBE56"}}
        thumbColor={"FFFFFF"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={notification.notificationToggle}
      />
    </View>
    </>
  )
}

const styles = StyleSheet.create({
  container:{
    flexDirection: 'row',
    alignItems:'center',
    marginTop:15,
    marginBottom:20,
  },
  title:{
    color:'white',
    fontSize:16,
    marginRight:10,
    marginLeft:5,
  },

})