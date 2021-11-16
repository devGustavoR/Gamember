import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  containerlogin1:{
    flex: 1,
    backgroundColor: '#EAE8FE',
    height:10,
    flexDirection: "row",
    // height:926,
  },

  containerlogin2:{
    flex: 4,
    backgroundColor: '#FFFFFF',
    height: 60,
    borderTopLeftRadius: 30, 
    borderTopRightRadius: 30,
    // color:'#504F4F'
  },

  textodologin:{
    fontSize:20,
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
  },

  inputText2:{
    height: 40,
    margin: 12,
    padding: 10,
    borderBottomWidth:1,
    marginBottom:5,
  },

  botoes:{
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

  botaoLogin2:{
    backgroundColor:'#30c5ff',
    fontSize:20,
    color: '#fff',
    height: 45,
    width: 150,
    alignItems:'center',
    justifyContent:'center',
    marginLeft:10,
    marginTop:180,
    borderRadius:15,
  },

  textLogin:{
    fontSize:20,
    color: '#fff',
  },

  botaoEsqueceuasenha:{
    color: '#fff',
    marginLeft:25,
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

  buttonback:{
    color:'#30c5ff',
    width: 150,
    fontSize:20,
    marginLeft:1,
    marginTop:20,
  },

  iconBack2:{
    marginTop:20,
    marginLeft:10,
  },
});

export default styles;