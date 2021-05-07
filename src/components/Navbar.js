import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import { DisplayReg } from "../components/ui/DisplayReg";
import { DisplaySemi } from "../components/ui/DisplaySemi";
import { THEME } from "../theme";

export const Navbar = ({ title, buttonVisibility }) => {
  return (
    <View style={[styles.navbar, { flex: title.length < THEME.NAVBAR_TITLE_LINE_LENGTH ? 0.1 : 0.15 }]}>
      {buttonVisibility && (
        <TouchableOpacity
          style={[
            styles.button,
            {
              paddingBottom: title.length < THEME.NAVBAR_TITLE_LINE_LENGTH ? 11 : 20,
            },
          ]}>
          <Image source={require("../../assets/img/back-icon.png")} fadeDuration={0} style={{ width: 30, height: 30 }} />
          <DisplayReg style={{ color: THEME.PURPLE, fontSize: 17 }}>Назад</DisplayReg>
        </TouchableOpacity>
      )}
      <DisplaySemi style={styles.navbarTitle}>{title}</DisplaySemi>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    flexDirection: "row",
    backgroundColor: "#e9e9e9",
    justifyContent: "center",
    alignItems: "flex-end",
    // paddingTop: 50,
    paddingBottom: 16,
  },
  navbarTitle: {
    lineHeight: 22,
    fontSize: 17,
    fontFamily: "SF-Display-Semibold",
    maxWidth: "66%",
    textAlign: "center",
  },
  button: {
    flexDirection: "row",
    position: "absolute",
    left: 0,
    paddingBottom: 11,
  },
});
