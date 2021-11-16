// Importações React
import React, {Component, useState,useEffect} from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles';
import {Icon} from 'react-native-elements';

// Importação Firebase
import firebase from '../../config/firebase';
import {addInfo} from './setdatabase';

export default function Cadastro({navigation}){

  const [email,setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorRegister, setErrorResgister] = useState('');

  const [nome,setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');

  const register = () =>{
    firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    let user = userCredential.user;
    navigation.navigate('Cadastro2', {idUser: user.uid})
    addInfo(nome,sobrenome,email);
    
  })
  .catch((error) => {
    setErrorResgister(true);
    let errorCode = error.code;
    let errorMessage = error.message;
    
  });
  
  };


  return(
    <>
    <TouchableOpacity style={styles.containerVoltar} onPress={() => navigation.navigate('Login')}>
      <Icon name='arrow-back-ios' style={styles.iconBack} />
      <Text style={styles.buttonback}>Voltar</Text>
    </TouchableOpacity>
    <View style={styles.containerCadastro}>
      <View style={styles.centroCadastro}>
        <Text style={styles.textodocadastro}>Cadastro</Text>
      </View>
      
      <View>

      <TextInput style={styles.inputText} 
        placeholder="Nome" 
        type="text" 
        onChangeText={(text) => setNome(text)} 
        value={nome}/>

      <TextInput style={styles.inputText} 
        placeholder="Sobrenome"
        type="text"
        onChangeText={(text) => setSobrenome(text)}
        value={sobrenome} />

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

      <TextInput style={styles.inputText} secureTextEntry={true} placeholder="Confirmação de senha" autoCorrect={false} />

      {/* Error */}
      {errorRegister === true
        ?
        <><View>
              <Icon name='warning' size={24} />
              <Text>Dados já constam no nosso banco de dados</Text>
            </View>
            </>
        :
        <View/>
        }

        {nome === "" || sobrenome === "" || email === "" || password === "" 
        ?
        <TouchableOpacity style={styles.botaoProximo} disabled={true} >
          <Text style={styles.textProximo}>Próximo</Text>   
        </TouchableOpacity>
        :
        <TouchableOpacity style={styles.botaoProximo} onPress={register} >
          <Text style={styles.textProximo}>Próximo</Text>   
        </TouchableOpacity>
        }
      </View>
      

    </View>
    </>
  );
}