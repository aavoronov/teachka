import React, { useState } from "react";
import { View, TextInput, StyleSheet, Text } from "react-native";
import { Logo } from "../components/Logo";
import { ButtonCustom } from "../components/ButtonCustom";
import { NavbarBottom } from "../components/NavbarBottom";
import { stylesRegularFont } from "../../styles/regularFont";
import { stylesContainer } from "../../styles/container";
import { THEME } from "../theme";

export const SupportTicket = ({ buttonText, user }) => {
  const [supportText, setSupportText] = useState("");
  const [isError, setIsError] = useState(false);
  const [message, setMessage] = useState("");

  const getMessage = () => {
    const status = isError ? `Ошибка: ` : `Успех: `;
    return status + message;
  };

  const onSubmitHandler = () => {
    const datetime = new Date().toISOString().slice(0, 19).replace("T", " ");
    const payload = {
      user,
      supportText,
      datetime,
    };
    console.log(user + supportText + datetime);
    if (supportText.length) {
      fetch(`${THEME.API_URL}/support`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Authorization: `Bearer ${token}`,
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
              setSupportText("");
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
      setMessage("введите сообщение");
    }
  };

  return (
    <View style={[stylesRegularFont.regularFont, { flex: 1 }]}>
      <View style={[stylesContainer.container, { flex: 1 }]}>
        <Logo />
        <View style={styles.supportInput}>
          <TextInput
            placeholder='Опишите свои вопросы, замечания или предложения...'
            placeholderTextColor='#6F707A'
            multiline={true}
            onChangeText={setSupportText}
          />
        </View>
        <Text style={{ color: isError ? THEME.DANGER_COLOR : THEME.MAIN_GREEN }}>{message ? getMessage() : null}</Text>

        <View style={{ marginTop: "auto", justifyContent: "flex-end" }}>
          <ButtonCustom buttonText={buttonText} onClick={onSubmitHandler} />
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
