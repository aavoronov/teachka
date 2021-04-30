import React from "react";
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Keyboard,
  Platform,
} from "react-native";

export const ButtonCustom = (props) => {
  return (
    <View style={{ marginTop: 20 }}>
      <TouchableOpacity
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        onPress={() => Keyboard.dismiss}
        style={[styles.button, styles.buttonGreen]}>
        <Text style={styles.buttonText}>{props.buttonText}</Text>
      </TouchableOpacity>
    </View>
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
