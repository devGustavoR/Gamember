import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  containerVoltar:{
    flex: 1,
    backgroundColor: '#EAE8FE',
    height:10,
    flexDirection: "row",
    // height:926,
  },

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

  containerCadastro:{
    flex: 4,
    backgroundColor: '#FFFFFF',
    height: 60,
    borderTopLeftRadius: 30, 
    borderTopRightRadius: 30,
  },

  textodocadastro:{
    fontSize:40,
    marginTop:10,
    color:'#504F4F',
  },

  centroCadastro:{
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

  botoes:{
    flexDirection: "row",
  },

  botaoProximo:{
    backgroundColor:'#30c5ff',
    fontSize:20,
    color: '#fff',
    height: 45,
    width: 150,
    alignItems:'center',
    justifyContent:'center',
    marginLeft:10,
    borderRadius:15,
    marginTop:10,
  },

  textProximo:{
    fontSize:20,
    color: '#fff',
  }, 
});

export default styles;