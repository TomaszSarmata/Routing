import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./components/HomeScreen";
import ProfileScreen from "./components/ProfileScreen";
import Cards from "./components/Cards";
import Buttons from "./components/Buttons";
import Scroll from "./components/HorizontallScroll";
import Forms from "./components/Forms";
import Badges from "./components/Badges";
import Buttons2 from "./components/Buttons2";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: "Welcome" }}
      />
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="HomeTab"
          component={HomeStack}
          options={{ headerShown: false }}
        />
        <Tab.Screen name="Cards" component={Cards} />
        <Tab.Screen name="Buttons" component={Buttons} />
        <Tab.Screen name="Buttons2" component={Buttons2} />
        <Tab.Screen name="Scroll" component={Scroll} />
        <Tab.Screen name="Forms" component={Forms} />
        <Tab.Screen name="Badges" component={Badges} />
        {/* <Tab.Screen
          name="ProfileTab"
          component={ProfileScreen}
          initialParams={{ name: "Guest" }}
        /> */}
      </Tab.Navigator>
      <StatusBar style="auto" />
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
