import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Alert,
  Platform,
} from "react-native";

export const AbortPasswordRecoveryButton = () => {
  return (
    <View style={{ marginTop: 20 }}>
      <TouchableOpacity
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        onPress={() => Alert.alert("к авторизации")}
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
