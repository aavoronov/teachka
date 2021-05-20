import { Logo } from "../components/Logo";
import { NavbarBottom } from "../components/NavbarBottom";
import RNHTMLtoPDF from "react-native-html-to-pdf";
//aimport Pdf from "react-native-pdf";
import { stylesContainer } from "../../styles/container";

import React from "react";
import { View, Image, TouchableOpacity } from "react-native";

export const Certificate = (props) => {
  const htmlTemplate = `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
      </head>
      <body style="background-image: url(./template.png); background-repeat: no-repeat; font-family: 'Raleway'">
        <span
          style="position: absolute; top: 22px; left: 52px; color: #fff; font-size: 79px; line-height: 72px; font-weight: 800; max-width: 300px"
          >${props.type}</span
        >
        <div style="position: absolute; top: 170px; left: 45px; width: 323px; background-color: #304aa9; max-height: 40px; border-radius: 10px">
          <span style="position: relative; top: 7px; left: 7px; color: #fff; font-size: 27px; font-weight: 500; max-width: 250px">
            об окончании<br />курса
          </span>
        </div>
        <span
          style="
            position: absolute;
            top: 397px;
            left: 50px;
            color: #373737;
            font-size: 58px;
            font-weight: 800;
            text-align: right;
            max-width: 400px;
          "
          >${props.firstName}\n${props.lastName}
        </span>
        <span style="position: absolute; top: 367px; left: 474px; color: #414141; font-size: 22px; font-weight: 600; max-width: 444px"
          >${props.sex === "m" ? "прошел" : "прошла"} курс обучения в образовательном центре TeachLine по программе</span
        >
        <div style="background-color: #f5f5f5; height: 200px; width: 465px; position: absolute; top: 462px; left: 474px">
          <span
            style="
              display: block;
              position: relative;
              top: 0px;
              left: 0px;
              color: #373737;
              font-size: 38px;
              font-weight: 500;
              max-width: 644px;
              margin-bottom: 16px;
            "
            >«${props.course}»</span
          >
          <span style="margin-top: 20px; color: #797c8b; font-size: 21px; font-weight: 500; max-width: 644px"
            >Продолжительность курса: ${props.duration}</span
          >
        </div>
        <div style="background-color: #f5f5f5; height: 100px; width: 465px; position: absolute; top: 800px; left: 50px">
          <span
            style="
              position: relative;
              top: 0px;
              left: 0px;
              color: #797c8b;
              font-size: 21px;
              font-weight: 500;
              max-width: 644px;
              margin-bottom: 16px;
            "
            >Дата выдачи: 
          </span>
          <span style="margin-top: 20px; color: #797c8b; font-size: 21px; font-weight: 700; max-width: 644px">${props.date}</span>
          <span
            style="
              display: block;
              position: relative;
              top: 0px;
              left: 0px;
              color: #797c8b;
              font-size: 21px;
              font-weight: 700;
              max-width: 644px;
              margin-top: 6px;
            "
            >г. Орехово-Зуево</span
          >
        </div>
      </body>
    
      <style>

      @page{ background-color: red; margin-left: 0pt; margin-right: 0pt; margin-top: 0pt; margin-bottom: 0pt; padding-left: 0pt; padding-right: 0pt; padding-top: 0pt; padding-bottom: 0pt; }
        /* raleway-500 - latin_cyrillic */
        @font-face {
          font-family: "Raleway";
          font-style: normal;
          font-weight: 500;
          src: url("./fonts/raleway-v19-latin_cyrillic-500.eot"); /* IE9 Compat Modes */
          src: local(""), url("./fonts/raleway-v19-latin_cyrillic-500.eot?#iefix") format("embedded-opentype"),
            /* IE6-IE8 */ url("./fonts/raleway-v19-latin_cyrillic-500.woff2") format("woff2"),
            /* Super Modern Browsers */ url("./fonts/raleway-v19-latin_cyrillic-500.woff") format("woff"),
            /* Modern Browsers */ url("./fonts/raleway-v19-latin_cyrillic-500.ttf") format("truetype"),
            /* Safari, Android, iOS */ url("./fonts/raleway-v19-latin_cyrillic-500.svg#Raleway") format("svg"); /* Legacy iOS */
        }
        /* raleway-700 - latin_cyrillic */
        @font-face {
          font-family: "Raleway";
          font-style: normal;
          font-weight: 700;
          src: url("./fonts/raleway-v19-latin_cyrillic-700.eot"); /* IE9 Compat Modes */
          src: local(""), url("./fonts/raleway-v19-latin_cyrillic-700.eot?#iefix") format("embedded-opentype"),
            /* IE6-IE8 */ url("./fonts/raleway-v19-latin_cyrillic-700.woff2") format("woff2"),
            /* Super Modern Browsers */ url("./fonts/raleway-v19-latin_cyrillic-700.woff") format("woff"),
            /* Modern Browsers */ url("./fonts/raleway-v19-latin_cyrillic-700.ttf") format("truetype"),
            /* Safari, Android, iOS */ url("./fonts/raleway-v19-latin_cyrillic-700.svg#Raleway") format("svg"); /* Legacy iOS */
        }
        /* raleway-600 - latin_cyrillic */
        @font-face {
          font-family: "Raleway";
          font-style: normal;
          font-weight: 600;
          src: url("./fonts/raleway-v19-latin_cyrillic-600.eot"); /* IE9 Compat Modes */
          src: local(""), url("./fonts/raleway-v19-latin_cyrillic-600.eot?#iefix") format("embedded-opentype"),
            /* IE6-IE8 */ url("./fonts/raleway-v19-latin_cyrillic-600.woff2") format("woff2"),
            /* Super Modern Browsers */ url("./fonts/raleway-v19-latin_cyrillic-600.woff") format("woff"),
            /* Modern Browsers */ url("./fonts/raleway-v19-latin_cyrillic-600.ttf") format("truetype"),
            /* Safari, Android, iOS */ url("./fonts/raleway-v19-latin_cyrillic-600.svg#Raleway") format("svg"); /* Legacy iOS */
        }
        /* raleway-800 - latin_cyrillic */
        @font-face {
          font-family: "Raleway";
          font-style: normal;
          font-weight: 800;
          src: url("./fonts/raleway-v19-latin_cyrillic-800.eot"); /* IE9 Compat Modes */
          src: local(""), url("./fonts/raleway-v19-latin_cyrillic-800.eot?#iefix") format("embedded-opentype"),
            /* IE6-IE8 */ url("./fonts/raleway-v19-latin_cyrillic-800.woff2") format("woff2"),
            /* Super Modern Browsers */ url("./fonts/raleway-v19-latin_cyrillic-800.woff") format("woff"),
            /* Modern Browsers */ url("./fonts/raleway-v19-latin_cyrillic-800.ttf") format("truetype"),
            /* Safari, Android, iOS */ url("./fonts/raleway-v19-latin_cyrillic-800.svg#Raleway") format("svg"); /* Legacy iOS */
        }
      </style>
    </html>
    `;
  const html = `<h1>test</h1><p>test</p>`;

  const createPDF = async (html) => {
    let options = {
      html: html,
      fileName: "test",
      directory: "Documents",
    };

    let file = await RNHTMLtoPDF.convert(options);
    // console.log(file.filePath);
    alert(file.filePath);
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={[stylesContainer.container, { flex: 1 }]}>
        <Logo />

        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View>
            <TouchableOpacity onPress={() => createPDF}>
              <Image source={require("../../assets/img/share-btn-icon.png")} style={{ width: 35, height: 39 }} />
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity>
              <Image source={require("../../assets/img/view-btn-icon.png")} style={{ width: 35, height: 35 }} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <NavbarBottom />
    </View>
  );
};
