import React from "react";
import { Text, StyleSheet } from "react-native";

export const TextReg = (props) => {
  return <Text style={{ ...styles.default, ...props.style }}>{props.children}</Text>;
};

const styles = StyleSheet.create({
  default: {
    fontFamily: "SF-Text-Regular",
  },
});
