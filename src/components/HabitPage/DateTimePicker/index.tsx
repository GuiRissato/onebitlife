import React, { useEffect, useMemo, useState } from 'react'
import { TouchableOpacity, View, Text, StyleSheet, Platform, Image } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';
import DateTimePicker from '@react-native-community/datetimepicker';

interface propsDateTimePicker{
  frequency: string | undefined,
  dayNotification: string | undefined,
  timeNotification: string | undefined,
  setDayNotification: (s:string) => void,
  setTimeNotification:(s:string) => void,
}

export default function DateTimePickerElement( props:propsDateTimePicker ){

  
  const [date,setDate] = useState<Date|undefined>(new Date())
  const [show, setShow] = useState<boolean>(false)
  const [selected,setSelected] = useState<string>("-")
  const [notificationDate,setNotificationDate] = useState<string>()
  const [notificationTime,setNotificationTime] = useState<string>()

  const changeFrequency = ()=>{
    let dateNotification
    if(props.frequency == 'Semanal'){
      dateNotification = selected
    }
    if(props.frequency == 'Diario'){
      dateNotification = selected
    }
    setNotificationDate(dateNotification)
    setShow(false)
  }

  const onChange = (_event, selectedDate:Date|any) => {
    const currentDate:any = selectedDate;
    setShow(false);
    setShow(Platform.OS == "ios");
    setDate(currentDate);
    let tempDate:any = new Date(currentDate);
    const notificationHour = tempDate.getHours().toString().padStart(2, "0");
    const notificationMin = tempDate.getMinutes().toString().padStart(2, "0");
   
    const timeNotification = `${notificationHour}:${notificationMin}`;
    setNotificationTime(timeNotification);

    setShow(false)
  };
  
  const showMode = ()=>{
    setShow(true)
  }

  const data = [
    {key: 'Domingo', value:'Dom'},
    {key: 'Segunda', value:'Seg'},
    {key: 'Terça', value:'Ter'},
    {key: 'Quarta', value:'Qua'},
    {key: 'Quinta', value:'Qui'},
    {key: 'Sexta', value:'Sex'},
    {key: 'Sábado', value:'Sab'}
  ]

  return(
    <>
      <View>
        <TouchableOpacity style={styles.button} onPress={()=> showMode()}>
          <Text style={styles.buttonText}>Selecionar a hora</Text>
        </TouchableOpacity>

        <View style={styles.textContainer}>
          { props.frequency == 'Diario'?(
            <Text style={styles.notificationText}>Dia do Hábito: Diário</Text>
          ):null
          }
          { props.frequency == 'Semanal'?(
              <SelectList
                  data={data}
                  search={false}
                  setSelected={setSelected}
                  onSelect={()=>{
                    changeFrequency();
                  }}
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
          ):null}
         {props.frequency == "Semanal"?(
           <Text style={styles.notificationText}>Dia do Hábito: {notificationDate} </Text>
         ):null} 
          
          <Text style={styles.notificationText}>Horário do Hábito: {notificationTime} </Text>
        </View>
        <>
          {show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={new Date()}
              mode={'time'}
              is24Hour={true}
              onChange={onChange}
          />
          )}
        </>
      </View>
    </>
  )

}

const styles = StyleSheet.create({
  button:{
    borderWidth:1,
    borderColor:"white",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 5,
    justifyContent:"center",
    alignItems:"center",
    marginTop:15,
  },
  buttonText:{
    color:"white",
    fontSize:18,
    fontWeight:"bold",
  },
  textContainer:{
    marginVertical:20,
  },
  notificationText:{
    fontSize:18,
    color:"white",
  },
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