// Importações React
import React, {useState, useEffect} from 'react';
import {Text, View, TextInput, TouchableOpacity} from 'react-native';
import styles from './styles';
import {Icon} from 'react-native-elements';
import {Picker} from '@react-native-picker/picker';

// Importações de páginas

// Importações Firebase
import {addQuestion} from '../setdatabase';

export default function Cadastro2({navigation}){

  const [pergunta1, setPergunta1] = useState('');
  const [pergunta2, setPergunta2] = useState('');
  const [pergunta3, setPergunta3] = useState('');
  const [pergunta4, setPergunta4] = useState('');
  const [pergunta5, setPergunta5] = useState('');

  const register = () =>{
    addQuestion(pergunta1,pergunta2,pergunta3,pergunta4,pergunta5);
    navigation.navigate('teladejogos');
  }

  return(
    <>

    <View style={styles.containerdeteladecadastro}>
      <Icon name='arrow-back-ios' style={styles.iconBack} />
      <Text onPress={() => navigation.navigate('Cadastro')} style={styles.buttonback}>Voltar</Text>
    </View>

    <View style={styles.containerdeteladecadastro2}>
      <View style={styles.centrodotexto}>
        <Text style={styles.textodologin}>Perguntas Pessoais</Text>
      </View>

      <TextInput style={styles.inputText}
      placeholder="Em qual cidade você nasceu?"
      type="text"
      onChangeText={(text) => setPergunta1(text)}
      value={pergunta1}/>

    <Picker 
      style={styles.selecaodeesporte}
      placeholder="test"
      selectedValue={pergunta5}
      onValueChange={(itemValue) =>
        setPergunta5(itemValue)
      }
      itemStyle={{height: 44}}>
      <Picker.Item label="Você praticava esportes na adolecência?" value=""/>
      <Picker.Item label="Sim" value="sim" />
      <Picker.Item label="Não" value="não" />
    </Picker>

    <TextInput style={styles.inputText}
    placeholder="Qual o nome da sua mãe?"
    type="text"
    onChangeText={(text) => setPergunta2(text)}
    value={pergunta2}/>

    <TextInput style={styles.inputText}
    placeholder="Quantos irmãos você tem?"
    keyboardType='numeric'
    onChangeText={(text) => setPergunta3(text)}
    value={pergunta3}/>

    <Picker 
      style={styles.selecaodeesporte}
      placeholder="test"
      selectedValue={pergunta4}
      onValueChange={(itemValue) =>
        setPergunta4(itemValue)
      }
      itemStyle={{height: 44}}>
      <Picker.Item label="Você tem cônjuge?" value=""/>
      <Picker.Item label="Sim" value="sim" />
      <Picker.Item label="Não" value="não" />
    </Picker>

    <TouchableOpacity style={styles.botaoLogin2} onPress={register}>
      <Text style={styles.textLogin}>Próximo</Text>   
    </TouchableOpacity>

      </View>
    </>
  );
}