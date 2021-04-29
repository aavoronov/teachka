//import { StatusBar } from 'expo-status-bar';
import React from "react";
import { Button, StyleSheet, Text, View, AppLoading } from "react-native";
import { Navbar } from "./src/Navbar";
import { Fieldset } from "./src/Fieldset";
import { Logo } from "./src/Logo";
import { useFonts } from "expo-font";
import { ButtonCustom } from "./src/ButtonCustom";

export default function App() {
  let [fontsLoaded] = useFonts({
    "SF-Display-Regular": require("./assets/fonts/SFProDisplay-Regular.ttf"),
    "SF-Display-Medium": require("./assets/fonts/SFProDisplay-Medium.ttf"),
    "SF-Display-Semibold": require("./assets/fonts/SFProDisplay-Semibold.ttf"),
    "SF-Text-Regular": require("./assets/fonts/SF-UI-Text-Regular.ttf"),
    "SF-Text-Medium": require("./assets/fonts/SF-UI-Text-Medium.ttf"),
    "SF-Text-Semibold": require("./assets/fonts/SF-UI-Text-Semibold.ttf"),
  });

  return (
    <View style={[styles.regularFont, { flex: 1, paddingBottom: 30 }]}>
      <Navbar title='Вход в систему' />
      <View style={[styles.container, { flex: 1 }]}>
        <Logo showTexterra={true} />
        <Fieldset secure={true} />
        <ButtonCustom buttonText='test' />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  regularFont: {
    fontFamily: "SF-Display-Regular",
    fontSize: 17,
  },
  container: {
    paddingHorizontal: 24,
  },
});
