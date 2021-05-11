import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, StyleSheet, TouchableOpacity, Text, Alert, Platform } from "react-native";

export const AbortPasswordRecoveryButton = () => {
  const navigation = useNavigation();
  return (
    <View style={{ marginTop: 20 }}>
      <TouchableOpacity
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        onPress={() => navigation.popToTop()}
        style={[styles.button]}>
        <Text style={styles.buttonText}>Вход</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    width: "100%",
  },
  buttonText: {
    lineHeight: 22,
    fontSize: 17,
    fontFamily: "SF-Display-Semibold",
    paddingVertical: 14,
    color: "#A2C81F",
  },
});
