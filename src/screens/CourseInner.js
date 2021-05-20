import { stylesContainer } from "../../styles/container";
import { NavbarBottom } from "../components/NavbarBottom";
import Accordion from "react-native-collapsible/Accordion";
import React, { useState, useEffect } from "react";
import { View, ScrollView, Text, StyleSheet, KeyboardAvoidingView, LogBox } from "react-native";
import { Progress } from "../components/Progress";
import { THEME } from "../theme";
import { CourseDesc } from "../components/CourseDesc";
import { ButtonCustom } from "../components/ButtonCustom";
import { ModuleExpandable } from "../components/ModuleExpandable_copy";
import { FlatList } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const modules = [
  {
    id: 123123,
    title: "Модуль 1. Длинное название, возможно, даже слишком",
    complete: 10,
    overall: 14,
    bookmarked: 0,
    content: [
      {
        lessonId: 12313123,
        title: "Модуль1 урок1",
        type: "regular",
        isComplete: true,
        isBookmarked: false,
      },
      {
        lessonId: 1231213123,
        title: "Модуль1 урок2",
        type: "video",
        isComplete: true,
        isBookmarked: true,
      },
      {
        lessonId: 1275413123,
        title: "Модуль1 урок3",
        type: "video",
        isComplete: false,
        isBookmarked: true,
      },
      {
        lessonId: 12746123,
        title: "Модуль1 урок4",
        type: "video",
        isComplete: false,
        isBookmarked: false,
      },
    ],
  },
  {
    id: 123128573,
    title: "Модуль 2",
    complete: 2,
    overall: 3,
    bookmarked: 1,
    content: [
      {
        lessonId: 123131239,
        title: "Модуль2 урок1",
        type: "regular",
        isComplete: true,
        isBookmarked: false,
      },
      {
        lessonId: 12312131239,
        title: "Модуль2 урок2",
        type: "video",
        isComplete: true,
        isBookmarked: true,
      },
      {
        lessonId: 12754131239,
        title: "Модуль2 урок3",
        type: "test",
        isComplete: false,
        isBookmarked: true,
      },
      {
        lessonId: 127461239,
        title: "Модуль2 урок4",
        type: "test",
        isComplete: false,
        isBookmarked: false,
      },
    ],
  },
  {
    id: 1231285731231,
    title: "Модуль 3",
    complete: 2,
    overall: 2,
    bookmarked: 2,
    content: [
      {
        lessonId: 1231312399,
        title: "Модуль3 урок1",
        type: "regular",
        isComplete: true,
        isBookmarked: false,
      },
      {
        lessonId: 123121312399,
        title: "Модуль2 урок2",
        type: "video",
        isComplete: true,
        isBookmarked: true,
      },
    ],
  },
];

export const CourseInner = (props) => {
  const navigation = useNavigation();
  const gotoCert = () => {
    navigation.navigate("Сертификат");
  };
  // useEffect(() => {
  //   LogBox.ignoreWarnings(["VirtualizedLists should never be nested"]);
  // }, []);
  return (
    <View style={[{ flex: 1 }]}>
      <FlatList
        ListHeaderComponent={
          <View>
            <Progress complete={props.complete} overall={props.overall} />
            {props.complete == props.overall ? (
              <ButtonCustom buttonText={props.buttonText} style={{ backgroundColor: THEME.PURPLE, marginBottom: 10 }} onClick={gotoCert} />
            ) : null}
            <CourseDesc description={props.description} />
            <Text>{Object.entries(modules.map((a) => a.content)).toString()}</Text>
          </View>
        }
        contentContainerStyle={{ justifyContent: "flex-start" }}
        keyExtractor={(item) => item.id.toString()}
        data={modules}
        style={stylesContainer.container}
        renderItem={(item) => (
          <ModuleExpandable
            id={item.id}
            title={item.title}
            bookmarked={item.bookmarked}
            complete={item.complete}
            overall={item.overall}
            content={item.content}
          />
        )}
      />

      <NavbarBottom />
    </View>
  );
};
