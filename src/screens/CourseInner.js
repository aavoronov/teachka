import { stylesContainer } from "../../styles/container";
import { NavbarBottom } from "../components/NavbarBottom";
import Accordion from "react-native-collapsible/Accordion";
import { AccordionView } from "../components/ModuleSectionRoot";
import React, { useState } from "react";
import { View, ScrollView, Text, StyleSheet, KeyboardAvoidingView } from "react-native";
import { Progress } from "../components/Progress";
import { THEME } from "../theme";
import { CourseDesc } from "../components/CourseDesc";
import { ButtonCustom } from "../components/ButtonCustom";
import { ModuleSection } from "../components/ModuleSection";
import { Temp } from "../components/temp";

export const CourseInner = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <View style={[stylesContainer.container, { flex: 1 }]}>
          <Progress complete={props.complete} overall={props.overall} />
          {props.complete == props.overall ? (
            <ButtonCustom buttonText={props.buttonText} style={{ backgroundColor: THEME.PURPLE, marginBottom: 10 }} />
          ) : null}
          <CourseDesc description={props.description} />
          {/* <AccordionView /> */}
          <Temp />
        </View>
      </ScrollView>
      <NavbarBottom />
    </View>
  );
};
