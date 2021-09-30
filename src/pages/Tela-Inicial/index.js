// Importações react
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import styles from './styles';


// Importações de páginas
import ComponenteImagem from './components/componenteImagem';

export default class Home extends Component{

  render(){

    const { navigation } = this.props
    return(
      <><View style={styles.container}>
      <ComponenteImagem />
      <View style={styles.botaoVamosiniciar} >
      <Text style={styles.textVamosiniciar} onPress={() => navigation.navigate('Login')}>Login</Text>
        </View>
    </View>
      </>
  );
}
}

