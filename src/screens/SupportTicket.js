import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Navbar } from "../components/Navbar";
import { Logo } from "../components/Logo";
import { ButtonCustom } from "../components/ButtonCustom";
import { NavbarBottom } from "../components/NavbarBottom";
import { stylesRegularFont } from "../../styles/regularFont";
import { stylesContainer } from "../../styles/container";

export const SupportTicket = (props) => {
  return (
    <View style={[stylesRegularFont.regularFont, { flex: 1 }]}>
      <Navbar title={props.title} />
      <View style={[stylesContainer.container, { flex: 1 }]}>
        <Logo showTexterra={false} />
        <View style={styles.supportInput}>
          <TextInput placeholder='Опишите свои вопросы, замечания или предложения...' placeholderTextColor='#6F707A' multiline={true} />
        </View>
        <View style={{ marginTop: "auto", justifyContent: "flex-end" }}>
          <ButtonCustom buttonText={props.buttonText} />
        </View>
      </View>
      <NavbarBottom />
    </View>
  );
};

const styles = StyleSheet.create({
  supportInput: {
    padding: 10,
    height: 250,
    backgroundColor: "#F1F4F7",
    borderRadius: 14,
  },
});
