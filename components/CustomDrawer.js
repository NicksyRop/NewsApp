import React from "react";
import { BackHandler } from "react-native";
import { View, Text, Image, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import AsyncStorage from "@react-native-async-storage/async-storage";

import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
const CustomDrawer = (props) => {
  const removeValue = async () => {
    try {
      await AsyncStorage.removeItem("user");
    } catch (e) {
      console.log("Done.");
    }
  };
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{ backgroundColor: "#0DA32F" }}
      >
        <Image
          source={require("../assets/avatar.png")}
          style={{
            height: 80,
            width: 80,
            borderRadius: 40,
            marginBottom: 10,
            marginLeft: 30,
          }}
        />
        <Text style={{ color: "white", fontSize: 16, marginLeft: 30 }}>
          User name
        </Text>
        <View style={{ flex: 1, backgroundColor: "white", paddingTop: 10 }}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View style={{ borderTopWidth: 1, borderColor: "#276D75", padding: 20 }}>
        <TouchableOpacity
          onPress={() => {
            removeValue();
            BackHandler.exitApp();
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons name="log-out-outline" size={22} />
            <Text style={{ fontSize: 15, marginLeft: 5 }}>Sign Out</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomDrawer;
