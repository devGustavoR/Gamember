// Importações React
import React, {Component, useState,useEffect} from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles';
import {Icon} from 'react-native-elements';

// Importação Firebase
import firebase from '../../config/firebase';


// Importações de páginas


export default function Cadastro({navigation}){

  const [email,setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorRegister, setErrorResgister] = useState('');

  const register = () =>{
    firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    
    let user = userCredential.user;
    
  })
  .catch((error) => {
    let errorCode = error.code;
    let errorMessage = error.message;
    
  });
  };

  return(
    <>
    <View style={styles.containerlogin1}>
      {/* <Icon name='arrow-back-ios' style={styles.iconBack2} onPress={() => navigation.navigate('Home')} /> */}
      <Icon name='arrow-back-ios' style={styles.iconBack2} />
      <Text onPress={() => navigation.navigate('Home')} style={styles.buttonback}>Voltar</Text>
    </View>
    <View style={styles.containerlogin2}>
      <View style={styles.centrologin}>
        <Text style={styles.textodologin}>Cadastro</Text>
      </View>
      
      <View>

      <TextInput style={styles.inputText2} placeholder="Nome" />
      <TextInput style={styles.inputText2} placeholder="Sobrenome" />
      <TextInput style={styles.inputText} 
        placeholder="Email" 
        type="text"
        onChangeText={(text) => setEmail(text)}
        value={email} 
        />
      <TextInput style={styles.inputText} 
        secureTextEntry={true} 
        placeholder="Senha" autoCorrect={false} 
        type="text"
        onChangeText={(text) => setPassword(text)}
        value={password} />
      <TextInput style={styles.inputText2} secureTextEntry={true} placeholder="Confirmação de senha" autoCorrect={false} />

      {/* Error */}
      {errorRegister === true
        ?
        <View>
          <Icon name='warning' size={24}/>
          <Text>Email ou senha inválida</Text>
        </View>
        :
        <View/>
        }

        {email === "" || password === ""
        ?
        <TouchableOpacity disabled={true} style={styles.botaoLogin2} >
          <Text style={styles.textLogin}>Próximo</Text>   
        </TouchableOpacity>
        :
        <TouchableOpacity style={styles.botaoLogin2} onPress={register} >
          <Text style={styles.textLogin}>Próximo</Text>   
        </TouchableOpacity>
        }
      </View>


    </View>
    </>
  );
}