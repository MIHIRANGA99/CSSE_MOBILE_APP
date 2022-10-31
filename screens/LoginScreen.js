import axios from "axios";
import React, { useState } from "react";
import { Alert, Button,TouchableOpacity,Text,View,Image, TextInput} from 'react-native';
import commonStyles from "../styles/common";
import loginStyles from "../styles/login";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");

  const loginUser = () => {
    const URL = `https://backendhostings.herokuapp.com/user/signin`;
    axios
      .post(URL, { email: email, password: pwd })
      .then((res) => {
        navigation.navigate("Dashboard", {
          userID: res.data.userId,
          userRole: res.data.userRole,
        });
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
  


<View style={{backgroundColor:"#FFF",height:"230%"}}>
<Image source ={require('../screens/pic/local.png')}
        style={{width:"100%",height:"22%"}}
    />
   
   
    <Text
     style={{
         fontSize:39,
         
         alignSelf:"center",
     }}
    >Login</Text>

<View
     style={{
        flexDirection:"row",
        alignItems:"center",
        marginHorizontal:55,
        borderWidth:2,
        marginTop:15,
        paddingHorizontal:10,
        borderColor:"#00716F",
        borderRadius:23,
        paddingVertical:2
    }}>

    <TextInput
   

   placeholder="Email Address"
   placeholderTextColor="#00716F"
   onChange={(e) => setEmail(e.nativeEvent.text)}
   value={email}
  
    />

    </View>

     <View
     style={{
        flexDirection:"row",
        alignItems:"center",
        marginHorizontal:55,
        borderWidth:2,
        marginTop:15,
        paddingHorizontal:10,
        borderColor:"#00716F",
        borderRadius:23,
        paddingVertical:2
    }}>

    <TextInput
   
   secureTextEntry
   placeholder="Password"
   placeholderTextColor="#00716F"
   style={{paddingHorizontal:10}}
      onChange={(e) => setPwd(e.nativeEvent.text)}
      value={pwd}
  
    />

    </View>
    <TouchableOpacity

      onPress={() => {
        loginUser();
      }}
      style={{
        marginHorizontal:55,
        alignItems:"center",
        justifyContent:"center",
        marginTop:30,
        backgroundColor:"#FF9720",
        paddingVertical:10,
        borderRadius:23
    }}
    >
      <Text >Login</Text>
    </TouchableOpacity>
    <Button 
  style={{
    marginHorizontal:55,
    alignItems:"center",
    justifyContent:"center",
   

}}
title="  You Don't  Have Account? Login" onPress={() => navigation.navigate("Register")} />
  </View>



  );
};

export default LoginScreen;
