import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Feather";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

//screens
import All from "../screens/All";
import Bussiness from "../screens/Bussiness";
import Health from "../screens/Health";
import Sports from "../screens/Sports";
import Tech from "../screens/Tech";

const Tab = createBottomTabNavigator();

export default function Main() {
  return (
    <Tab.Navigator initialRouteName="All">
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
  );
}
