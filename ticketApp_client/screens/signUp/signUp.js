import React, { useState, useContext } from "react";
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
  Keyboard,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Constants from "expo-constants";
import Lottie from "lottie-react-native";
import * as load from "../../assets/lottie-animation/51-preloader.json";
import theme from "../../utils/theme";
import { newsContext } from "../../Main";

const { width, height } = Dimensions.get("screen");

const SignUp = ({ navigation }) => {
  const {
    authContext: { signUp },
  } = useContext(newsContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [islogginIn, setIslogginIn] = useState(false);

  const SignUp = () => {
    setIslogginIn(true);
    fetch("http://172.20.10.3:5000/register", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        email: email.trim(),
        password: password,
      }),
    })
      .then((response) => response.json())
      .then(async (res) => {
        if (res.ok == true) {
          console.log(res.data);
          signUp({ email });
        } else {
          setIslogginIn(false);
          return setErrorMessage(res.error);
        }
      });
  };

  // hide keyboard on iOS
  function hideKeyBoard() {
    Keyboard.dismiss();
  }
  return (
    <TouchableWithoutFeedback onPress={hideKeyBoard}>
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            width: 32,
            height: 32,
            borderRadius: 16,
            backgroundColor: "rgba(21,22,48,0.1)",
            justifyContent: "center",
            alignItems: "center",
            marginLeft: 20,
          }}
        >
          <Ionicons name="ios-arrow-round-back" size={32} color="#e9446a" />
        </TouchableOpacity>
        <Text style={styles.greeting}>{"Sign up to get started"}</Text>
        {errorMessage ? (
          <View style={styles.errorMessage}>
            {errorMessage && <Text style={styles.error}>{errorMessage}</Text>}
          </View>
        ) : null}

        {/* Form Container*/}
        <View style={styles.form}>
          {/* Username */}
          <View>
            <Text style={styles.inputTitle}>Username</Text>
            <TextInput
              style={styles.input}
              autoCapitalize="none"
              onChangeText={(username) => {
                setUsername(username);
              }}
            />
          </View>
          {/* Email Address */}
          <View style={{ marginTop: 32 }}>
            <Text style={styles.inputTitle}>Email Address</Text>
            <TextInput
              style={styles.input}
              autoCapitalize="none"
              onChangeText={(email) => {
                setEmail(email);
              }}
            />
          </View>
          {/* Password */}
          <View style={{ marginTop: 32 }}>
            <Text style={styles.inputTitle}>Password</Text>
            <TextInput
              style={styles.input}
              secureTextEntry
              autoCapitalize="none"
              onChangeText={(password) => {
                setPassword(password);
              }}
            />
          </View>
        </View>
        {/* Sign Up Button */}
        <TouchableOpacity style={styles.button} onPress={() => SignUp()}>
          <Text style={{ fontWeight: "bold", color: "#fff" }}>Sign up</Text>
        </TouchableOpacity>
        {islogginIn ? (
          <Lottie
            source={load}
            autoPlay
            loop
            style={{ height: height / 6, width: 120, marginLeft: 35 }}
          />
        ) : null}
        {/* Already have an account */}
        <TouchableOpacity
          style={styles.new}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={{ color: "#414959", fontSize: 13 }}>
            Already have an account?
            <Text style={{ fontWeight: "500", color: "#e9446a" }}>Log in</Text>
          </Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight + 20,
    backgroundColor: theme.COLORS.SECONDARY,
  },
  greeting: {
    marginTop: 32,
    fontSize: 18,
    fontWeight: "500",
    textAlign: "center",
    fontFamily: "AirbnbCereal-Medium",
    color: "#000a43",
  },
  errorMessage: {
    marginTop: 20,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 30,
  },
  error: {
    color: theme.COLORS.ERROR,
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
  },
  form: {
    marginBottom: 38,
    marginHorizontal: 30,
    marginTop: 40,
  },
  inputTitle: {
    color: "#8a8f9e",
    fontSize: 13,
    textTransform: "uppercase",
    fontFamily: "AirbnbCereal-Medium",
  },
  input: {
    borderBottomColor: "#8a8f9e",
    borderBottomWidth: StyleSheet.hairlineWidth,
    height: height / 20,
    fontSize: 15,
    color: "#161f3d",
  },
  button: {
    marginHorizontal: 30,
    backgroundColor: "#e9446a",
    borderRadius: 4,
    height: height / 17,
    alignItems: "center",
    justifyContent: "center",
  },
  new: {
    marginTop: 30,
    alignSelf: "center",
  },
});
export default SignUp;
