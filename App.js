// Importações React
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Importações páginas
import Home from './src/pages/Tela-Inicial';
import Login from './src/pages/Login';
import Cadastro from './src/pages/Cadastro';
import esqueceuSenha from './src/pages/esqueceSenha';
import Cadastro2 from './src/pages/Cadastro/cadastro-2';
import teladejogos from './src/pages/Teladejogos';
import Jogodamemoria from './src/pages/Jogo-da-memoria/Main';
import perguntaspessoais from './src/pages/Jogo-perguntas-pessoais/screens/Quiz';
import Jogodavelocidade from './src/pages/Jogo-de-velocidade/index';
import GameOver from './src/pages/Jogo-de-velocidade/GameOver/index';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" >
        <Stack.Screen name="Home" component={Home} options={{title:'', headerShown: false }} />
        <Stack.Screen name="Login" component={Login} options={{title:'', headerShown: false }}/>
        <Stack.Screen name="Cadastro" component={Cadastro} options={{title:'', headerShown: false }}/>
        <Stack.Screen name="esqueceuSenha" component={esqueceuSenha} options={{title:'', headerShown: false }}/>
        <Stack.Screen name="Cadastro2" component={Cadastro2} options={{title:'', headerShown: false }}/>
        <Stack.Screen name="teladejogos" component={teladejogos} options={{title:'', headerShown: false }}/>
        <Stack.Screen name="Jogodamemoria" component={Jogodamemoria} options={{title:'', headerShown: false }}/> 
        <Stack.Screen name="perguntaspessoais" component={perguntaspessoais} options={{title:'', headerShown: false }}/>
        <Stack.Screen name="Jogodavelocidade" component={Jogodavelocidade} options={{title:'', headerShown: false }}/>
        <Stack.Screen name="GameOver" component={GameOver} options={{title:'', headerShown: false }}/> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}