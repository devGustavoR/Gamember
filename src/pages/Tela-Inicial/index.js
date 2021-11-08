// Importações react
import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';


// Importações de páginas
import ComponenteImagem from './components/componenteImagem';

export default class Home extends Component{

  render(){

    const { navigation } = this.props
    return(
      <><View style={styles.container}>
      <ComponenteImagem />
        <TouchableOpacity style={styles.botaoVamosiniciar} onPress={() => navigation.navigate('Login')} >
          <Text style={styles.textVamosiniciar} >Iniciar</Text>
        </TouchableOpacity>
    </View>
      </>
  );
}
}

