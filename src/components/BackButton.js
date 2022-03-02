import React from "react";
import { Image } from "react-native";

export const BackButton = () => {
  return <Image source={require("../../assets/img/back-icon.png")} fadeDuration={0} style={{ width: 30, height: 30 }} />;
};
