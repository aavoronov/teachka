//import { StatusBar } from 'expo-status-bar';
import React from "react";
import { StyleSheet } from "react-native";
// import { AppLoading } from "expo-app-loading";
import { useFonts } from "expo-font";
import { Authorization } from "./src/screens/Authorization";
import { PasswordRecovery1 } from "./src/screens/PasswordRecovery1";

export default function App() {
  let [fontsLoaded] = useFonts({
    "SF-Display-Regular": require("./assets/fonts/SFProDisplay-Regular.ttf"),
    "SF-Display-Medium": require("./assets/fonts/SFProDisplay-Medium.ttf"),
    "SF-Display-Semibold": require("./assets/fonts/SFProDisplay-Semibold.ttf"),
    "SF-Text-Regular": require("./assets/fonts/SF-UI-Text-Regular.ttf"),
    "SF-Text-Medium": require("./assets/fonts/SF-UI-Text-Medium.ttf"),
    "SF-Text-Semibold": require("./assets/fonts/SF-UI-Text-Semibold.ttf"),
  });

  // if (!fontsLoaded) return null;
  // else
  //return <Authorization />;
  return <PasswordRecovery1 />;
}

const styles = StyleSheet.create({});
