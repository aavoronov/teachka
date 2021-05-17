import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { BackButton } from "./src/components/ui/BackButton";
//import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
//import * as Font from "expo-font";
import { useFonts } from "expo-font";
import { Authorization } from "./src/screens/Authorization";
import { PasswordRecovery1 } from "./src/screens/PasswordRecovery1";
import { PasswordRecovery2 } from "./src/screens/PasswordRecovery2";
import { PasswordRecovery3 } from "./src/screens/PasswordRecovery3";
import { SupportTicket } from "./src/screens/SupportTicket";
import { Preloader } from "./src/screens/Preloader";
import { Courses } from "./src/screens/Courses";
import { CourseInner } from "./src/screens/CourseInner";

function HomeScreen({ navigation }) {
  return <Authorization buttonText={"Вход"} />;
}

function PassRec1({ navigation }) {
  return <PasswordRecovery1 buttonText={"Дальше"} />;
}

function PassRec2({ navigation }) {
  return <PasswordRecovery2 buttonText={"Дальше"} contact={"----это проп----"} />;
}

function PassRec3({ navigation }) {
  return <PasswordRecovery3 buttonText={"Дальше"} />;
}

function MyCourses({ navigation }) {
  return <Courses complete={10} />;
}

function Support({ navigation }) {
  return <SupportTicket buttonText={"Отправить"} />;
}

function Course({ navigation }) {
  return (
    <CourseInner
      buttonText={"Показать сертификат"}
      complete={10}
      overall={14}
      description={`<p>Нам интересно не только получать новые знания, но и делиться наработанным опытом с коллегами, поэтому в «Текстерре» на регулярной основе проводятся <strong>«обучалки»</strong>, на которых каждый желающий может выступить с докладом на любую профессиональную тему.</p>
      <p>Ко всему прочему с сентября 2018 года мы запустили собственные онлайн-курсы и основали <a target="_blank" href="https://teachline.ru/">учебный центр TeachLine</a>. В ноябре 2018 началось обучение второго потока курсов «<a target="_blank" href="https://teachline.ru/courses/internet-marketolog/">Интернет-маркетолог</a>» и «<a target="_blank" href="https://teachline.ru/courses/blog-courses/">Контент-маркетолог</a>». С начала 2019 года запустили курсы «<a target="_blank" href="https://teachline.ru/courses/smm/">SMM-специалист</a>», «<a target="_blank" href="https://teachline.ru/courses/commercial-author/">Коммерческий автор</a>» и многие другие. </p>
      <p>Теперь наши сотрудники делятся опытом не только друг с другом, но и со всеми, кто хочет развиваться в профессии.</p>
      <!--Слайдер Обучалки-->
      
    <div class='about-texterra '>
    <div><a href="/upload/iblock/df6/5.jpg" class="fancy_nr"><img src="/upload/iblock/df6/5.jpg" alt="Обучалки" title="Обучалки"></a></div><div><a href="/upload/iblock/5a0/6.jpg" class="fancy_nr"><img src="/upload/iblock/5a0/6.jpg" alt="Обучалки" title="Обучалки"></a></div>	
    </div>
      <p>В «Текстерре» на регулярной основе проводятся <strong>психологические тренинги</strong>. Они помогают нам лучше узнавать себя и друг друга, учиться новым полезным навыкам и не перегорать эмоционально. </p>
      <p>К тому же, с августа 2018 года мы стерли рамки между компанией и внешним миром, открыли креативное пространство OZ HUB и начали проводить различные митапы, психологические тренинги, игры и другие мероприятия, куда могут прийти не только сотрудники компании, но и любой другой житель нашего города.</p>
    
      <div class="about-texterra">
      <div>
           <img alt="психологические тренинги" title="психологические тренинги" src="/upload/about-us/slaider1.jpg">
      </div>
      <div>
           <img alt="психологические тренинги" title="психологические тренинги" src="/upload/about-us/slaider2.jpg">
      </div>
     
      </div>`}
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

  // async function loadApp() {
  //   await Font.loadAsync(customFonts);
  // }
  // const [isReady, setIsready] = useState(false);

  const isSignedIn = true;
  return !loaded ? (
    <Preloader />
  ) : (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Вход в систему'
        screenOptions={{
          headerTitleAlign: "center",
          headerBackTitle: "",
          cardStyle: { backgroundColor: "#fff" },
          headerBackImage: () => <BackButton />,
          headerTintColor: "#10112A",
          headerTitleStyle: {},
        }}>
        {isSignedIn ? (
          <>
            <Stack.Screen name='Мои курсы' component={MyCourses} />
            <Stack.Screen name='Заявка в поддержку' component={Support} />
            <Stack.Screen name='курс будет' component={Course} />
          </>
        ) : (
          <>
            <Stack.Screen name='Вход в систему' component={HomeScreen} />
            <Stack.Screen name='Восстановление пароля1' component={PassRec1} />
            <Stack.Screen name='Восстановление пароля2' component={PassRec2} />
            <Stack.Screen name='Восстановление пароля3' component={PassRec3} />
          </>
        )}
      </Stack.Navigator>
      {/* <RateUs buttonText={"Оценить"} buttonVisibility={false} />*/}
    </NavigationContainer>
  );
}
