import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
//import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, Platform } from "react-native";
//import * as Font from "expo-font";
import { useFonts } from "expo-font";
import { Authorization } from "./src/screens/Authorization";
import { PasswordRecovery1 } from "./src/screens/PasswordRecovery1";
import { PasswordRecovery2 } from "./src/screens/PasswordRecovery2";
import { PasswordRecovery3 } from "./src/screens/PasswordRecovery3";
import { SupportTicket } from "./src/screens/SupportTicket";
import { RateUs } from "./src/screens/RateUs";
import AppLoading from "expo";
import { ProgressCustom } from "./src/components/ProgressCustom_copy";
import { Preloader } from "./src/screens/Preloader";

function HomeScreen({ navigation }) {
  return <Authorization title={"Вход в систему"} buttonText={"Вход"} buttonVisibility={false} />;
}

function PassRec1({ navigation }) {
  return <PasswordRecovery1 title={"Восстановление пароля"} buttonText={"Дальше"} buttonVisibility={false} />;
}

function PassRec2({ navigation }) {
  return <PasswordRecovery2 title={"Восстановление пароля"} buttonText={"Дальше"} contact={"----это проп----"} buttonVisibility={false} />;
}

function PassRec3({ navigation }) {
  return <PasswordRecovery3 title={"Восстановление пароля"} buttonText={"Дальше"} buttonVisibility={false} />;
}

const Stack = createStackNavigator();

export default function App() {
  let customFonts = {
    "SF-Display-Regular": require("./assets/fonts/SFProDisplay-Regular.ttf"),
    "SF-Display-Medium": require("./assets/fonts/SFProDisplay-Medium.ttf"),
    "SF-Display-Semibold": require("./assets/fonts/SFProDisplay-Semibold.ttf"),
    "SF-Text-Regular": require("./assets/fonts/SF-UI-Text-Regular.ttf"),
    "SF-Text-Medium": require("./assets/fonts/SF-UI-Text-Medium.ttf"),
    "SF-Text-Semibold": require("./assets/fonts/SF-UI-Text-Semibold.ttf"),
  };

  const [loaded, error] = useFonts(customFonts);

  // async function loadApp() {
  //   await Font.loadAsync(customFonts);
  // }
  // const [isReady, setIsready] = useState(false);

  return !loaded ? (
    <Preloader />
  ) : (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Вход в систему'
        screenOptions={{
          headerTitleAlign: "center",
          headerBackTitle: "",
          cardStyle: { backgroundColor: "#fff" },

          headerTintColor: "#10112A",
          headerTitleStyle: {},
        }}>
        <Stack.Screen name='Вход в систему' component={HomeScreen} />
        <Stack.Screen name='Восстановление пароля1' component={PassRec1} />
        <Stack.Screen name='Восстановление пароля2' component={PassRec2} />
        <Stack.Screen name='Восстановление пароля3' component={PassRec3} />
      </Stack.Navigator>
      {/* <RateUs buttonText={"Оценить"} buttonVisibility={false} />
       <ProgressCustom />
       <Preloader buttonVisibility={false} /> */}
    </NavigationContainer>
  );
}
