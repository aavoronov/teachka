import React, { useEffect, useRef } from "react";
import { View, Animated, TextInput, StyleSheet } from "react-native";
import Svg, { G, Circle, Text } from "react-native-svg";
import { THEME } from "../theme";

const AnimatedCircle = Animated.createAnimatedComponent(Circle);
const AnimatedInput = Animated.createAnimatedComponent(TextInput);

//const percentage = 50;

export const Progress = (
  props,
  {
    //percentage = 65,
    radius = 190,
    strokeWidth = 61,
    duration = 500,
    color = THEME.MAIN_GREEN,
    delay = 1000,
    textColor = THEME.PURPLE,
    max = 100,
  }
) => {
  const percentage = (100 * props.complete) / props.overall;
  const animatedValue = useRef(new Animated.Value(0)).current;
  const circleRef = useRef();
  const inputRef = useRef();
  const halfCircle = radius + strokeWidth;
  const circleCircumference = 2 * Math.PI * radius;
  const animation = (toValue) => {
    return Animated.timing(animatedValue, { toValue, duration, delay, useNativeDriver: true }).start(() => {
      //animation(toValue === 0 ? percentage : 0);
    });
  };

  useEffect(() => {
    animation(percentage);

    animatedValue.addListener((v) => {
      if (circleRef?.current) {
        const maxPercentage = (100 * v.value) / max;
        const strokeDashoffset = circleCircumference - (circleCircumference * maxPercentage) / 100;
        circleRef.current.setNativeProps({
          strokeDashoffset,
        });
      }

      if (inputRef?.current) {
        inputRef.current.setNativeProps({
          text: `${Math.round(v.value)}%`,
        });
      }
    });

    return () => {
      animatedValue.removeAllListeners();
    };
  }, [max, percentage]);
  return (
    <View style={(StyleSheet.absoluteFillObject, { fontSize: radius / 2, color: textColor, textAlign: "center", alignItems: "center" })}>
      <Svg width={radius * 2} height={radius * 2} viewBox={`0 0 ${halfCircle * 2} ${halfCircle * 2}`}>
        <G rotation='-90' origin={`${halfCircle}, ${halfCircle}`}>
          <Circle cx='50%' cy='50%' stroke={color} strokeWidth={strokeWidth} r={radius} fill='none' strokeOpacity={0.2} />
          <AnimatedCircle
            style={{}}
            ref={circleRef}
            cx='50%'
            cy='50%'
            stroke={color}
            strokeWidth={strokeWidth}
            r={radius}
            fill='none'
            strokeDasharray={circleCircumference}
            strokeDashoffset={circleCircumference}
            strokeLinecap='round'
          />
        </G>
        <Text stroke='none' fill='#6F707A' fontSize='17' fontFamily='SF-Display-Regular' x='50%' y='60%' textAnchor='middle'>
          {`${props.complete}/${props.overall} пройдено`}
        </Text>
      </Svg>

      <AnimatedInput
        ref={inputRef}
        underlineColorAndroid='transparent'
        editable={false}
        defaultValue='0%'
        style={[StyleSheet.absoluteFillObject, { fontSize: radius / 3, color: textColor, textAlign: "center", paddingBottom: 15 }]}
      />
    </View>
  );
};
