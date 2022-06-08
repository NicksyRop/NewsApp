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

const Register = ({ navigation }) => {
  const [data, setData] = useState({
    email: "",
    password: "",
    confirm_password: "",
    secureTextEntry: true,
    confirm_secureTextEntry: true,
    check_textInputChange: false,
  });

  const [emailError, setEmailError] = useState("");

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

  const handleConfirmPsswordText = (val) => {
    setData({
      ...data,
      confirm_password: val,
    });
  };

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  const confirmupdateSecureTextEntry = () => {
    setData({
      ...data,
      confirm_secureTextEntry: !data.confirm_secureTextEntry,
    });
  };

  const Register = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      name: "Nicksykkk",
      email: data.email,
      password: data.password,
      password_confirmation: data.confirm_password,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(
      "https://cryptic-fjord-14730.herokuapp.com/api/auth/register",
      requestOptions
    )
      .then((res) => res.json())
      .then((res) => {
        if (res.message != undefined) {
          console.log(raw);
          navigation.navigate("Login");
        } else {
          alert(res.email[0]);
        }
      })
      .catch((error) => console.log("error", error));

    // let data2 = JSON.stringify(data);
    // await AsyncStorage.setItem("user", data2);
    // navigation.replace("Login");
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text}>Register Now!</Text>
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
            onChangeText={(val) => handleConfirmPsswordText(val)}
          />
          <TouchableOpacity onPress={() => updateSecureTextEntry()}>
            {data.secureTextEntry ? (
              <Feather name="eye-off" color="green" size={20} />
            ) : (
              <Feather name="eye" color="green" size={20} />
            )}
          </TouchableOpacity>
        </View>

        <Text style={styles.textHeader}>Confirm Password</Text>
        <View style={[styles.action]}>
          <Feather name="lock" size={20} color="grey" />
          <TextInput
            placeholder="Your password"
            style={styles.TextInput}
            secureTextEntry={data.confirm_secureTextEntry}
            onChangeText={(val) => handlePsswordText(val)}
          />
          <TouchableOpacity onPress={() => confirmupdateSecureTextEntry()}>
            {data.confirm_secureTextEntry ? (
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
            <Text onPress={Register} style={styles.textSingin}>
              Sign Up
            </Text>
          </LinearGradient>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate("Login")}
          style={styles.signup}
        >
          <Text style={{ fontSize: 20, color: "#76a2e8" }}>Sighn In</Text>
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

export default Register;
