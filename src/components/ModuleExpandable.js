import React, { useState } from "react";
import { Image, ScrollView, StyleSheet, Text, View, TouchableOpacity, TouchableWithoutFeedback, FlatList } from "react-native";
import Constants from "expo-constants";
//import * as Animatable from "react-native-animatable";
import Collapsible from "react-native-collapsible";
import Accordion from "react-native-collapsible/Accordion";
import { DisplaySemi } from "../components/ui/DisplaySemi";
import { DisplayReg } from "../components/ui/DisplayReg";
import { THEME } from "../theme";

export const ModuleExpandable = (...section) => {
  const [toggleExpand, setToggleExpand] = useState(true);
  // const lessons = section.map((a) => a.content);
  // const LessonItems = (section) => {
  //   return section.content.map((a) => <Text key={a.lessonId}>{a.title}</Text>);
  // };

  return (
    <View style={{ width: "100%" }}>
      <TouchableOpacity onPress={() => setToggleExpand(!toggleExpand)}>
        <Text>{typeof section}</Text>
        <Text>{typeof section.content}</Text>
        {/* <Text>{typeof section.content[0].lessonId}</Text> */}
        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingVertical: 20 }}>
          <DisplaySemi style={{ width: "60%", fontSize: 17 }}>{section.title}</DisplaySemi>

          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <DisplayReg
              style={({ fontSize: 14, color: "#f00" }, !section.bookmarked && { opacity: 0 })}>{`${section.bookmarked} `}</DisplayReg>
            <Image
              source={require("../../assets/img/bookmarked-icon.png")}
              style={[{ width: 9, height: 11 }, !section.bookmarked && { opacity: 0 }]}
            />
          </View>

          <DisplayReg style={section.complete == section.overall ? styles.textGreen : styles.textGrey}>
            {`${section.complete}/${section.overall}`}
          </DisplayReg>
          <Image
            style={[{ width: 20, height: 20 }, toggleExpand ? { transform: [{ scaleY: 1 }] } : { transform: [{ scaleY: -1 }] }]}
            source={require("../../assets/img/expandable-icon.png")}
          />
        </View>
      </TouchableOpacity>

      <Collapsible renderChildrenCollapsed={false} style={{ flexBasis: "30%" }} collapsed={toggleExpand}>
        <View>
          {/* <Text>{String(lessons)}</Text> */}

          {/* <Text>{lessons.type}</Text>
          <Text>{lessons.isComplete}</Text>
          <Text>{lessons.isBookmarked}</Text> */}

          {/* <Text>{section.content[0].lessonId}</Text> */}
          {/* <Text>{Object.entries(obj).forEach(([key, value]) => console.log(`${key}: ${value}`));}</Text>  */}
          {/* <View>
            {section.map((content) => {
              <Text>({content.lessonId})</Text>;
            })}
          </View> */}
          <Text>yo</Text>
        </View>
      </Collapsible>
    </View>
  );
};

const styles = StyleSheet.create({
  textGreen: {
    color: THEME.MAIN_GREEN,
    fontSize: 17,
  },
  textGrey: {
    color: "#6F707A",
    fontSize: 17,
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
