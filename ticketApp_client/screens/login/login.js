import React, { useState, useEffect, useContext } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  AsyncStorage,
  KeyboardAvoidingView,
  Dimensions,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native';
import Constants from 'expo-constants';
import * as load from '../../assets/lottie-animation/51-preloader.json';
import Lottie from 'lottie-react-native';
import theme from '../../utils/theme';
import { newsContext } from '../../Main';

const { width, height } = Dimensions.get('screen');

const Login = ({ navigation, error })=>{
    
    const { authContext : {signIn}} = useContext(newsContext)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState(""); 
    const [ errorMessage, setErroMessage ] = useState(undefined);
    const [islogginIn, setIslogginIn] = useState(false);


      const login = () => {
<<<<<<< HEAD

        let email_regex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
        if (email.trim()!== "") {
            if (email_regex.test(email.trim())) {
                if (password) {
                    
                    //fetching now 
                    fetch('http://172.20.10.2:4000/login', {
=======
                setIslogginIn(true)    
                   //fetching now 
                    fetch('http://172.20.10.3:5000/login', {
>>>>>>> 5659d0471d899fd97cd1d7af8f55287f7433a21f
                        'method': 'POST', 
                        'headers': {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                        }, 
                        body: JSON.stringify({
                            'email' : email.trim(),
                            'password': password
                        })
                    })
                    .then(response => response.json())
                    .then(async res => {
                         if (res.ok == true) {
                            signIn({email, password})
                         } else {
                             setIslogginIn(false)
                             return setErroMessage(res.error)
                         }
                    })
                  }

    // hide keyboard on iOS
    function hideKeyboard(){
      Keyboard.dismiss()
    }

  return (
    <TouchableWithoutFeedback onPress={hideKeyboard}>
     <KeyboardAvoidingView behavior="padding" style={styles.container}>
       <Text style={styles.greeting}>
        {"Hello there. \nLet'start with Login"}
       </Text>
       { errorMessage ? 
        <View style={styles.errorMessage}>
              {errorMessage && 
                  <Text style={styles.error}>{errorMessage}</Text>
               }
        </View> : null
      } 
      <View style={styles.form}>
        {/* Email Address */}
        <View>
          <Text style={styles.inputTitle}>Email Address</Text>
          <TextInput style={styles.input} autoCapitalize="none"  onChangeText={(email)=>{setEmail(email)}}/>
        </View>
        {/* Password */}
        <View style={{ marginTop: 32 }}>
          <Text style={styles.inputTitle}>Password</Text>
          <TextInput
            onChangeText = {(password)=>{setPassword(password)}}
            style={styles.input}
            secureTextEntry
            autoCapitalize="none"
          />
        </View>
      </View>
      {/* Forgot Password */}
      <TouchableOpacity onPress={() => navigation.navigate('Reset')} style={styles.forgotPass}>
        <Text style={{ fontWeight: '600' }}>Forgot password?</Text>
      </TouchableOpacity>
      {/* Sign In Button */}
      <TouchableOpacity style={styles.button} onPress={() => login()}>
        <Text style={{ fontWeight: 'bold', color: '#fff' }}>Login in</Text>
      </TouchableOpacity>
      {islogginIn ? (
        <Lottie
          source={load}
          autoPlay
          loop
          style={{ height: height/6, width: 120, marginLeft: 40 }}
        />
      ) : null}
      {/* Don't have an account */}
      <TouchableOpacity
        style={styles.new}
        onPress={() => navigation.navigate('SignUp')}>
        <Text style={{ color: '#414959', fontSize: 13 }}>
          Don't have an account?
          <Text style={{ fontWeight: '500', color: '#e9446a' }}>
            {''}Sign Up
          </Text>
        </Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight + 40,
    backgroundColor: theme.COLORS.SECONDARY
  },
  greeting: {
    marginTop: 32,
    fontSize: 18,
    fontWeight: '500',
    textAlign: 'center',
    color: '#000a43',
    fontFamily:'AirbnbCereal-Medium'
  },
  errorMessage: {
    marginTop: 10,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 30,
  },
  error: {
    color:theme.COLORS.ERROR,
    fontSize: 13,
    fontWeight: '600',
    textAlign: 'center',
  },
  form: {
    marginBottom: 48,
    marginHorizontal: 30,
    marginTop: 50,
  },
  inputTitle: {
    color: '#8a8f9e',
    fontSize: 13,
    textTransform: 'uppercase',
    fontFamily:'AirbnbCereal-Medium'
  },
  input: {
    borderBottomColor: '#8a8f9e',
    borderBottomWidth: StyleSheet.hairlineWidth,
    height: height / 20,
    fontSize: 15,
    color: '#161f3d',
    
  },
  button: {
    marginHorizontal: 30,
    marginTop: 32,
    backgroundColor: '#e9446a',
    borderRadius: 4,
    height: height/17,
    alignItems: 'center',
    justifyContent: 'center',
  },
  new: {
    marginTop: 30,
    alignSelf: 'center',
  },
  forgotPass: {
    marginTop: -20,
    alignSelf: 'center',
  },
});

export default Login;
