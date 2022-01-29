import { AuthFieldset } from "../components/AuthFieldset";
import { Logo } from "../components/Logo";
import { ButtonCustom } from "../components/ButtonCustom";
import { Agreement } from "../components/Agreement";

import { stylesRegularFont } from "../../styles/regularFont";
import { stylesContainer } from "../../styles/container";

import React, { useState } from "react";
import { View, StyleSheet, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { THEME } from "../theme";

export const Authorization = ({ buttonText = "Вход", buttonBottomText = "Регистрация", signInHandler }) => {
  const signIn = () => signInHandler(true);
  const navigation = useNavigation();
  const gotoSignUp = () => {
    navigation.navigate("Регистрация");
  };

  const onSubmitHandler = () => {
    const payload = {
      login,
      password,
    };
    if (!login.includes(" ") && !password.includes(" ")) {
      fetch(`${THEME.API_URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      })
        .then(async (res) => {
          try {
            const jsonRes = await res.json();
            if (res.status !== 200) {
              setIsError(true);
              setMessage(jsonRes.message);
            } else {
              onLoggedIn(jsonRes.token);
              setIsError(false);
              setMessage(jsonRes.message);
            }
          } catch (err) {
            console.log(err);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      setIsError(true);
      setMessage("логин и пароль не должны содержать пробелов");
    }
  };

  const onLoggedIn = (token) => {
    fetch(`${THEME.API_URL}/private`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then(async (res) => {
        try {
          const jsonRes = await res.json();
          if (res.status === 200) {
            setMessage(jsonRes.message);
          }
        } catch (err) {
          console.log(err);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const [isError, setIsError] = useState(false);
  const [message, setMessage] = useState("");

  const getMessage = () => {
    const status = isError ? `Ошибка: ` : `Успех: `;
    console.log("l " + login + "\np " + password);
    return status + message;
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={[stylesRegularFont.regularFont, { flex: 1 }]}>
      <View style={[stylesContainer.container, { flex: 1, paddingBottom: 0 }]}>
        <Logo />
        <AuthFieldset setLogin={setLogin} setPassword={setPassword} />
        <Text style={{ color: isError ? THEME.DANGER_COLOR : THEME.MAIN_GREEN }}>{message ? getMessage() : null}</Text>
        <View style={{ marginTop: "auto", justifyContent: "flex-end" }}>
          {/* <ButtonCustom buttonText={buttonText} onClick={signIn} /> */}
          <ButtonCustom buttonText={buttonText} onClick={(onSubmitHandler, signIn)} />
          <ButtonCustom buttonText={buttonBottomText} onClick={gotoSignUp} />
        </View>

        <Agreement />
      </View>
    </TouchableWithoutFeedback>
  );
};
