import React, { useState } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import Accordion from "react-native-collapsible/Accordion";
import { THEME } from "../theme";
import { DisplayReg } from "../components/ui/DisplayReg";
import { DisplaySemi } from "../components/ui/DisplaySemi";

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

export const ModuleSection = (props) => {
  // const [activeSections, setActiveSections] = useState([]);
  const [upsideDown, setUpsideDown] = useState(false);
};

export const _renderHeader = (section) => {
  return (
    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingVertical: 20 }}>
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
        style={[styles.textinputIcon, upsideDown ? { transform: [{ scaleY: -1 }] } : { transform: [{ scaleY: 1 }] }]}
        source={require("../../assets/img/expandable-icon.png")}
        fadeDuration={0}
        style={{ width: 20, height: 20 }}
      />
    </View>
  );
};

export const _renderContent = (section) => {
  return (
    <View>
      <Text>{section.content.title}</Text>
      <Text>{section.content.id}</Text>
    </View>
  );
};

//   return (
//     <Accordion
//       sections={modules}
//       underlayColor='#ffdddd'
//       activeSections={activeSections}
//       // renderSectionTitle={some function}
//       renderHeader={_renderHeader}
//       renderContent={_renderContent}
//       onChange={() => {
//         (section) => activeSections.push.section.id.toString();
//         // setActiveSections((section) => section.id.toString());
//         setUpsideDown(!upsideDown);
//       }}
//       // keyExtractor={(module) => module.id.toString()}
//       expandMultiple={true}
//     />
//   );
// };

// const SECTIONS = [
//     {
//       id: 123123,
//       title: "Модуль 1",
//       content: [
//         {
//           lessonId: 12313123,
//           title: "Модуль1 урок1",
//           type: "regular",
//           isComplete: true,
//           isBookmarked: false,
//           //isThereTest: true,
//         },;
//         //{еще уроки},
//       ],
//     },
//     //{еще модули{[{}]},
//   ];

// const modules = [
//     {
//       id: 123123,
//       title: "Модуль 1",
//       content: [
//         {
//           lessonId: 12313123,
//           title: "Модуль1 урок1",
//           type: "regular",
//           isComplete: true,
//           isBookmarked: false,
//           //isThereTest: true,
//         },;
//         //{еще уроки},
//       ],
//     },
//     //{еще модули{[{}]},
//   ];

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
