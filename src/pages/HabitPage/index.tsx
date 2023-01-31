import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import React, {useRef, useState} from 'react';
import { Image, ScrollView, StyleSheet, TouchableOpacity, View, Text, Alert } from 'react-native';
import { RootStackParamsList } from '../../routes/allpages';
import SelectHabit from '../../components/HabitPage/SelectHabit';
import SelectFrequency from '../../components/HabitPage/SelectFrequency';
import Notification from '../../components/HabitPage/Notification';
import DateTimePickerElement from '../../components/HabitPage/DateTimePicker';
import DefaultButton from '../../components/common/DefaultButton';
import UpdateExcludeButtons from '../../components/HabitPage/UpdateExcludeButtons';

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

  const habitCreated = new Date();
  const formatDate = `${habitCreated.getFullYear()}-${habitCreated.getMonth()}-${habitCreated.getDate()}`

  const [notification,setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();

  function handleCreateHabit(){
    if(habitInput == undefined || habitFrequency == undefined){
      Alert.alert("Você precisa selecionar um hábito e a frequência para continuar!")
    }else if (
      habitNotification == true &&
      habitFrequency == "Diario" &&
      timeNotification == undefined
    ){
      Alert.alert("Você precisa dizer o horário da notificação!");
    }else if (
      habitNotification == true &&
      habitFrequency == "Diario" &&
      dayNotification == undefined &&
      timeNotification == undefined
    ){
      Alert.alert("Você precisa dizer a frequência e o horário da notificação!");
    }else{
      if(habitNotification){
        // notification service passando os parametros
      }
    }

    // criação do habit service para salvar os habitos
  }

  function handleUpdateHabit(){

  }

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
             {create === false ? (
              <UpdateExcludeButtons
                handleUpdate={handleUpdateHabit}
                habitArea={habit?.habitArea}
                habitInput={habitInput}
              />
            ) : (
              <View style={styles.configButton}>
                <DefaultButton
                  buttonText={"Criar"}
                  handlePress={handleCreateHabit}
                  width={250}
                  height={50}
                />
              </View>
            )}
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
   },
   configButton: {
    alignItems: "center",
  },

}) 