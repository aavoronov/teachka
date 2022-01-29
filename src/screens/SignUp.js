import { AuthFieldset } from "../components/AuthFieldset";
import { Logo } from "../components/Logo";
import { ButtonCustom } from "../components/ButtonCustom";
import { Agreement } from "../components/Agreement";

import { stylesRegularFont } from "../../styles/regularFont";
import { stylesContainer } from "../../styles/container";
import { useNavigation } from "@react-navigation/native";

import React, { useState } from "react";
import { View, StyleSheet, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Text } from "react-native";
import { THEME } from "../theme";

export const SignUp = ({ buttonText = "Регистрация", buttonBottomText = "У меня уже есть аккаунт", signUpHandler }) => {
  // const signUp = () => signUpHandler(true);
  const navigation = useNavigation();
  const gotoSignUp = () => {
    navigation.popToTop();
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

  const onSubmitHandler = () => {
    const payload = {
      login,
      password,
      passwordRepeat,
    };
    if (!login.includes(" ") && !password.includes(" ") && !passwordRepeat.includes(" ")) {
      if (password == passwordRepeat) {
        fetch(`${THEME.API_URL}/signup`, {
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
        setMessage("пароль и подтверждение не совпадают");
      }
    } else {
      setIsError(true);
      setMessage("логин и пароль не должны содержать пробелов");
    }
  };

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");

  const [isError, setIsError] = useState(false);
  const [message, setMessage] = useState("");

  const getMessage = () => {
    const status = isError ? `Ошибка: ` : `Успех: `;
    console.log("l " + login + "\np " + password + "\npr " + passwordRepeat);
    return status + message;
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={[stylesRegularFont.regularFont, { flex: 1 }]}>
      <View style={[stylesContainer.container, { flex: 1, paddingBottom: 0 }]}>
        <Logo />
        <AuthFieldset isSignUp={true} setLogin={setLogin} setPassword={setPassword} setPasswordRepeat={setPasswordRepeat} />
        <Text style={{ color: isError ? THEME.DANGER_COLOR : THEME.MAIN_GREENr }}>{message ? getMessage() : null}</Text>
        <View style={{ marginTop: "auto", justifyContent: "flex-end" }}>
          {/* <ButtonCustom buttonText={buttonText} onClick={signUp} /> */}
          <ButtonCustom buttonText={buttonText} onClick={onSubmitHandler} />
          <ButtonCustom buttonText={buttonBottomText} onClick={gotoSignUp} />
        </View>

        <Agreement />
      </View>
    </TouchableWithoutFeedback>
  );
};
