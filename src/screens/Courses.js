// import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
// import { ButtonCustom } from "../components/ButtonCustom";
import { NavbarBottom } from "../components/NavbarBottom";
import { CourseCard } from "../components/CourseCard";
import { FlatList } from "react-native-gesture-handler";
import { stylesContainer } from "../../styles/containerContentful";
import { THEME } from "../theme";
import { AppLoader } from "../components/AppLoader";

export const Courses = ({ setIsSignedIn, isSignedIn, user }) => {
  const [value, setValue] = useState(0);
  function useForceUpdate() {
    // integer state
    return () => setValue((value) => value + 1); // update the state to force render
  }

  const forceUpdate = useForceUpdate();
  const navigation = useNavigation();
  const signOut = () => {
    setIsSignedIn(false);
    console.log(isSignedIn);
    navigation.navigate("Вход в систему");
  };

  const [data, setData] = useState(null);

  useEffect(() => {
    const payload = {
      login: user,
    };
    fetch(`${THEME.API_URL}/courses`, {
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

  return (
    <View style={{ flex: 1 }}>
      <View style={[stylesContainer.container, { flex: 1 }]}>
        {data ? (
          <FlatList
            contentContainerStyle={{ alignItems: "flex-start" }}
            columnWrapperStyle={{ justifyContent: "space-between" }}
            numColumns={3}
            data={data}
            keyExtractor={(item) => item.courseId.toString()}
            renderItem={({ item }) => (
              <CourseCard
                style={{ flexBasis: "30%" }}
                id={item.courseId}
                uri={item.courseThumbnail}
                title={item.courseName}
                complete={item.complete}
                overall={item.overall}
                // bookmarked={item.bookmarked}
              />
            )}
          />
        ) : (
          // <Text>Нет доступных курсов. Обратитесь к администрации</Text>
          <AppLoader />
        )}
        {/* <ButtonCustom buttonText="Приобрести курсы"/> */}
      </View>
      <TouchableOpacity style={{ flex: 0.1, alignItems: "center" }} onPress={forceUpdate}>
        <Image source={require("../../assets/img/refresh-icon.png")} style={{ marginHorizontal: "auto" }}></Image>
      </TouchableOpacity>
      <NavbarBottom signOut={signOut} />
    </View>
  );
};

const styles = StyleSheet.create({});
