import { stylesContainer } from "../../styles/container";
import { stylesRegularFont } from "../../styles/regularFont";
import { NavbarBottom } from "../components/NavbarBottom";
import Accordion from "react-native-collapsible/Accordion";
import React, { useState, useEffect } from "react";
import { View, ScrollView, Text, StyleSheet, KeyboardAvoidingView, LogBox, Image } from "react-native";
import { Progress } from "../components/Progress";
import { THEME } from "../theme";
import { CourseDesc } from "../components/CourseDesc";
import { ButtonCustom } from "../components/ButtonCustom";
import { ModuleExpandable } from "../components/ModuleExpandable_copy";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { DisplayReg } from "../components/ui/DisplayReg";
import { DisplayMedium } from "../components/ui/DisplayMedium";
import { ceil } from "react-native-reanimated";
import { AppLoader } from "../components/AppLoader";

export const CourseInner = (props) => {
  const navigation = useNavigation();
  // const gotoCert = () => {
  //   navigation.navigate("Сертификат");
  // };

  const [data, setData] = useState(null);
  const [value, setValue] = useState(0);
  function useForceUpdate() {
    // integer state
    return () => setValue((value) => value + 1); // update the state to force render
  }

  const forceUpdate = useForceUpdate();

  useEffect(() => {
    const payload = {
      login: props.user,
      courseId: props.id,
    };

    fetch(`${THEME.API_URL}/course`, {
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
          if (res.status === 200) {
            setData(jsonRes);
          }
        } catch (err) {
          console.log(err);
        }
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(data);
  }, [value]);

  // useEffect(() => {
  //   fetchData();
  //   const willFocusSubscription = props.navigation.addListener("focus", () => {
  //     fetchData();
  //   });

  //   return willFocusSubscription;
  // }, []);

  let i = 1;
  return data ? (
    <View style={{ flex: 1 }}>
      <View style={[stylesContainer.container, { flex: 1, marginBottom: -20 }]}>
        <ScrollView style={{ flex: 1 }}>
          <Progress complete={data[0].complete} overall={data[0].overall} />
          {/* {props.complete == props.overall ? (
              <ButtonCustom buttonText={props.buttonText} style={{ backgroundColor: THEME.PURPLE, marginBottom: 10 }} onClick={gotoCert} />
            ) : null} */}
          <CourseDesc description={data[0].courseDesc} />

          {data[0].lessons.map((item) => (
            <View
              style={{
                borderWidth: 1,
                borderColor: "#bbb",
                padding: 5,
                marginBottom: 5,
                backgroundColor: "#f2f2f2",
                borderRadius: 10,
                flex: 1,
              }}
              key={item.lessonId}>
              <TouchableOpacity
                style={{ flexDirection: "row", alignItems: "center" }}
                onPress={() =>
                  navigation.navigate("Урок", {
                    title: item.lessonName,
                    id: item.lessonId,
                    desc: item.lessonDesc,
                    isComplete: item.isComplete,
                    courseId: data[0].courseId,
                  })
                }>
                <View style={{ flex: 1 }}>
                  <DisplayMedium>Урок {i++}</DisplayMedium>
                  <DisplayMedium style={{ fontSize: 18 }}>{item.lessonName}</DisplayMedium>
                </View>
                {item.isComplete ? (
                  <Image source={require("../../assets/img/checked-icon.png")} style={{ padding: 5 }}></Image>
                ) : (
                  <Image source={require("../../assets/img/thinking-icon.png")} style={{ margin: 5 }}></Image>
                )}
              </TouchableOpacity>
            </View>
          ))}
          <View style={{ flex: 0.1 }}>
            <TouchableOpacity style={{ flex: 1, alignItems: "center" }} onPress={forceUpdate}>
              <Image source={require("../../assets/img/refresh-icon.png")} style={{ marginHorizontal: "auto" }}></Image>
            </TouchableOpacity>
          </View>
        </ScrollView>
        {/* <View style={{ flex: 0.1 }}>
          <TouchableOpacity style={{ flex: 1, alignItems: "center" }} onPress={forceUpdate}>
            <Image source={require("../../assets/img/refresh-icon.png")} style={{ marginHorizontal: "auto" }}></Image>
          </TouchableOpacity>
        </View> */}
        <NavbarBottom />
      </View>
    </View>
  ) : (
    // <Text>Загрузка...</Text>
    <AppLoader />
  );
};
