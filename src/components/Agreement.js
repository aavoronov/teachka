import React from "react";
import { StyleSheet, Text, View, Alert } from "react-native";

export const Agreement = (props) => {
  return (
    <View style={styles.agreement}>
      <Text
        style={styles.agreementText}
        onPress={() => {
          Alert.alert("test");
        }}>
        Пользовательское соглашение
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  agreement: {
    marginTop: "auto",
    justifyContent: "flex-end",
    alignItems: "center",
    borderTopColor: "#F1F4F7",
    borderTopWidth: 1,
  },
  agreementText: {
    fontSize: 14,
    paddingVertical: 15,
  },
});
