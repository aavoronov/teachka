import React, { useState } from "react";
import { View, TextInput, KeyboardAvoidingView, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { Logo } from "../components/Logo";
import { ButtonCustom } from "../components/ButtonCustom";
import { AbortPasswordRecoveryButton } from "../components/AbortPasswordRecoveryButton";
import { PassRecoveryFieldset } from "../components/PassRecoveryFieldset";
import { stylesField } from "../../styles/field";
import { stylesRegularFont } from "../../styles/regularFont";
import { stylesContainer } from "../../styles/container";

export const PasswordRecovery3 = (props) => {
  const [secure, setSecure] = useState(props.secure);
  const gotoAuth = () => {
    navigation.popToTop();
  };
  return (
    <View style={[stylesRegularFont.regularFont, { flex: 1 }]}>
      <View style={[stylesContainer.container, { flex: 1 }]}>
        <Logo showTexterra={false} />
        <Text style={{ paddingBottom: 25 }}>Задайте новый пароль</Text>
        <PassRecoveryFieldset secure={true} />
        <KeyboardAvoidingView style={{ marginTop: "auto", justifyContent: "flex-end" }}>
          <ButtonCustom buttonText={props.buttonText} onPress={gotoAuth} />
          <AbortPasswordRecoveryButton />
        </KeyboardAvoidingView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textinputIcon: {
    right: 10,
    backgroundColor: "#f00",
    marginRight: 100,
  },
});
