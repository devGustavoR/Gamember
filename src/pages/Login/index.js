// Importações React
import React, {useState,useEffect} from 'react';
import { Text, View, TextInput, TouchableOpacity} from 'react-native';
import styles from './styles';
import {Icon} from 'react-native-elements';

// Importação Firebase
import firebase from '../../config/firebase';

export default function Login({navigation}){
      const [email,setEmail] = useState('');
      const [password, setPassword] = useState('');
      const [errorLogin, setErrorLogin] = useState('');

    const loginFirebase = () =>{

      firebase.auth().signInWithEmailAndPassword(email, password)
      .then(async (userCredential) => {
        let user = userCredential.user;
        
        navigation.navigate('teladejogos', {idUser: user.uid});
      })
      .catch((error) => {
        setErrorLogin(true)
        let errorCode = error.code;
        let errorMessage = error.message;
      });
    }
    
    useEffect(()=>{
      
    }, [])
    

  return(
    <>
    <View style={styles.containerVoltar}>
      <Icon name='arrow-back-ios' style={styles.iconBack} />
      <Text onPress={() => navigation.navigate('Home')} style={styles.buttonback}>Voltar</Text>
    </View>
    <View style={styles.containerlogin}>
      <View style={styles.centrologin}>
        <Text style={styles.textodologin}>Seja Bem-Vindo</Text>
      </View>
      
      <View>
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
        
        {/* Error */}
        {errorLogin === true
        ?
        <>
        <View style={styles.iconError}>
          <Icon name='warning' size={24}/>
          <Text>Email ou senha inválida</Text>
        </View>
        <TouchableOpacity style={styles.botaoEsqueceuasenha} onPress={() => navigation.navigate('esqueceuSenha')} >
        <Text style={styles.textEsqueceuasenha}>Esqueceu sua senha?</Text>   
      </TouchableOpacity>
      </>
        :
        <View/>
        }

        {email === "" || password === ""
        ?
        <TouchableOpacity disabled={true} style={styles.botaoLogin} >
          <Text style={styles.textLogin}>Login</Text>   
        </TouchableOpacity>
        :
        <View style={styles.botoesladoalado}>
          <TouchableOpacity style={styles.botaoLogin} onPress={loginFirebase} >
            <Text style={styles.textLogin}>Login</Text>   
          </TouchableOpacity>
        </View>
        }
      


      </View>

      <View>
        <View style={styles.botaoVoceenovo}>
          <Text style={styles.textEsqueceuasenha} onPress={() => navigation.navigate('Cadastro')}>Você é novo aqui?</Text>
        </View>
      </View>

      {/* <View>
        <View style={styles.botaoVoceenovo}>
        <Text style={styles.textEsqueceuasenha} onPress={() => navigation.navigate('perguntaspessoais')}>Você é novo aqui?</Text>
        </View>
      </View> */}

    </View>

    </>
  );
}
