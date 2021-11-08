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
    backgroundColor:"rgba(0,0,0,0.5)",
  },
  textdejogos:{
    color:"#fff",
    marginTop:30,
    fontSize:17,
  },
  textblocojogo:{
    flexDirection:"row",
    width: 150,
    alignItems:"center",
    justifyContent:"center",
  },
  blocojogo:{
    backgroundColor:"#FEFEFE",
    height: 200,
    width: 190,
    borderRadius:15,
    padding: 5,
  },
  blocojogo2:{
    backgroundColor:"#FEFEFE",
    height: 200,
    width: 190,
    borderRadius:15,
    padding: 5,
    marginHorizontal:20,
  },
  blocojogo3:{
    backgroundColor:"rgba(0,0,0,0.5)",
    height: 200,
    width: 190,
    borderRadius:15,
    padding: 5,
    marginHorizontal:20,
  },
});

export default styles;