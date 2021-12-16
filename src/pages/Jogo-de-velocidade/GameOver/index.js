import React from "react";
import { Text, View, Button, TouchableOpacity,StyleSheet } from "react-native";
import styled from "styled-components/native";

import { geniusArray } from "../GameLogic";

const GameOverView = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const GameOverText = styled.Text`
  color: white;
  font-size: 50px;
  
`;

GameOverText.Subtext = styled.Text`
  color: white;
  font-size: 30px;
  padding-bottom: 50px;
  
`;

GameOverView.ButtonRestart = styled.Text`
  padding: 50px 50px;
  background-color: #7B1E7A;
  font-size: 40px;
  border-radius: 20px;
  color: white;
  overflow: hidden;
`;

export default function GameOver(props) {
  return (
    <GameOverView>
      <GameOverText>Fim de jogo</GameOverText>
      <TouchableOpacity style={styles.botoes} onPress={()=> {props.restartGame();}}>
        <Text style={styles.textbotoes}>Reiniciar</Text>
      </TouchableOpacity>
      <GameOverText.Subtext style={{ paddingTop: 20 }}>
        Boa sorte na próxima!
      </GameOverText.Subtext>
    </GameOverView>
  );
}
const styles = StyleSheet.create({
  textbotoes:{
    fontSize:25,
    color: '#fff',
  },
  botoes:{
    backgroundColor:'#7B1E7A',
    height: 45,
    width: 150,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:15,
    marginLeft:10,
    marginBottom:10,
    marginTop:10,
  },
  botoes2:{
      backgroundColor:'#30c5ff',
      height: 45,
      width: 150,
      alignItems:'center',
      justifyContent:'center',
      borderRadius:15,
      marginLeft:10,
      marginBottom:10,
    }
})

