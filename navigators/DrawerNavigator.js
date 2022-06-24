import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";
import Ionicons from "react-native-vector-icons/Ionicons";

import Main from "./Main";
import Logout from "../screens/Logout";
import CustomDrawer from "../components/CustomDrawer";
import Settings from "../screens/Settings";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Drawer.Screen
        name="Home"
        component={Main}
        options={{
          drawerIcon: () => <Ionicons name="home-outline" size={22} />,
        }}
      />
      <Drawer.Screen
        name="Settings"
        component={Settings}
        options={{
          drawerIcon: () => <Ionicons name="settings-outline" size={22} />,
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
