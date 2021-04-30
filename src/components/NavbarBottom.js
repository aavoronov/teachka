import React from "react";
import { StyleSheet, Text, View, Alert, TouchableOpacity, Image } from "react-native";

export const NavbarBottom = (props) => {
  return (
    <View style={styles.navbarBottom}>
      <TouchableOpacity onPress={() => alert("Профиль")}>
        <View style={styles.buttonContainer}>
          <Image source={require("../../assets/img/profile-icon.png")} style={{ width: 35, height: 35 }} />
          <Text>Профиль</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => alert("Курсы")}>
        <View style={styles.buttonContainer}>
          <Image source={require("../../assets/img/courses-icon.png")} style={{ width: 35, height: 35 }} />
          <Text>Курсы</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => alert("Поддержка")}>
        <View style={styles.buttonContainer}>
          <Image source={require("../../assets/img/support-icon.png")} style={{ width: 35, height: 35 }} />
          <Text>Поддержка</Text>
        </View>
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
    paddingVertical: 5,
    paddingHorizontal: 22,
    alignItems: "center",
  },
});
