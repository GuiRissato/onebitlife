import { RouteProp, useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Switch } from 'react-native';
import { RootStackParamsList } from '../../../routes/allpages';


type RouteHabitScreenProps = RouteProp<RootStackParamsList,'Notification'>

export default function Notification(){

  const route = useRoute<RouteHabitScreenProps>();
  const [notificationToggle,setNotificationToggle] = useState<boolean>();
  
  const toggleSwitch = () =>
  {
    setNotificationToggle((previousState)=>!previousState)
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
        value={notificationToggle}
      />
    </View>
    </>
  )
}

const styles = StyleSheet.create({
  container:{
    flexDirection: 'row',
    alignItems:'center',
    marginBottom:20,
  },
  title:{
    color:'white',
    fontSize:20,
    marginRight:10,
  },

})