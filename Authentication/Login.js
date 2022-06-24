import React, { useState } from "react";
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import * as Animatable from "react-native-animatable";
import { LinearGradient } from "expo-linear-gradient";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { AuthenticationContext } from "../context/AuthenticationContext";

const Login = ({ navigation }) => {
  const [data, setData] = useState({
    email: "",
    password: "",
    secureTextEntry: true,
    check_textInputChange: false,
  });

  const textInputChange = (val) => {
    if (val.length !== 0) {
      setData({
        ...data,

        email: val,
        check_textInputChange: true,
      });
    } else {
      setData({
        ...data,

        email: val,
        check_textInputChange: false,
      });
    }
  };

  const handlePsswordText = (val) => {
    setData({
      ...data,
      password: val,
    });
  };
  const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("user", jsonValue);
    } catch (e) {
      console.log(e);
    }
  };

  const signIn = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      email: data.email,
      password: data.password,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(
      "https://jwt-node-api-nicksy.herokuapp.com/api/users/login",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {
        storeData(result);

        navigation.navigate("Main");
      })
      .catch((error) => console.log(error));
  };

  // const signIn = () => {
  //   var myHeaders = new Headers();
  //   myHeaders.append("Accept", "application/json, text/plain");
  //   myHeaders.append("Content-Type", "application/json");

  //   var raw = JSON.stringify({
  //     email: data.email,
  //     password: data.password,
  //   });

  //   var requestOptions = {
  //     method: "POST",
  //     headers: myHeaders,
  //     body: raw,
  //     redirect: "follow",
  //   };

  //   fetch(
  //     "https://cryptic-fjord-14730.herokuapp.com/api/auth/login",
  //     requestOptions
  //   )
  //     .then((res) => res.text())
  //     .then(async (res) => {
  //       if (res.access_token != undefined) {
  //         await AsyncStorage.setItem("token", res.access_token);
  //         let userinfo = JSON.stringify(res.user);
  //         await AsyncStorage.setItem("user", userinfo);
  //         navigation.replace("Main");
  //       } else {
  //         console.log(res);
  //       }
  //     })
  //     .catch((error) => console.log("error", error));
  // };

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text}>Welcome!</Text>
      </View>

      <Animatable.View style={styles.footer} animation="fadeInUpBig">
        <Text style={styles.textHeader}>Email</Text>
        <View style={styles.action}>
          <Icon name="user-o" size={20} color="grey" />
          <TextInput
            placeholder="Your email"
            style={styles.TextInput}
            autoCapitalize="none"
            onChangeText={(val) => textInputChange(val)}
          />
          {data.check_textInputChange ? (
            <Feather name="check-circle" color="green" size={20} />
          ) : null}
        </View>

        <Text style={styles.textHeader}>Password</Text>
        <View style={[styles.action]}>
          <Feather name="lock" size={20} color="grey" />
          <TextInput
            placeholder="Your password"
            style={styles.TextInput}
            secureTextEntry={data.secureTextEntry}
            onChangeText={(val) => handlePsswordText(val)}
          />
          <TouchableOpacity onPress={() => updateSecureTextEntry()}>
            {data.secureTextEntry ? (
              <Feather name="eye-off" color="green" size={20} />
            ) : (
              <Feather name="eye" color="green" size={20} />
            )}
          </TouchableOpacity>
        </View>

        <View style={styles.button}>
          <LinearGradient
            colors={["#4c669f", "#76a2e8", "#192f6a"]}
            style={styles.LinearGradient}
          >
            <Text onPress={signIn} style={styles.textSingin}>
              Sign In
            </Text>
          </LinearGradient>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate("Register")}
          style={styles.signup}
        >
          <Text style={{ fontSize: 20, color: "#76a2e8" }}>Sighn Up</Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // marginTop: StatusBar.currentHeight,
    flex: 1,
    backgroundColor: "#76a2e8",
  },
  text: {
    color: "white",
    paddingHorizontal: 20,
    paddingVertical: 50,
    fontSize: 20,
  },

  header: {
    flex: 1,
  },
  textHeader: {
    fontSize: 28,
    marginTop: 10,
  },
  action: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "grey",
    alignItems: "center",
    paddingBottom: 5,
  },
  TextInput: {
    paddingLeft: 10,
    flex: 1,
  },
  footer: {
    flex: 2,
    paddingHorizontal: 30,
    paddingVertical: 30,
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 10,
  },
  button: {
    marginTop: 30,
  },
  textSingin: {
    fontSize: 20,
    color: "white",
    textAlign: "center",
  },
  LinearGradient: {
    padding: 10,
    borderRadius: 20,
  },
  signup: {
    marginTop: 20,
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 20,
    padding: 10,
  },
});

export default Login;
