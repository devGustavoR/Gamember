import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  buttonback:{
    color:'#30c5ff',
    width: 150,
    fontSize:20,
    marginLeft:1,
    marginTop:20,
  },

  iconBack:{
    marginTop:23,
    marginLeft:10,
  },

  containerVoltar:{
    flex: 1,
    backgroundColor: '#EAE8FE',
    height:10,
    flexDirection: "row",
  },

  containerlogin:{
    flex: 4,
    backgroundColor: '#FFFFFF',
    height: 60,
    borderTopLeftRadius: 30, 
    borderTopRightRadius: 30,
  },

  textodologin:{
    fontSize:35,
    marginTop:10,
    color:'#504F4F',
  },

  centrologin:{
    alignItems:'center',
  },

  inputText:{
    height: 40,
    margin: 12,
    padding: 10,
    borderBottomWidth:1,
    marginBottom:20,
    borderBottomColor:'#30c5ff',
  },

  botoesladoalado:{
    flexDirection: "row",
  },

  botaoLogin:{
    backgroundColor:'#30c5ff',
    fontSize:20,
    color: '#fff',
    height: 45,
    width: 150,
    alignItems:'center',
    justifyContent:'center',
    marginLeft:10,
    borderRadius:15,
  },

  textLogin:{
    fontSize:20,
    color: '#fff',
  },

  botaoEsqueceuasenha:{
    color: '#fff',
    marginLeft:25,
    marginTop:10,
    marginBottom:10,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:15,
  },

  textEsqueceuasenha:{
    color:'#504F4F',
    fontSize:20,
  },

  botaoVoceenovo:{
    color: '#fff',
    marginLeft:15,
    marginTop:200,
    borderRadius:15,
  },

  textVoceenovo:{
    color:'#504F4F',
    fontSize:15,
  },

  iconError:{
    alignItems:'center',
    justifyContent:'center',
  },
});

export default styles;