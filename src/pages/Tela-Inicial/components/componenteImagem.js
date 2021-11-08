// Importações React
// Importações
import React, { Component } from 'react';
import {
  StyleSheet, 
  Image, 
  View, 
  Dimensions} from 'react-native';

class ComponenteImagem extends Component{

  render(){
    return(
      <View style={styles.container} >
      <Image
      style={styles.logo}
      source={require('../assets/logo.png')}
      />
      </View>
    )
  }
}

const {height} = Dimensions.get("screen");
const height_logo = height * 0.50 ;

const styles = StyleSheet.create({
  logo:{
    width: height_logo,
    height: height_logo,
  },
  container:{
    flex: 1,
    alignItems:'center',
    justifyContent:'center',
  },
});

export default ComponenteImagem;