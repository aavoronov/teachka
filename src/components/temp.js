import React, { Component } from "react";
import { Image, ScrollView, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Constants from "expo-constants";
//import * as Animatable from "react-native-animatable";
import Collapsible from "react-native-collapsible";
import Accordion from "react-native-collapsible/Accordion";
import { DisplaySemi } from "../components/ui/DisplaySemi";
import { DisplayReg } from "../components/ui/DisplayReg";
import { THEME } from "../theme";

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

export class Temp extends Component {
  state = {
    activeSections: [],
    collapsed: true,
    upsideDown: false,
  };

  toggleExpanded = () => {
    this.setState({ upsideDown: !this.state.upsideDown });
  };

  setSections = (sections) => {
    this.setState({
      activeSections: sections.includes(undefined) ? [] : sections,
    });
  };

  renderHeader = (section, _, isActive, upsideDown) => {
    return (
      <View
        style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingVertical: 20 }}
        onPress={this.toggleExpanded}>
        <DisplaySemi style={{ width: "60%", fontSize: 17 }}>{section.title}</DisplaySemi>

        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <DisplayReg style={({ fontSize: 14, color: THEME.PURPLE }, section.bookmarked ? { opacity: 1 } : { opacity: 0 })}>
            {`${section.bookmarked} `}
          </DisplayReg>
          <Image
            source={require("../../assets/img/bookmarked-icon.png")}
            style={[{ width: 9, height: 11 }, section.bookmarked ? { opacity: 1 } : { opacity: 0 }]}
          />
        </View>

        <DisplayReg style={section.complete == section.overall ? styles.textGreen : styles.textGrey}>
          {`${section.complete}/${section.overall}`}
        </DisplayReg>
        <Image
          //   style={upsideDown ? { transform: [{ scaleY: -1 }] } : { transform: [{ scaleY: 1 }] }}
          source={require("../../assets/img/expandable-icon.png")}
          fadeDuration={0}
          style={[{ width: 20, height: 20 }, upsideDown ? { transform: [{ scaleY: 2 }] } : { transform: [{ scale: 1 }] }]}
        />
      </View>
    );
  };

  renderContent(section, _, isActive) {
    return (
      <View>
        <Text>{section.content.title}</Text>
        <Text>{section.content.lessoId}</Text>
        <Text>yo</Text>
      </View>
    );
  }

  render() {
    const { activeSections } = this.state;

    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={{ paddingTop: 30 }}>
          <Text style={styles.title}>Accordion Example</Text>
          <Text>{activeSections}</Text>
          <Accordion
            activeSections={activeSections}
            sections={modules}
            touchableComponent={TouchableOpacity}
            expandMultiple={true}
            renderHeader={this.renderHeader}
            renderContent={this.renderContent}
            duration={400}
            onChange={this.setSections}
            renderAsFlatList={false}
          />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF",
    paddingTop: Constants.statusBarHeight,
  },
  title: {
    textAlign: "center",
    fontSize: 22,
    fontWeight: "300",
    marginBottom: 20,
  },
  header: {
    backgroundColor: "#F5FCFF",
    padding: 10,
  },
  headerText: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "500",
  },
  content: {
    padding: 20,
    backgroundColor: "#fff",
  },
  active: {
    backgroundColor: "rgba(255,255,255,1)",
  },
  inactive: {
    backgroundColor: "rgba(245,252,255,1)",
  },
  selectors: {
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "center",
  },
  selector: {
    backgroundColor: "#F5FCFF",
    padding: 10,
  },
  activeSelector: {
    fontWeight: "bold",
  },
  selectTitle: {
    fontSize: 14,
    fontWeight: "500",
    padding: 10,
  },
  multipleToggle: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 30,
    alignItems: "center",
  },
  multipleToggle__title: {
    fontSize: 16,
    marginRight: 8,
  },
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
