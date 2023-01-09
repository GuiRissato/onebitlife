import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
// da para deixar essa pagina mais simples, criar um componente para os textos
export default function ExplanationCard(){
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Através deste APP você vai consolidar {"\n"} 4 hábitos de áreas fundamentais:
      </Text>
      
      <View style={styles.explanationContainer}>
        <Image source={require("../../../assets/icons/educationIcon.png")}
        style={styles.icons}/>
        <Text style = {styles.description}>
          <Text style={styles.mind}> Mente: </Text>
            Hábiots para melhorar sua {"\n"} inteligência/sabedoria.
        </Text>
      </View>

      <View style={styles.explanationContainer}>
        <Image source={require("../../../assets/icons/moneyIcon.png")}
        style={styles.icons}/>
        <Text style = {styles.description}>
          <Text style={styles.money}> Financeiro: </Text>
            Hábiots para te ajudar com controle financeiro.
        </Text>
      </View>

      <View style={styles.explanationContainer}>
        <Image source={require("../../../assets/icons/bodyIcon.png")}
        style={styles.icons}/>
        <Text style = {styles.description}>
          <Text style={styles.body}> Corpo: </Text>
            Hábiots para te deixar mais {"\n"} saudável e forte.
        </Text>
      </View>

      <View style={styles.explanationContainer}>
        <Image source={require("../../../assets/icons/funIcon.png")}
        style={styles.icons}/>
        <Text style = {styles.description}>
          <Text style={styles.fun}> Humor: </Text>
            Hábiots para controlar o stress {"\n"} e aumentar a felicidade.
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#151515",
    width: 350,
    borderRadius:25,
    padding: 30,
  },
  title:{
    fontWeight:"bold",
    color:"white",
    textAlign: "center",
    fontSize:16,
  },
  explanationContainer:{
    flexDirection: "row",
    marginTop: 30,
  },
  icons: {
    width: 40,
    height: 40,
    marginRight:5,
  },
  mind:{
    color: "#90B7F3",
    fontWeight:"bold",
  },
  description:{
    color: "white", 
  },
  money:{
    color: "#85BB65",
    fontWeight:"bold",
  },
  body:{
    color: "#FF0044",
    fontWeight:"bold",
  },
  fun:{
    color: "#FE7F23",
    fontWeight:"bold",
  }

})
