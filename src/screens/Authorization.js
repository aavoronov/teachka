import { Navbar } from "../components/Navbar";
import { AuthFieldset } from "../components/AuthFieldset";
import { Logo } from "../components/Logo";
import { ButtonCustom } from "../components/ButtonCustom";
import { Agreement } from "../components/Agreement";
import { stylesRegularFont } from "../../styles/regularFont";
import { stylesContainer } from "../../styles/container";

import React from "react";
import { View, StyleSheet, KeyboardAvoidingView } from "react-native";

export const Authorization = () => {
  return (
    <View style={[stylesRegularFont.regularFont, { flex: 1 }]}>
      <Navbar title='Вход в систему' />
      <View style={[stylesContainer.container, { flex: 1 }]}>
        <Logo showTexterra={true} />
        <AuthFieldset secure={true} />
        <KeyboardAvoidingView
          style={{ marginTop: "auto", justifyContent: "flex-end" }}>
          <ButtonCustom buttonText='Это проп' />
        </KeyboardAvoidingView>
      </View>
      <Agreement />
    </View>
  );
};
