import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { BackButton } from "./src/components/BackButton";
//import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
//import * as Font from "expo-font";
import { useFonts } from "expo-font";
import { Authorization } from "./src/screens/Authorization";
import { SignUp } from "./src/screens/SignUp";
import { PasswordRecovery1 } from "./src/screens/PasswordRecovery1";
import { PasswordRecovery2 } from "./src/screens/PasswordRecovery2";
import { PasswordRecovery3 } from "./src/screens/PasswordRecovery3";
import { SupportTicket } from "./src/screens/SupportTicket";
// import { Preloader } from "./src/screens/Preloader";
import { Courses } from "./src/screens/Courses";
import { CourseInner } from "./src/screens/CourseInner";
import { LessonInner } from "./src/screens/LessonInner";
import { Certificate } from "./src/screens/Certificate";
import { Agreement } from "./src/screens/Agreement";
// import { RateUs } from "./src/screens/RateUs";

function PassRec1({ navigation }) {
  return <PasswordRecovery1 buttonText={"Дальше"} />;
}

function PassRec2({ navigation }) {
  return <PasswordRecovery2 buttonText={"Дальше"} contact={"----это проп----"} />;
}

function PassRec3({ navigation }) {
  return <PasswordRecovery3 buttonText={"Дальше"} />;
}

function _SignUp({ navigation }) {
  return <SignUp />;
}

function _Agreement({ navigation }) {
  return <Agreement />;
}

function _Certificate({ navigation }) {
  return (
    <Certificate
      type={"Диплом с отличием"}
      firstName={"Иван"}
      lastName={"Иванов"}
      sex={"m"}
      date={"19.05.2021"}
      course={"Продвижение в очереди в поликлинике"}
      duration={14}
    />
  );
}

const Stack = createStackNavigator();

export default function App() {
  let customFonts = {
    "SF-Display-Regular": require("./assets/fonts/SFProDisplay-Regular.ttf"),
    "SF-Display-Medium": require("./assets/fonts/SFProDisplay-Medium.ttf"),
    "SF-Display-Semibold": require("./assets/fonts/SFProDisplay-Semibold.ttf"),
    "SF-Text-Regular": require("./assets/fonts/SF-UI-Text-Regular.ttf"),
    "SF-Text-Medium": require("./assets/fonts/SF-UI-Text-Medium.ttf"),
    "SF-Text-Semibold": require("./assets/fonts/SF-UI-Text-Semibold.ttf"),
  };

  const [loaded, error] = useFonts(customFonts);
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [user, setUser] = useState("");

  function HomeScreen({ navigation }) {
    return <Authorization isSignedIn={isSignedIn} setIsSignedIn={setIsSignedIn} user={user} setUser={setUser} />;
  }

  function MyCourses({ navigation }) {
    return <Courses isSignedIn={isSignedIn} setIsSignedIn={setIsSignedIn} user={user} />;
  }

  function Course({ route, navigation }) {
    const { title, id } = route.params;
    return <CourseInner user={user} buttonText={"Показать сертификат"} id={id} />;
  }

  function Lesson({ route, navigation }) {
    const { title, id, desc, isComplete, courseId } = route.params;
    return <LessonInner user={user} id={id} desc={desc} isComplete={isComplete} courseId={courseId} />;
  }

  function Support({ navigation }) {
    return <SupportTicket buttonText={"Отправить"} user={user} />;
  }

  // async function loadApp() {
  //   await Font.loadAsync(customFonts);
  // }
  // const [isReady, setIsready] = useState(false);

  return !loaded ? null : (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Вход в систему'
        screenOptions={{
          headerTitleAlign: "center",
          headerBackTitle: "",
          cardStyle: { backgroundColor: "#fff" },
          headerBackImage: () => <BackButton />,
          headerTintColor: "#10112A",
          headerTitleStyle: { fontSize: 16 },
        }}>
        {isSignedIn ? (
          <>
            <Stack.Screen name='Мои курсы' component={MyCourses} />
            <Stack.Screen name='Заявка в поддержку' component={Support} />
            <Stack.Screen name='Курс' component={Course} options={({ route }) => ({ title: route.params.title, id: route.params.id })} />
            <Stack.Screen
              name='Урок'
              component={Lesson}
              options={({ route }) => ({
                title: route.params.title,
                id: route.params.id,
                desc: route.params.desc,
                isComplete: route.params.isComplete,
                courseId: route.params.courseId,
              })}
            />
            <Stack.Screen name='Сертификат' component={_Certificate} />
          </>
        ) : (
          <>
            <Stack.Screen name='Вход в систему' component={HomeScreen} />
            <Stack.Screen name='Восстановление пароля 1/3' component={PassRec1} />
            <Stack.Screen name='Восстановление пароля 2/3' component={PassRec2} />
            <Stack.Screen name='Восстановление пароля 3/3' component={PassRec3} />
            <Stack.Screen name='Регистрация' component={_SignUp} />
            <Stack.Screen name='Пользовательское соглашение' component={_Agreement} />
          </>
        )}
      </Stack.Navigator>
      {/* <RateUs buttonText={"Оценить"} buttonVisibility={false} />*/}
    </NavigationContainer>
  );
}
