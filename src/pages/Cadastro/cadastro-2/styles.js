import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  iconBack:{
    marginTop:20,
    marginLeft:10,
  },

  containerdeteladecadastro:{
    flex: 1,
    backgroundColor: '#EAE8FE',
    height:10,
    flexDirection: "row",
  },

  buttonback:{
    color:'#30c5ff',
    width: 150,
    fontSize:20,
    marginLeft:1,
    marginTop:20,
  },

  containerdeteladecadastro2:{
    flex: 4,
    backgroundColor: '#FFFFFF',
    height: 60,
    borderTopLeftRadius: 30, 
    borderTopRightRadius: 30,
    // color:'#504F4F'
  },

  textodologin:{
    fontSize:30,
    marginTop:10,
    color:'#504F4F',
  },

  centrodotexto:{
    alignItems:'center',
  },

  inputText:{
    height: 40,
    margin: 12,
    padding: 10,
    borderBottomWidth:1,
    marginBottom:20,
    borderBottomColor:"#30c5ff",
  },

  selecaodeesporte:{
    height: 30,
    width: '95%',
    // padding: 10,
    borderBottomWidth:1,
    borderTopWidth:0,
    borderRightWidth:0,
    borderLeftWidth:0,
    borderBottomColor:"#30c5ff",
    marginBottom:20,
    marginLeft:10,
    marginRight:10,
  },

  textLogin:{
    fontSize:20,
    color: '#fff',
    // fontFamily:'Quicksand_400Regular',
  },

  botaoLogin2:{
    backgroundColor:'#30c5ff',
    fontSize:20,
    color: '#fff',
    height: 45,
    width: 150,
    alignItems:'center',
    justifyContent:'center',
    marginLeft:10,
    marginTop:100,
    borderRadius:15,
  },

});

export default styles;
