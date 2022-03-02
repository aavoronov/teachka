import React from "react";
import { StyleSheet, Image, View } from "react-native";

export const Logo = () => {
  return (
    <View style={styles.logoContainer}>
      <View style={styles.logo}>
        <Image source={require("../../assets/img/studyline-logo.png")} fadeDuration={0} style={{ width: 134, height: 28 }} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  logoContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 30,
    paddingBottom: 55,
  },
  logo: {
    paddingHorizontal: 10,
  },
});
