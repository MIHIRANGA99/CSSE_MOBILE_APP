import axios from "axios";
import React, { useState } from "react";

import { Alert, Button,TouchableOpacity,Text,View,Image, TextInput} from 'react-native';




const  RegisterScreen = ({ navigation }) =>{


    const [role, setRole] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [compName, setCompName] = useState("");
    const [supAddress, setSupAddress] = useState("");
    const [pwd, setPwd] = useState("");
    const [cpwd, setCpwd] = useState("");



    const registerUser = () => {
        const URL = "https://backendhostings.herokuapp.com/user/signup";
    
        const payload = {
          name: name,
          email: email,
          companyName: compName,
          password: pwd,
          userRole: role,
          supplierAddress: supAddress,
        };
        console.log(payload);
    
        axios
          .post(URL, payload)
          .then((res) => {
            Alert.alert("Login Successfully")
            navigation.navigate("Login");
          })
          .catch((error) => {
            console.log(error);
            Alert.alert(
              "Error",
              "Registration Unsuccessful",
              [{ text: "Check Again" }],
              { cancelable: false }
            );
          });
      };
    



  return (
    <View style={{backgroundColor:"#FFF",height:"190%"}}>
    <Image source ={require('../screens/pic/test.png')}
        style={{width:"100%",height:"19%"}}
    />
<Text
     style={{
         fontSize:29,
         
         alignSelf:"center",
     }}
    >Register</Text>

    <View style={{
        flexDirection:"row",
        alignItems:"center",
        marginHorizontal:55,
        borderWidth:2,
        marginTop:20,
        paddingHorizontal:10,
        borderColor:"#00716F",
        borderRadius:23,
        paddingVertical:2
    }}>
      
        <TextInput 
            placeholder="Name"
            onChange={(e) => setName(e.nativeEvent.text)}
            value={name}
            placeholderTextColor="#00716F"
            style={{paddingHorizontal:10}}
        />

        

    </View>
    <View style={{
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
      
            onChange={(e) => setRole(e.nativeEvent.text)}
            value={role}
            placeholder="UserRole"
            placeholderTextColor="#00716F"
            style={{paddingHorizontal:10}}
        />


        
   

    </View>
    <View style={{
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
         
            onChange={(e) => setCompName(e.nativeEvent.text)}
            value={compName}
            placeholder="Company Name"
            placeholderTextColor="#00716F"
            style={{paddingHorizontal:10}}
        />


        
   

    </View>
    <View style={{
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
          
            placeholder="Address"
            onChange={(e) => setSupAddress(e.nativeEvent.text)}
            value={supAddress}
            placeholderTextColor="#00716F"
            style={{paddingHorizontal:10}}
        />


        
   

    </View>
    <View style={{
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
            onChange={(e) => setEmail(e.nativeEvent.text)}
            value={email}
            placeholderTextColor="#00716F"
            style={{paddingHorizontal:10}}
        />


        
   

    </View>
    <View style={{
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
            onChange={(e) => setPwd(e.nativeEvent.text)}
            value={pwd}
            placeholderTextColor="#00716F"
            style={{paddingHorizontal:10}}
        />


        
   

    </View>
    <View style={{
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
            placeholder="Confirm Password"
            onChange={(e) => setCpwd(e.nativeEvent.text)}
            value={cpwd}
            placeholderTextColor="#00716F"
            style={{paddingHorizontal:10}}
        />
    {pwd !== cpwd && pwd !== "" && cpwd !== "" ? (
            <Text style={{ color: "red", textAlign: "center" }}>
              Passwords are not matching!
            </Text>
          ) : (
            <Text> </Text>
          )}
    </View>

   
  <TouchableOpacity
    disabled={pwd !== cpwd}
    onPress={() => {
      registerUser();
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
    <Text >Register</Text>
  </TouchableOpacity>

  <Button 
  style={{
    marginHorizontal:55,
    alignItems:"center",
    justifyContent:"center",
   

}}
title=" You Have Account? Login" onPress={() => navigation.navigate("Login")} />

</View>


  )
}

export default RegisterScreen;