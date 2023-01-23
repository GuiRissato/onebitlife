import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import React, {useState} from 'react';
import { Image, ScrollView, StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import { RootStackParamsList } from '../../routes/allpages';
import SelectHabit from '../../components/HabitPage/SelectHabit';
import SelectFrequency from '../../components/HabitPage/SelectFrequency';
import Notification from '../../components/HabitPage/Notification';
import DateTimePickerElement from '../../components/HabitPage/DateTimePicker';
import { LocalNotification } from '../../services/LocalPushController';

type RouteHabitScreenProps = RouteProp<RootStackParamsList,'HabitPage'>

export default function HabitPage(){



  const navigation = useNavigation();
  const route = useRoute<RouteHabitScreenProps>();
  const {create,habitArea,habit} = route.params
  const [habitInput,setHabitInput] = useState<string|undefined>("");
  const [habitFrequency, setHabitFrequency] = useState<string>("")
  const [habitNotification, setHabitNotification] = useState<boolean>(false);
  const [dayNotification,setDayNotification] = useState<string>();
  const [timeNotification,setTimeNotification] = useState<string>();

  

  return(
    <View style={styles.container}>
      <ScrollView>
        <View>
          <TouchableOpacity
            style={styles.backPageBtn}
            onPress={() => navigation.goBack()}
          >
            <Image
              source={require("../../assets/icons/arrowBack.png")}
              style={styles.arrowBack}
            />

          </TouchableOpacity>
          {/* <TouchableOpacity
            style={styles.inputContainer}
            onPress={()=>{LocalNotification()}}
          >
            <Text>Notificação</Text>
          </TouchableOpacity> */}
          <View style={styles.mainContent}>
            <Text style={styles.title}>
              Configuração {"\n"} de hábito
            </Text>
            <Text style={styles.inputText}>Área</Text>
            <View style={styles.inputContainer}>
              <Text style={styles.area}>{habitArea}</Text>
            </View>
            <Text style={styles.inputText}>Hábito</Text>
            <SelectHabit habit={habit} habitInput={setHabitInput}/>
            <Text style={styles.inputText}>Frequência</Text>
            <SelectFrequency habit={habit} frequencyInput={setHabitFrequency}/>
            {habitFrequency == "Mensal" ? null :(
              <Notification notificationToggle={habitNotification} setNotificationToggle={setHabitNotification} />
            )}
            {habitNotification ? (habitFrequency == "Mensal" ? null :(
              <DateTimePickerElement 
                frequency={habitFrequency}
                dayNotification={dayNotification}
                timeNotification={timeNotification}
                setDayNotification={setDayNotification}
                setTimeNotification={setTimeNotification}/>
            )):null}
            
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
   container:{
    flex:1,
    backgroundColor: "rgba(21,21,21,0.98)",
   },
   backPageBtn:{
    width:40,
    height:40,
    margin:25,
   },
   arrowBack:{
    width:40,
    height:40,
   },
   mainContent:{
    width:250,
    alignSelf:"center",
   },
   title:{
    fontWeight:'bold',
    textAlign: 'center',
    color:"white",
    fontSize:30
   },
   inputText:{
    color:'white',
    fontSize: 16,
    marginTop:35,
    marginBottom:10,
    marginLeft:5,
   },
   inputContainer:{
    borderWidth: 1,
    borderColor: "#FFFFFF",
    borderRadius:10,
    paddingHorizontal: 20,
    paddingVertical:15,
   },
   area:{
    color:'#888888',
    fontSize:15,
   }

}) 