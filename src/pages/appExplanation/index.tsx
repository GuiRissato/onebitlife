import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, View, ScrollView, Text } from 'react-native';
import DefaultButton from '../../components/common/DefaultButton/index';
import ExplanationCard from '../../components/explanation/ExplanationCard';


export default function AppExplanation() {
  const navigation = useNavigation();
  const handleSetShowHome = () => {
    navigation.navigate('Home', {undefined});
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.imagesView}>
          <Text style = {styles.title}>
            Antes, deixa {"\n"} eu te explicar...
          </Text>
          <ExplanationCard/>
          <Text style={styles.descriptionCta}>
            Pronto(a) para subir de nível na vida?
          </Text>
          <Text style={styles.description}>
            Na Proxima tela você vai poder escolher {"\n"}seus 4 hábiots de forma individula.
          </Text>
          <DefaultButton buttonText={'Continuar'} handlePress={handleSetShowHome} width={250} height={50}/>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"rgba(21,21,21,0.98)",
  },
  imagesView: {
    alignItems:"center"
  },
  title:{
    fontSize: 30,
    fontWeight:"bold",
    color:"white",
    textAlign: "center",
    marginVertical:40,
  },
  descriptionCta:{
    color:"white",
    fontWeight: "bold",
    fontSize: 16,
    marginTop: 20,
    marginBottom:10,
  },
  description: {
    color:"white",
    textAlign:"center",
    marginBottom: 30
  }

})