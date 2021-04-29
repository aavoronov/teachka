import React from "react";
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Keyboard,
  Platform,
} from "react-native";
import { useFonts } from "expo-font";
export const ButtonCustom = (props) => {
  return (
    <KeyboardAvoidingView
      style={{ marginTop: "auto", justifyContent: "flex-end" }}>
      <TouchableOpacity
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        onPress={() => Keyboard.dismiss}
        style={[styles.button, styles.buttonGreen]}>
        <Text style={styles.buttonText}>{props.buttonText}</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    width: "100%",
    borderRadius: 10,
  },
  buttonGreen: {
    backgroundColor: "#A2C81F",
  },
  buttonText: {
    lineHeight: 22,
    fontSize: 17,
    fontFamily: "SF-Display-Semibold",
    paddingVertical: 14,
    color: "#fff",
  },
});
