import React from "react";
import { StyleSheet, Text, View } from "react-native";

export const Navbar = (props) => {
  return (
    <View style={styles.navbar}>
      <Text style={styles.navbarTitle}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    backgroundColor: "#e9e9e9",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingTop: 50,
    paddingBottom: 11,
  },
  navbarTitle: {
    lineHeight: 22,
    fontSize: 17,
    fontFamily: "SF-Display-Semibold",
  },
});
