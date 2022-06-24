import React, { useEffect, useState, BackHandler } from "react";
import RNExitApp from "react-native-exit-app";

import { View, Text } from "react-native";

const Logout = (navigation) => {
  const removeValue = async () => {
    try {
      await AsyncStorage.removeItem("user");
    } catch (e) {}

    console.log("Done.");
  };

  useEffect(() => {
    removeValue();
    RNExitApp.exitApp();
  }, []);

  return <View></View>;
};

export default Logout;
