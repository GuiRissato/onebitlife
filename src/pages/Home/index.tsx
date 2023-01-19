import { useNavigation } from "@react-navigation/native";
import React, {useState,useEffect} from "react";
import { ColorValue, ScrollView, StyleSheet, Text, View } from "react-native";
import LifeStatus from "../../components/common/LifeStatus/index"
import CreateHabit from "../../components/home/CreateHabit";
import EditHabit from "../../components/home/EditHabit/index";
import StatusBar from "../../components/home/StatusBar";
import { StackNavigator } from "../../routes/allpages";

export interface Habit{
  habitName: string,
  habitTime: any,
  habitFrequency: any,
  habitArea: string,
  checkColor: ColorValue,
}
export default function Home(){
  
  const navigation = useNavigation<StackNavigator>();
  const [mindHabit, setMindHabit] = useState<Habit>();
  const [moneyHabit, setMoneyHabit] = useState<Habit>();
  const [bodyHabit, setBodyHabit] = useState<Habit>();
  const [funHabit, setFunHabit] = useState<Habit>();
  
  const handleNavExplanation = ()=>{
    navigation.navigate("AppExplanation")
  }

  return(
    <View style={styles.container}>
      <ScrollView>
        <View style={{alignItems:"center"}}>
          <Text style={styles.dailyChecks}> ❤ 20 dias - ✓ 80 checks </Text>          
            <LifeStatus/>
            <StatusBar/>
            {mindHabit ? 
            (<EditHabit 
              habit={mindHabit?.habitName} 
              frequency={`${mindHabit?.habitTime} - ${mindHabit?.habitFrequency} `} 
              habitArea={mindHabit?.habitArea} 
              checkColor={"#90B7F3"}
            />) : (<CreateHabit habitArea={"Mente"} borderColor={"#90B7F3"}/>)}
            
            {moneyHabit ? 
            (<EditHabit 
              habit={moneyHabit?.habitName}
              frequency={`${moneyHabit?.habitTime} - ${moneyHabit?.habitFrequency} `}
              habitArea={moneyHabit?.habitArea}
              checkColor={"#85BB65"}
            />) : (<CreateHabit habitArea={"Financeiro"} borderColor={"#85BB65"}/>)}
            
            {bodyHabit ? 
            (<EditHabit 
              habit={bodyHabit?.habitName}
              frequency={`${bodyHabit?.habitTime} - ${bodyHabit?.habitFrequency} `}
              habitArea={bodyHabit?.habitArea}
              checkColor={"#85BB65"}
            />) : (<CreateHabit habitArea={"Corpo"} borderColor={"#FF0044"}/>)}

            {funHabit ? 
            (<EditHabit 
              habit={funHabit?.habitName}
              frequency={`${funHabit?.habitTime} - ${funHabit?.habitFrequency} `}
              habitArea={funHabit?.habitArea}
              checkColor={"#85BB65"}
            />) : (<CreateHabit habitArea={"Humor"} borderColor={"#FE7F23"}/>)}
        </View>
        <Text
          style = {styles.explanationText}
          onPress = {() => {handleNavExplanation()}}
        >
          Ver explicação novamente
        </Text>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: "rgba(21,21,21,0.98)",
  },
  dailyChecks:{
    color:"white",
    fontWeight:"bold",
    textAlign:"center",
    fontSize: 18,
    marginTop:40,
  },
  explanationText:{
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign:"center",
    paddingTop: 15,
    paddingBottom: 25,
  }
})