import { useNavigation } from "@react-navigation/native";

import React from "react";
import { View, TextInput, KeyboardAvoidingView } from "react-native";
import { Logo } from "../components/Logo";
import { ButtonCustom } from "../components/ButtonCustom";
import { AbortPasswordRecoveryButton } from "../components/AbortPasswordRecoveryButton";
import { stylesField } from "../../styles/field";
import { stylesRegularFont } from "../../styles/regularFont";
import { stylesContainer } from "../../styles/container";

export const PasswordRecovery1 = (props) => {
  const navigation = useNavigation();
  const gotoRec2 = () => {
    navigation.navigate("Восстановление пароля2");
  };

  return (
    <View style={[stylesRegularFont.regularFont, { flex: 1 }]}>
      <View style={[stylesContainer.container, { flex: 1 }]}>
        <Logo />
        <TextInput
          style={stylesField.field}
          placeholder='E-mail или номер телефона'
          placeholderTextColor='#6F707A'
          autoCorrect={false}
          autoCapitalize='none'
        />
        <KeyboardAvoidingView style={{ marginTop: "auto", justifyContent: "flex-end" }}>
          <ButtonCustom buttonText={props.buttonText} onClick={gotoRec2} />
          <AbortPasswordRecoveryButton />
        </KeyboardAvoidingView>
      </View>
    </View>
  );
};
