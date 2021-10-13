// Importações React
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import {Icon} from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppLoading from 'expo-app-loading';

// Importações páginas
// import ComponenteImagem from './src/pages/Tela-Inicial/components/componenteImagem';
import Home from './src/pages/Tela-Inicial';
import Login from './src/pages/Login';
import Cadastro from './src/pages/Cadastro';
import esqueceuSenha from './src/pages/esqueceSenha';

// Importações de fontes

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" >
        <Stack.Screen name="Home" component={Home} options={{title:'', headerShown: false }} />
        <Stack.Screen name="Login" component={Login} options={{title:'', headerShown: false }}/>
        <Stack.Screen name="Cadastro" component={Cadastro} options={{title:'', headerShown: false }}/>
        <Stack.Screen name="esqueceuSenha" component={esqueceuSenha} options={{title:'', headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
    <StatusBar style="light" 
        hidden={true}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#30c5ff',
  },

  botaoVamosiniciar:{
    backgroundColor:'#fff',
    fontSize:20,
    color: '#fff',
    height: 45,
    width: 279,
    alignItems:'center',
    justifyContent:'center',
    marginLeft:40,
    marginBottom:20,
    borderRadius:15,
  },

  textVamosiniciar:{
    fontSize:20,
    color: '#000',
    fontFamily:'Quicksand_400Regular',
  },

  buttonback:{
    color:'#30c5ff',
    width: 150,
    fontSize:20,
    marginLeft:1,
    marginTop:20,
    fontFamily:'Quicksand_400Regular',
  },

  iconBack:{
    marginTop:20,
    marginLeft:10,
    color:'#30c5ff'
  },

  containerlogin1:{
    flex: 1,
    backgroundColor: '#EAE8FE',
    height:10,
    flexDirection: "row",
    // height:926,
  },

  containerlogin2:{
    flex: 4,
    backgroundColor: '#FFFFFF',
    height: 60,
    borderTopLeftRadius: 30, 
    borderTopRightRadius: 30,
    // color:'#504F4F'
  },

  textodologin:{
    fontSize:40,
    marginTop:10,
    color:'#504F4F',
    fontFamily:'Quicksand_400Regular',
  },

  centrologin:{
    alignItems:'center',
  },

  inputText:{
    height: 40,
    margin: 12,
    padding: 10,
    borderBottomWidth:1,
    marginBottom:20,
    fontFamily:'Quicksand_400Regular',
  },

  inputText2:{
    height: 40,
    margin: 12,
    padding: 10,
    borderBottomWidth:1,
    marginBottom:5,
    fontFamily:'Quicksand_400Regular',
  },

  botoes:{
    flexDirection: "row",
  },

  botaoLogin:{
    backgroundColor:'#30c5ff',
    fontSize:20,
    color: '#fff',
    height: 45,
    width: 150,
    alignItems:'center',
    justifyContent:'center',
    marginLeft:10,
    borderRadius:15,
  },

  botaoLogin2:{
    backgroundColor:'#30c5ff',
    fontSize:20,
    color: '#fff',
    height: 45,
    width: 150,
    alignItems:'center',
    justifyContent:'center',
    marginLeft:10,
    marginTop:180,
    borderRadius:15,
  },

  textLogin:{
    fontSize:20,
    color: '#fff',
    fontFamily:'Quicksand_400Regular',
  },

  botaoEsqueceuasenha:{
    color: '#fff',
    marginLeft:25,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:15,
  },

  textEsqueceuasenha:{
    color:'#504F4F',
    fontSize:20,
    fontFamily:'Quicksand_400Regular',
  },

  botaoVoceenovo:{
    color: '#fff',
    marginLeft:15,
    marginTop:200,
    borderRadius:15,
  },

  textVoceenovo:{
    color:'#504F4F',
    fontSize:15,
    fontFamily:'Quicksand_400Regular',
  },
});
