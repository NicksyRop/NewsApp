import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NativeBaseProvider, Text, Box } from "native-base";
const Tab = createBottomTabNavigator();
import Icon from "react-native-vector-icons/Feather";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

//screens
import All from "./screens/All";
import Bussiness from "./screens/Bussiness";
import Health from "./screens/Health";
import Sports from "./screens/Sports";
import Tech from "./screens/Tech";

export default function App() {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <Tab.Navigator>
          <Tab.Screen
            name="All"
            component={All}
            options={{
              tabBarLabel: "All",
              tabBarShowLabel: false,
              tabBarIcon: ({ color }) => (
                <Icon
                  name="home"
                  size={30}
                  color={color}
                  style={{ position: "relative" }}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Bussiness"
            component={Bussiness}
            options={{
              tabBarLabel: "Bussiness",
              tabBarShowLabel: false,

              tabBarIcon: ({ color }) => (
                <Icon
                  name="dollar-sign"
                  size={30}
                  color={color}
                  style={{ position: "relative" }}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Health"
            component={Health}
            options={{
              tabBarShowLabel: false,

              tabBarLabel: "Health",
              tabBarIcon: ({ color }) => (
                <Icon
                  name="heart"
                  size={30}
                  color={color}
                  style={{ position: "relative" }}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Sports"
            component={Sports}
            options={{
              tabBarLabel: "Sports",
              tabBarShowLabel: false,

              tabBarIcon: ({ color }) => (
                <MaterialIcons
                  name="sports-baseball"
                  size={30}
                  color={color}
                  style={{ position: "relative" }}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Tech"
            component={Tech}
            options={{
              tabBarLabel: "HomTeche",
              tabBarShowLabel: false,

              tabBarIcon: ({ color }) => (
                <FontAwesome
                  name="laptop"
                  size={30}
                  color={color}
                  style={{ position: "relative" }}
                />
              ),
            }}
          />
        </Tab.Navigator>
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
