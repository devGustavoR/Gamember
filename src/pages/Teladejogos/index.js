// Importações React
import React, { useEffect, useState } from 'react';
import { Text, View, TextInput, Image, ImageBackground } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import styles from './styles';
import {Icon} from 'react-native-elements';

// Firebase
import firebase from '../../config/firebase';
// import database from '../../Cadastro/setdatabase';

// Páginas
import Login from '../Login';

export default function teladejogos({navigation}){
  // const name = () =>{
  //   return new Promise((resolve,reject)=>{
  //     var database = firebase.database();
  //     let a = []

  //     database.ref('users').once('value',(snapshot)=>{
  //       snapshot.forEach((childSnapshot)=>{
          
  //       })
  //     })
  //   })

  return(
    <ImageBackground source={require('../../../assets/back.png')} style={{width:'100%', height:"100%"}}>
      <View style={styles.menueuser}>
        <Icon name="person" size={30} color="#a2a2db" style={{width:20}}/>
        <Icon name='settings' size={30} color="#a2a2db" style={{marginLeft:230}}/>       
      </View>

      
      
      <View style={{paddingHorizontal:40, marginTop:25}}>
        <Text style={styles.textodebemvindodevolta}>Seja Bem-vindo! </Text>
        
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{marginRight:-40,marginTop:30}}>
          <TouchableOpacity style={styles.jogo1} onPress={() => navigation.navigate('perguntaspessoais')}>
            <Icon name="help" size={30} color="white"/>
          </TouchableOpacity>

          <TouchableOpacity style={styles.jogo2} onPress={() => navigation.navigate('Jogodamemoria')}>
            <Icon name="style" size={30} color="white"/>
          </TouchableOpacity>

          <TouchableOpacity style={styles.jogo3} onPress={() => navigation.navigate('Jogodavelocidade')}>
            <Icon name="hardware" size={30} color="white"/>
          </TouchableOpacity>

        </ScrollView>

        <Text style={styles.textdejogos}>Jogos</Text>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{marginRight:-40,marginTop:30}}>

          <View style={styles.blocojogo}>
            <Image source={require('../../../assets/QUIZ.png')} style={{width:180,borderRadius:10,height:130}}/>

          <View style={styles.textblocojogo}>
              <View style={{paddingHorizontal:5, paddingVertical:5}}>
                <Text>Perguntas e respostas</Text>
              </View>
            </View>
          </View>

          <View style={styles.blocojogo2}>
            <Image source={require('../../../assets/Memory.png')} style={{width:180,borderRadius:10,height:130}}/>

          <View style={styles.textblocojogo}>
              <View style={{paddingHorizontal:5, paddingVertical:5}}>
                <Text>Jogo da memória</Text>
              </View>
            </View>
          </View>

          <View style={styles.blocojogo3}>
            <Image source={require('../../../assets/Velocidade.png')} style={{width:180,borderRadius:10,height:130,opacity: 1}}/>

          <View style={styles.textblocojogo}>
              <View style={{paddingHorizontal:5, paddingVertical:5}}>
                <Text>Jogo da Velocidade</Text>
              </View>
            </View>
          </View>


        </ScrollView>

      </View>
    </ImageBackground>
  );
}
