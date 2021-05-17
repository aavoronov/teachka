import React, { useState } from "react";
import { Text, View } from "react-native";
import ViewMoreText from "react-native-view-more-text";
import { DisplayReg } from "../components/ui/DisplayReg";
import HTML from "react-native-render-html";
import { THEME } from "../theme";

export const CourseDesc = (props) => {
  const [textIsShown, setTextIsShown] = useState(true);
  const renderViewMore = (onPress) => {
    return (
      <View style={{ alignSelf: "flex-start" }}>
        <Text
          style={{
            color: THEME.PURPLE,
            borderBottomWidth: 1,
            borderBottomColor: THEME.PURPLE,
            fontSize: 15,
            lineHeight: 22,
          }}
          onPress={() => {
            setTextIsShown(false);
            onPress;
          }}>
          показать полностью
        </Text>
      </View>
    );
  };

  return textIsShown ? (
    <ViewMoreText numberOfLines={5} renderViewMore={renderViewMore} textStyle={{ textAlign: "left" }}>
      <DisplayReg style={{ fontSize: 17, lineHeight: 22 }}>{props.description.replace(/(<([^>]+)>)/gi, "").substring(0, 250)}</DisplayReg>
    </ViewMoreText>
  ) : (
    <HTML
      baseFontStyle={{ fontSize: 17, fontFamily: "SF-Display-Regular", lineHeight: 21 }}
      source={{
        html: `${props.description}`,
      }}></HTML>
  );
};
