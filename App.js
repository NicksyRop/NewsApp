import "react-native-gesture-handler";

import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect, useMemo } from "react";

import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NativeBaseProvider, Text, Box, Spinner, Heading } from "native-base";
import { SafeAreaProvider } from "react-native-safe-area-context";

//stacks
import { RootStackNav } from "./navigators/RootStackNav";
import Main from "./navigators/Main";
import AsyncStorage from "@react-native-async-storage/async-storage";
import DrawerNavigator from "./navigators/DrawerNavigator";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);

  const getToken = async () => {
    const jsonValue = await AsyncStorage.getItem("user");
    return JSON.parse(jsonValue);
  };

  useEffect(() => {
    setUser(getToken());

    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);
  console.log(user);
  if (isLoading) {
    return (
      <NativeBaseProvider>
        <Box space={2} flex={1} alignItems="center" justifyContent="center">
          <Spinner accessibilityLabel="Loading" />
          <Heading color="primary.500" fontSize="md">
            Loading
          </Heading>
        </Box>
      </NativeBaseProvider>
    );
  }

  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <SafeAreaProvider>
          {user._W !== null ? <DrawerNavigator /> : <RootStackNav />}
        </SafeAreaProvider>
      </NativeBaseProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
