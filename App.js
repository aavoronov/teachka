//import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
// import { AppLoading } from "expo-app-loading";
import Font from "expo-font";
import { Authorization } from "./src/screens/Authorization";
import { PasswordRecovery1 } from "./src/screens/PasswordRecovery1";
import { PasswordRecovery2 } from "./src/screens/PasswordRecovery2";
import { PasswordRecovery3 } from "./src/screens/PasswordRecovery3";
import { SupportTicket } from "./src/screens/SupportTicket";
import { RateUs } from "./src/screens/RateUs";
import AppLoading from "expo-app-loading";

export default function App() {
  let customFonts = {
    "SF-Display-Regular": require("./assets/fonts/SFProDisplay-Regular.ttf"),
    "SF-Display-Medium": require("./assets/fonts/SFProDisplay-Medium.ttf"),
    "SF-Display-Semibold": require("./assets/fonts/SFProDisplay-Semibold.ttf"),
    "SF-Text-Regular": require("./assets/fonts/SF-UI-Text-Regular.ttf"),
    "SF-Text-Medium": require("./assets/fonts/SF-UI-Text-Medium.ttf"),
    "SF-Text-Semibold": require("./assets/fonts/SF-UI-Text-Semibold.ttf"),
  };

  // const [fontsLoaded, setFontsLoaded] = useState(false);

  // async function _loadFontsAsync() {
  //   await Font.loadAsync(customFonts);
  //   setFontsLoaded( !fontsLoaded );
  // }

  // const [pageId, setPageId] = useState(1);

  // {
  //   switch (pageId) {
  //     case 1:
  //       return (
  //         <TouchableOpacity
  //           onPress={() => {
  //             setPageId(pageId++);
  //           }}>
  //           <Authorization />
  //         </TouchableOpacity>
  //       );
  //     case 2:
  //       return (
  //         <TouchableOpacity
  //           onPress={() => {
  //             setPageId(pageId++);
  //           }}>
  //           <PasswordRecovery1 />
  //         </TouchableOpacity>
  //       );
  //     case 3:
  //       return (
  //         <TouchableOpacity
  //           onPress={() => {
  //             setPageId(pageId++);
  //           }}>
  //           <PasswordRecovery2 />
  //         </TouchableOpacity>
  //       );
  //     case 4:
  //       return (
  //         <TouchableOpacity
  //           onLongPress={() => {
  //             setPageId(pageId++);
  //           }}>
  //           <PasswordRecovery3 />
  //         </TouchableOpacity>
  //       );
  //   }
  // }

  // if (!fontsLoaded) return null;
  // else
  // return (
  // {
  //   // _loadFontsAsync();
  //   if (!fontsLoaded) {
  //     <Authorization />
  //   } else {
  //     <AppLoading />
  //   }
  // }
  // );
  // return <Authorization title={"Вход в систему"} buttonText={"Вход"} />;
  // return <PasswordRecovery1 title={"Восстановление пароля"} buttonText={"Дальше"} />;
  // return <PasswordRecovery2 title={"Восстановление пароля"} buttonText={"Дальше"} contact={"----это проп----"} />;
  // return <PasswordRecovery3 title={"Восстановление пароля"} buttonText={"Дальше"} />;
  // return <SupportTicket title={"Заявка в поддержку"} buttonText={"Отправить"} />;
  return <RateUs buttonText={"Оценить"} />;
}

const styles = StyleSheet.create({});
