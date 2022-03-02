import React, { useState } from "react";
import { View, TextInput, StyleSheet, Text, Image } from "react-native";
import { Logo } from "../components/Logo";
import { ButtonCustom } from "../components/ButtonCustom";
import { NavbarBottom } from "../components/NavbarBottom";
import { stylesRegularFont } from "../../styles/regularFont";
import { stylesContainer } from "../../styles/container";
import { THEME } from "../theme";
import HTML from "react-native-render-html";
import { ScrollView } from "react-native-gesture-handler";

export const LessonInner = (props) => {
  const [isError, setIsError] = useState(false);
  const [message, setMessage] = useState("");
  const [isComplete, setIsComplete] = useState(!!props.isComplete);

  const getMessage = () => {
    const status = isError ? `Ошибка: ` : `Успех: `;
    return status + message;
  };

  const payload = {
    lessonId: props.id,
    user: props.user,
    courseId: props.courseId,
  };

  const onSubmitHandler = () => {
    fetch(`${THEME.API_URL}/answer`, {
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
            setIsError(false);
            setIsComplete(true);
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

  return (
    <View style={[stylesRegularFont.regularFont, { flex: 1 }]}>
      <ScrollView style={[stylesContainer.container, { flex: 1 }]}>
        <Logo />
        {/* <Text>{props.id}</Text>
        <Text>{props.desc}</Text>
        <Text>{props.user}</Text>
        <Text>{props.courseId}</Text>
        <Text>{props.isComplete}</Text> */}
        <HTML
          baseFontStyle={{ fontSize: 17, fontFamily: "SF-Display-Regular", lineHeight: 21, marginBottom: 20 }}
          source={{
            html: `${props.desc}`,
          }}></HTML>
        <Text style={{ color: isError ? THEME.DANGER_COLOR : THEME.MAIN_GREEN }}>{message ? getMessage() : null}</Text>

        {!isComplete ? (
          <View style={{ marginTop: "auto", justifyContent: "flex-end" }}>
            <ButtonCustom buttonText='Отметить как пройденное' onClick={onSubmitHandler} />
          </View>
        ) : (
          <View style={{ flex: 1, flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
            <Image source={require("../../assets/img/checked-icon.png")} style={{ marginRight: 15 }}></Image>
            <Text style={{ lineHeight: 22, fontSize: 17, fontFamily: "SF-Display-Semibold", paddingVertical: 14, color: THEME.MAIN_GREEN }}>
              Пройдено!
            </Text>
          </View>
        )}
      </ScrollView>
      <NavbarBottom />
    </View>
  );
};

const styles = StyleSheet.create({});
