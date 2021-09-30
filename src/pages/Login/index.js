// Importações React
import React, {Component} from 'react';
import { Text, View, TextInput } from 'react-native';
import styles from './styles';
import {Icon} from 'react-native-elements';

// Importações de páginas

export default class Login extends Component{

  render(){

    // const [email,setEmail] = useState('');
    // const [senha, setSenha] = useState('');
    
    const { navigation } = this.props

  return(
    <>
    <View style={styles.containerlogin1}>
      <Icon name='arrow-back-ios' style={styles.iconBack} onPress={() => navigation.navigate('Home')} />
      <Text onPress={() => navigation.navigate('Home')} style={styles.buttonback}>Voltar</Text>
    </View>
    <View style={styles.containerlogin2}>
      <View style={styles.centrologin}>
        <Text style={styles.textodologin}>Seja Bem-Vindo!</Text>
      </View>
      
      <View>
        <TextInput style={styles.inputText} 
        placeholder="Email" 
        type="text" 
        onChangeText={(text) => setEmail(text)} 
        value={email}/>
        <TextInput style={styles.inputText} 
        secureTextEntry={true} 
        placeholder="Senha" autoCorrect={false} 
        type="text" onChangeText={(text) => setSenha(text)} value={senha} />
      </View>

      <View style={styles.botoes}>

        <View style={styles.botaoLogin}>
          <Text style={styles.textLogin}>Login</Text>
        </View>

        <View style={styles.botaoEsqueceuasenha}>
          <Text style={styles.textEsqueceuasenha}>Esqueceu a senha?</Text>
        </View>

      </View>

      <View>
        <View style={styles.botaoVoceenovo}>
          <Text style={styles.textEsqueceuasenha} onPress={() => navigation.navigate('Cadastro')}>Você é novo aqui?</Text>
        </View>
      </View>

    </View>

    </>
  );
}
}
