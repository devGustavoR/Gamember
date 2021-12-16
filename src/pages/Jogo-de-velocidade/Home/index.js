import React, { useState } from "react";
import { Text, View, Button, TouchableOpacity,StyleSheet } from "react-native";
import styled from "styled-components/native";

const ButtonPlayArea = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  
`;

export default function Home(props) {
  return (
    <ButtonPlayArea>
      <TouchableOpacity
        onPress={() => {
          props.playGame();
          props.setArrayGameShow();
          props.screenState();
             
        }}
        style={styles.botoes}
      >
        <Text style={styles.textbotoes}>Jogar</Text>
      </TouchableOpacity>
    </ButtonPlayArea>
  );
}
const styles = StyleSheet.create({
  textbotoes:{
    fontSize:25,
    color: '#fff',
  },
  botoes:{
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
