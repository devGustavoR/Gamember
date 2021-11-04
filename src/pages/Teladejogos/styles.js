import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  menueuser:{
    flexDirection:'row',
    marginTop:40,
    alignItems:'center',
    paddingHorizontal:40
  },
  textodebemvindodevolta:{
    fontSize:25,
    color:"#000",
  },
  jogo1:{
    alignItems:'center',
    justifyContent:'center', 
    height:66, 
    width:66, 
    borderRadius:50, 
    backgroundColor:"#30C5FF",
  },
  jogo2:{
    alignItems:'center',
    justifyContent:'center', 
    height:66, 
    width:66, 
    borderRadius:50, 
    marginLeft:18,
    backgroundColor:"#E63946",
  },
  jogo3:{
    alignItems:'center',
    justifyContent:'center', 
    height:66, 
    width:66, 
    borderRadius:50, 
    marginLeft:18,
    backgroundColor:"#1D3557",
  },
});

export default styles;