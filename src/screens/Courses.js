// import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, StyleSheet, Text } from "react-native";
// import { ButtonCustom } from "../components/ButtonCustom";
import { NavbarBottom } from "../components/NavbarBottom";
import { CourseCard } from "../components/CourseCard";
import { FlatList } from "react-native-gesture-handler";
import { stylesContainer } from "../../styles/containerContentful";

export const Courses = ({ signInHandler }) => {
  const courses = [
    {
      id: 131,
      uri: "https://avatars.mds.yandex.net/i?id=3b004359907e9fc7e6a98786d455bbc4-4120605-images-thumbs&n=13",
      title: "Продвижение в вайбере",
      complete: 12,
      overall: 14,
      bookmarked: 2,
    },
    {
      id: 132,
      uri: "https://avatars.mds.yandex.net/i?id=3b004359907e9fc7e6a98786d455bbc4-4120605-images-thumbs&n=13",
      title: "Продвижение в ответах мэил.ру",
      complete: 15,
      overall: 15,
      bookmarked: 10,
    },
    {
      id: 13112,
      uri: "https://avatars.mds.yandex.net/i?id=3b004359907e9fc7e6a98786d455bbc4-4120605-images-thumbs&n=13",
      title: "Продвижение в гитхабе",
      complete: 12,
      overall: 14,
      bookmarked: 0,
    },
    {
      id: 13231,
      uri: "https://avatars.mds.yandex.net/i?id=3b004359907e9fc7e6a98786d455bbc4-4120605-images-thumbs&n=13",
      title: "Продвижение на реддите",
      complete: 15,
      overall: 15,
      bookmarked: 1,
    },
    {
      id: 13231,
      uri: "https://avatars.mds.yandex.net/i?id=3b004359907e9fc7e6a98786d455bbc4-4120605-images-thumbs&n=13",
      title: "Продвижение почтовыми голубями",
      complete: 15,
      overall: 15,
      bookmarked: 1,
    },
    {
      id: 13231,
      uri: "https://avatars.mds.yandex.net/i?id=3b004359907e9fc7e6a98786d455bbc4-4120605-images-thumbs&n=13",
      title: "Продвижение по телеграфу",
      complete: 15,
      overall: 15,
      bookmarked: 1,
    },
    {
      id: 13231,
      uri: "https://avatars.mds.yandex.net/i?id=3b004359907e9fc7e6a98786d455bbc4-4120605-images-thumbs&n=13",
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

  const signOut = () => {
    signInHandler(false);
    navigation.navigate("Вход в систему");
  };

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
      <NavbarBottom onClick={() => signOut()} />
    </View>
  );
};

const styles = StyleSheet.create({});
