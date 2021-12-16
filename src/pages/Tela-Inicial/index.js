// Importações react
import React, {useEffect} from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import Animated, {useSharedValue, useAnimatedStyle, withTiming} from 'react-native-reanimated';

// Importações de páginas
import ComponenteImagem from './components/componenteImagem';

export default function Home({navigation}){

  // const viewPosition = useSharedValue(30);

  // useEffect(()=>{
  //   viewPosition.value = withTiming(0, {duration:500});
  // },[])

  // const viewStyle = useAnimatedStyle(()=>{
  //   return{
  //     transform:[{translateY: viewPosition.value}],
  //   };
  // })

  return(
    <>
      <View style={styles.container}>
        <ComponenteImagem />
        <TouchableOpacity style={styles.botaoVamosiniciar} onPress={() => navigation.navigate('Login')} >
          <Text style={styles.textVamosiniciar} >Iniciar</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}


