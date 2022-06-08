import { createStackNavigator } from "@react-navigation/stack";

import Login from "../Authentication/Login";
import Register from "../Authentication/Register";
import Splash from "../Authentication/Splash";
import Main from "../navigators/Main";

const Stack = createStackNavigator();

export function RootStackNav() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Main" component={Main} />
    </Stack.Navigator>
  );
}
