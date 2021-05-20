import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert } from "react-native";

import { Logo } from "../components/Logo";
import { ButtonCustom } from "../components/ButtonCustom";
import { NavbarBottom } from "../components/NavbarBottom";
import { stylesRegularFont } from "../../styles/regularFont";
import { stylesContainer } from "../../styles/container";

export const RateUs = (props) => {
  return (
    <View style={[stylesRegularFont.regularFont, { flex: 1, marginTop: 85 }]}>
      <View style={[stylesContainer.container, { flex: 1 }]}>
        <Logo />
        <View style={styles.rateContainer}>
          <Image source={require("../../assets/img/stars.png")} style={{ height: 48, width: 270 }} />
          <Text style={{ paddingVertical: 10, lineHeight: 22, fontSize: 17, fontFamily: "SF-Display-Semibold" }}>Оцените нас</Text>
          <Text style={{ textAlign: "center", fontSize: 15 }}>
            Ну правда, вам сложно потратить одну минуту, чтобы поставить нам пять звезд? Неужели мы этого не достойны? Раз уж вы скачали это
            приложение несмотря на существование на торрентах слитых курсов, мы точно этого заслуживаем.
          </Text>
        </View>
        <View style={{ marginTop: "auto", justifyContent: "flex-end" }}>
          <ButtonCustom buttonText={props.buttonText} />
        </View>
        <TouchableOpacity
          //behavior={Platform.OS == "ios" ? "padding" : "height"}
          onPress={() => Alert.alert("Так уж и быть, верим, в другой раз")}
          style={[styles.button, { fontFamily: "SF-Display-Semibold" }]}>
          <Text style={styles.buttonText}>В другой раз, может быть</Text>
        </TouchableOpacity>
        <TouchableOpacity
          //behavior={Platform.OS == "ios" ? "padding" : "height"}
          onPress={() => Alert.alert("Мы вам какое плохое зло сделали?")}
          style={[styles.button]}>
          <Text style={[styles.buttonText, { fontFamily: "SF-Display-Regular" }]}>Никогда</Text>
        </TouchableOpacity>
      </View>
      <NavbarBottom />
    </View>
  );
};

const styles = StyleSheet.create({
  rateContainer: {
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 50,
    //height: 275,
    backgroundColor: "#F1F4F7",
    borderRadius: 14,
  },
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
