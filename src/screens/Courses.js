// import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, StyleSheet, Text } from "react-native";
// import { ButtonCustom } from "../components/ButtonCustom";
import { NavbarBottom } from "../components/NavbarBottom";
import { CourseCard } from "../components/CourseCard";
import { FlatList } from "react-native-gesture-handler";
import { stylesContainer } from "../../styles/containerContentful";

export const Courses = (props) => {
  const courses = [
    {
      id: 131,
      uri: require("../../assets/img/course-pic.png"),
      title: "Продвижение в вайбере",
      complete: 12,
      overall: 14,
      bookmarked: 2,
    },
    {
      id: 132,
      uri: require("../../assets/img/course-pic.png"),
      title: "Продвижение в ответах мэил.ру",
      complete: 15,
      overall: 15,
      bookmarked: 10,
    },
    {
      id: 13112,
      uri: require("../../assets/img/course-pic.png"),
      title: "Продвижение в гитхабе",
      complete: 12,
      overall: 14,
      bookmarked: 0,
    },
    {
      id: 13231,
      uri: require("../../assets/img/course-pic.png"),
      title: "Продвижение на реддите",
      complete: 15,
      overall: 15,
      bookmarked: 1,
    },
    {
      id: 13231,
      uri: require("../../assets/img/course-pic.png"),
      title: "Продвижение почтовыми голубями",
      complete: 15,
      overall: 15,
      bookmarked: 1,
    },
    {
      id: 13231,
      uri: require("../../assets/img/course-pic.png"),
      title: "Продвижение по телеграфу",
      complete: 15,
      overall: 15,
      bookmarked: 1,
    },
    {
      id: 13231,
      uri: require("../../assets/img/course-pic.png"),
      title: "Продвижение в очереди в поликлинике",
      complete: 15,
      overall: 15,
      bookmarked: 1,
    },
  ];
  //   const item = {
  //     id: 131,
  //     uri: require("../../assets/img/Jellyfish.jpg"),
  //     title: "Продвижение в очереди в поликлинике",
  //     complete: 12,
  //     overall: 14,
  //     bookmarked: 2,
  //   };

  return (
    <View style={{ flex: 1 }}>
      <View style={[stylesContainer.container, { flex: 1 }]}>
        <FlatList
          contentContainerStyle={{ alignItems: "flex-start" }}
          columnWrapperStyle={{ justifyContent: "space-between" }}
          numColumns={3}
          keyExtractor={(item) => item.id.toString()}
          data={courses}
          renderItem={({ item }) => (
            <CourseCard
              style={{ flexBasis: "30%" }}
              uri={item.uri}
              title={item.title}
              complete={item.complete}
              overall={item.overall}
              bookmarked={item.bookmarked}
            />
          )}
        />
        {/* <ButtonCustom buttonText="Приобрести курсы"/> */}
      </View>
      <NavbarBottom />
    </View>
    // <CourseCard uri={item.uri} title={item.title} complete={item.complete} overall={item.overall} bookmarked={item.bookmarked} />
  );
};

const styles = StyleSheet.create({});
