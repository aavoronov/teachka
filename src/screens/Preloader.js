import React from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";
import AnimatedLoader from "react-native-animated-loader";
import LottieView from "lottie-react-native";

import { Logo } from "../components/Logo";

export const Preloader = (props) => {
  return (
    <View>
      <View>
        <AnimatedLoader visible={true} overlayColor='rgba(255,255,255,0)' source={require("../../assets/lottie/loader.json")} />
        {/* <LottieView
          ref={(animation) => {
            animation;
          }}
          source={require("../../assets/lottie/loader.json")}
          autoPlay={true}
        /> */}
      </View>
      <View style={{ paddingTop: 150 }}>
        <Logo showTexterra={true} />
      </View>
    </View>
  );
};
