import React from "react";
import { useNavigation } from "@react-navigation/native";

import { View, TextInput, KeyboardAvoidingView, Text } from "react-native";
import { Navbar } from "../components/Navbar";
import { Logo } from "../components/Logo";
import { ButtonCustom } from "../components/ButtonCustom";
import { AbortPasswordRecoveryButton } from "../components/AbortPasswordRecoveryButton";
import { stylesField } from "../../styles/field";
import { stylesRegularFont } from "../../styles/regularFont";
import { stylesContainer } from "../../styles/container";

export const PasswordRecovery2 = (props) => {
  const navigation = useNavigation();
  const gotoRec3 = () => {
    navigation.navigate("Восстановление пароля3");
  };

  return (
    <View style={[stylesRegularFont.regularFont, { flex: 1 }]}>
      <Navbar title='Восстановление пароля' />
      <View style={[stylesContainer.container, { flex: 1 }]}>
        <Logo showTexterra={false} />
        <Text style={{ paddingBottom: 25 }}>Введите код подтверждения, который был отправлен вам на {props.contact}</Text>
        <TextInput
          style={stylesField.field}
          placeholder='Код подтверждения'
          placeholderTextColor='#6F707A'
          autoCorrect={false}
          autoCapitalize='none'
          keyboardType='numeric'
        />
        <KeyboardAvoidingView style={{ marginTop: "auto", justifyContent: "flex-end" }}>
          <ButtonCustom buttonText={props.buttonText} onClick={gotoRec3} />
          <AbortPasswordRecoveryButton />
        </KeyboardAvoidingView>
      </View>
    </View>
  );
};
