//import { StatusBar } from 'expo-status-bar';
import React from "react";
import { KeyboardAvoidingView, StyleSheet, View } from "react-native";
// import { AppLoading } from "expo-app-loading";
import { Navbar } from "./src/components/Navbar";
import { Fieldset } from "./src/components/Fieldset";
import { Logo } from "./src/components/Logo";
import { useFonts } from "expo-font";
import { ButtonCustom } from "./src/components/ButtonCustom";
import { Agreement } from "./src/components/Agreement";

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
  return (
    <View style={[styles.regularFont, { flex: 1 }]}>
      <Navbar title='Вход в систему' />
      <View style={[styles.container, { flex: 1 }]}>
        <Logo showTexterra={true} />
        <Fieldset secure={true} />
        <KeyboardAvoidingView
          style={{ marginTop: "auto", justifyContent: "flex-end" }}>
          <ButtonCustom buttonText='Это проп' />
        </KeyboardAvoidingView>
      </View>
      <Agreement />
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
    paddingBottom: 20,
  },
});
