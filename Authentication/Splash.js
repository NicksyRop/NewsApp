import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Icon from "react-native-vector-icons/MaterialIcons";
import * as Animatable from "react-native-animatable";

const height = Dimensions.get("window").height;

const Splash = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Animatable.Image
          source={require("../assets/news.png")}
          resizeMode="contain"
          borderRadius={100}
          animation="bounceIn"
        />
      </View>
      <Animatable.View style={styles.footer} animation="fadeInUpBig">
        <Text style={styles.text}>Get news updates</Text>
        <Text style={styles.text2}>Sighn In</Text>
        <View style={styles.buton}>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <LinearGradient
              colors={["#4c669f", "#76a2e8", "#192f6a"]}
              style={styles.signIn}
            >
              <Text style={styles.textSign}>Get started</Text>
              <Icon name="navigate-next" size={20} color="white" />
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#76a2e8",
  },

  header: {
    flex: 2,

    alignItems: "center",
    justifyContent: "center",
  },

  footer: {
    flex: 1,
    backgroundColor: "white",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 30,
    paddingVertical: 50,
  },
  text: {
    fontSize: 28,
  },
  buton: {
    borderRadius: 5,
    marginTop: 15,
    padding: 10,
    width: Dimensions.get("window").width / 2,
    marginHorizontal: 80,
  },

  signIn: {
    padding: 5,
    borderRadius: 10,

    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },

  textSign: {
    fontSize: 18,
    paddingHorizontal: 10,

    color: "white",
  },
  text2: {
    fontSize: 18,
    paddingTop: 10,
  },
});

export default Splash;
