// Importações React
import React, {Component, useState,useEffect} from 'react';
import { Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import styles from './styles';
import {Icon} from 'react-native-elements';

// Importação Firebase
import firebase from '../../config/firebase';

export default function esqueceSenha({navigation}){

  const [email,setEmail] = useState('');
  const [errorRecupecao,setErrorRecupecao] = useState('');

  const recuperacao = () => {
    firebase.auth().sendPasswordResetEmail(email)
    .then(() => {
    alert('Atenção, Enviamos um email de recuperação de senha para o seguinte endereço: ' + 
    email,
    [{ text: "OK", onPress: () => navigation.navigate('Login') }],
    );
    })
    .catch((error) => {

    var errorCode = error.code;
    var errorMessage = error.message;
    });
  }
  

  return(
    <>
    <View style={styles.containerlogin1}>
      {/* <Icon name='arrow-back-ios' style={styles.iconBack2} onPress={() => navigation.navigate('Home')} /> */}
      <Icon name='arrow-back-ios' style={styles.iconBack2} />
      <Text onPress={() => navigation.navigate('Login')} style={styles.buttonback}>Voltar</Text>
    </View>
    <View style={styles.containerlogin2}>
      <View style={styles.centrologin}>
        <Text style={styles.textodologin}>Recuperação de senha</Text>
      </View>
      
      <View>

      <TextInput style={styles.inputText} 
        placeholder="Email" 
        type="text"
        onChangeText={(text) => setEmail(text)}
        value={email} 
      />

      {/* Error */}
      {errorRecupecao === true
        ?
        <View>
          <Icon name='warning' size={24}/>
          <Text>Email inválida</Text>
        </View>
        :
        <View/>
        }

        {email === ""
        ?
        <TouchableOpacity disabled={true} style={styles.botaoLogin2} >
          <Text style={styles.textLogin}>Recuperação</Text>   
        </TouchableOpacity>
        :
        <TouchableOpacity style={styles.botaoLogin2} onPress={recuperacao} >
          <Text style={styles.textLogin}>Recuperação</Text>   
        </TouchableOpacity>
        }
      </View>


    </View>
    </>
  );
}