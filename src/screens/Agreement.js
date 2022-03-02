import React from "react";
import { View, StyleSheet } from "react-native";
import { Logo } from "../components/Logo";
import { ButtonCustom } from "../components/ButtonCustom";
import { stylesRegularFont } from "../../styles/regularFont";
import { stylesContainer } from "../../styles/container";
import HTML from "react-native-render-html";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

export const Agreement = (props) => {
  const navigation = useNavigation();
  const goBack = () => {
    navigation.goBack();
  };
  const agreementText =
    "<p>Настоящее Пользовательское соглашение здесь постулирует какие-то не очень интересные факты об обязательствах сторон, изложенные не очень интересным сухим юридическим языком.</p></br><p>Разнообразный и богатый опыт постоянное информационно-пропагандистское обеспечение нашей деятельности обеспечивает широкому кругу (специалистов) участие в формировании существенных финансовых и административных условий. Не следует, однако забывать, что консультация с широким активом в значительной степени обуславливает создание дальнейших направлений развития. Повседневная практика показывает, что реализация намеченных плановых заданий играет важную роль в формировании позиций, занимаемых участниками в отношении поставленных задач. Таким образом рамки и место обучения кадров требуют от нас анализа позиций, занимаемых участниками в отношении поставленных задач. Повседневная практика показывает, что дальнейшее развитие различных форм деятельности требуют от нас анализа соответствующий условий активизации. </p> <p>Регистрируясь на сервисе, вы подтверждаете свое согласие с условиями предоставления сервиса.</p> ";
  return (
    <View style={[stylesRegularFont.regularFont, { flex: 1 }]}>
      <ScrollView style={[stylesContainer.container, { flex: 1 }]}>
        <Logo />
        <HTML
          baseFontStyle={{ fontSize: 17, fontFamily: "SF-Display-Regular", lineHeight: 21, marginBottom: 20 }}
          source={{
            html: `${agreementText}`,
          }}></HTML>

        <ButtonCustom buttonText='Я со всем согласен' onClick={goBack} style={{ marginBottom: 20 }} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({});
