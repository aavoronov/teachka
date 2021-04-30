import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

export const NavbarBottom = (props) => {
  return (
    <View style={styles.navbarBottom}>
      <TouchableOpacity onPress={() => alert("Профиль")} style={styles.buttonContainer}>
        <Image source={require("../../assets/img/profile-icon.png")} style={{ width: 35, height: 35 }} />
        <Text>Профиль</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => alert("Курсы")} style={styles.buttonContainer}>
        <Image source={require("../../assets/img/courses-icon.png")} style={{ width: 35, height: 35 }} />
        <Text>Курсы</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => alert("Поддержка")} style={styles.buttonContainer}>
        <Image source={require("../../assets/img/support-icon.png")} style={{ width: 35, height: 35 }} />
        <Text>Поддержка</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navbarBottom: {
    bottom: 0,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderTopColor: "#F1F4F7",
    borderTopWidth: 1,
  },
  buttonContainer: {
    width: "30%",
    paddingVertical: 5,
    alignItems: "center",
  },
});
