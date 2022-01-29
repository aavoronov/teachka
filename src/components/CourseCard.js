import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, Image, TouchableOpacity, View, StyleSheet } from "react-native";
import { THEME } from "../theme";
import { DisplayReg } from "../components/ui/DisplayReg";

export const CourseCard = (props) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        ...styles.container,
        justifyContent: "flex-start",
        marginBottom: 10,
        marginHorizontal: 6,
        ...props.style,
      }}>
      <TouchableOpacity onPress={() => navigation.navigate("курс будет", { title: props.title })}>
        <View style={{ justifyContent: "space-between" }}>
          <View style={{ borderRadius: 15, overflow: "hidden" }}>
            <Image source={{ uri: props.uri }} style={{ height: 114, width: null, resizeMode: "contain" }} />
          </View>
          <DisplayReg style={{ fontSize: 14, lineHeight: 17 }}>{props.title}</DisplayReg>
        </View>
      </TouchableOpacity>
      <View style={styles.propertyContainer}>
        <View>
          <DisplayReg
            style={props.complete == props.overall ? styles.textGreen : styles.textGrey}>{`${props.complete}/${props.overall}`}</DisplayReg>
          <DisplayReg style={{ ...styles.textGrey, fontSize: 10 }}>пройдено</DisplayReg>
        </View>
        {/* {props.bookmarked ? (
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <DisplayReg style={{ fontSize: 14, color: THEME.PURPLE }}>{props.bookmarked} </DisplayReg>
            <Image source={require("../../assets/img/bookmarked-icon.png")} style={{ width: 9, height: 11 }} />
          </View>
        ) : null} */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //width: "32%",
  },
  textGreen: {
    color: THEME.MAIN_GREEN,
  },
  textGrey: {
    color: "#6F707A",
  },
  textPurple: {
    color: THEME.PURPLE,
  },
  propertyContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
});
