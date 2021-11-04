// Importações React
import React, { useEffect, useState } from 'react';
import { Text, View, TextInput, Image, ImageBackground } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import styles from './styles';
import {Icon} from 'react-native-elements';

// Firebase
import firebase from '../../config/firebase';

// Páginas
import Login from '../Login';

export default function teladejogos(){
  firebase.database().ref('users').once('value', (data) =>{
    console.log(data.toJSON());
  })

  return(
    <ImageBackground source={require('../../../assets/back.png')} style={{width:'100%', height:"100%"}}>
      <View style={styles.menueuser}>
        <Icon name="person" size={30} color="#a2a2db" style={{width:20}}/>
        <Icon name='settings' size={30} color="#a2a2db" style={{marginLeft:230}}/>       
      </View>

      <View style={{paddingHorizontal:40, marginTop:25}}>
        <Text style={styles.textodebemvindodevolta}>Bem vindo de volta </Text>
        
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{marginRight:-40,marginTop:30}}>
          <View style={styles.jogo1}>
            <Icon name="style" size={30} color="white"/>
          </View>

          <View style={styles.jogo2}>
            <Icon name="hardware" size={30} color="white"/>
          </View>

          <View style={styles.jogo3}>
            <Icon name="help" size={30} color="white"/>
          </View>

          {/* <Text></Text> */}
        </ScrollView>
      </View>
    </ImageBackground>
  );
}
