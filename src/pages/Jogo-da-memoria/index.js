import React, { useEffect, useState } from "react";
import {View, Text, TouchableOpacity, Button} from 'react-native';

export default function MemoryGame(){
  const [cards, setCards] = useState([]);
  const [turns,setTurns] = useState(0);

  const cardImages = [
    {"src":"/img/img1.jpg"},
    {"src":"/img/img2.png"},
    {"src":"/img/img3.jpg"},
    {"src":"/img/img4.png"},
    {"src":"/img/img5.png"},
    {"src":"/img/img6.jpg"}
  ]

  const shuffleCards = () =>{
    const shuffledCards = [...cardImages,...cardImages]
    .sort(() => Math.random() - 0.5)
    .map((card) => ({...card, id: Math.random() }))

    setCards(shuffledCards)
    setTurns(0)
  }

  console.log(cards,turns)

  return(
    <View>
      <Text>Memory Game</Text>
      <TouchableOpacity onPress={shuffleCards}>
        <Text>New game</Text>
      </TouchableOpacity>

      <View>
        {cards.map(card => (
          <div className="card" key={card.id}>
            <div>
              <img className="front" src={card.src}/>
            </div>
          </div>
        ))}
      </View>
    </View>
  )
}