import React from 'react';
import { View, ScrollView, Image, Text, StyleSheet} from 'react-native';
import LifeStatus from '../../components/common/LifeStatus';
import DefaultButton from '../../components/common/DefaultButton/index';
import { useNavigation } from '@react-navigation/native';
import { StackNavigator } from '../../routes/allpages';


export default function Start(){

  const navigation = useNavigation<StackNavigator>();

  const handleNavAppExplanations = () => {
    navigation.navigate('AppExplanation');
  }

  return(
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator = {false}>
          <View style = {styles.alignText}>
            <Image
              style={styles.logo} 
              source = {require('../../assets/icons/logo3.png')}/>
            <LifeStatus/>
            <Text style={styles.description}>
              Vamos transformar sua vida {'\n'} em jogo, buscando sempre {'\n'} o melhor nível. 
            </Text>
            <DefaultButton buttonText={'Continuar '} handlePress={handleNavAppExplanations} width={250} height={50}/>
          </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: "rgba(21, 21, 21, 0.98)",
  },
  alignText: {
    alignItems: "center",
  },
  logo: {
    width: 300,
    height: 60,
    marginTop:60,
    marginBottom:20,
  },
  description:{
    color: "#FFFFFF",
    fontSize:20,
    textAlign: 'center',
    marginVertical:60,
  }
})