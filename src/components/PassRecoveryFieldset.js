import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";

export const PassRecoveryFieldset = (props) => {
  const [secure, setSecure] = useState(props.secure);

  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "#F1F4F7",
          borderRadius: 10,
          paddingRight: 20,
          marginBottom: 20,
        }}>
        <TextInput
          style={[styles.field, { width: "90%" }]}
          placeholder='Введите пароль'
          placeholderTextColor='#6F707A'
          secureTextEntry={secure}
          autoCorrect={false}
          autoCapitalize='none'
        />
        <TouchableOpacity
          title=''
          onPress={() => {
            setSecure(!secure);
          }}>
          {secure ? (
            <Image
              style={styles.textinputIcon}
              source={require("../../assets/img/crossed-eye-icon.png")}
              fadeDuration={0}
              style={{ width: 30, height: 30 }}
            />
          ) : (
            <Image
              style={styles.textinputIcon}
              source={require("../../assets/img/open-eye-icon.png")}
              fadeDuration={0}
              style={{ width: 30, height: 20 }}
            />
          )}
        </TouchableOpacity>
      </View>
      <TextInput
        style={styles.field}
        placeholder='Подтверждение пароля'
        placeholderTextColor='#6F707A'
        secureTextEntry={secure}
        autoCorrect={false}
        autoCapitalize='none'
      />
    </View>
  );
};

const styles = StyleSheet.create({
  field: {
    height: 50,
    backgroundColor: "#F1F4F7",
    borderColor: "#F1F4F7",
    borderRadius: 10,
    paddingLeft: 20,
    color: "#000",
    fontSize: 17,
    //marginBottom: 20,
  },
  lastField: {
    marginBottom: 0,
    width: "90%",
  },
  textinputIcon: {
    right: 10,
    backgroundColor: "#f00",
    marginRight: 100,
  },
});
