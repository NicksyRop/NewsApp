import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";

const height = Dimensions.get("window").height;

const Splash = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>Header</Text>
      </View>
      <View style={styles.footer}>
        <Text>Footer</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
    flex: 2,
    backgroundColor: "#15803d",
    height: height * 0.3,

    alignItems: "center",
    justifyContent: "center",
  },

  footer: {
    flex: 1,
    backgroundColor: "white",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
});

export default Splash;
