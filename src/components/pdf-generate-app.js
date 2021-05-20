//App

import { Page } from "app/src/components";
import React, { Component } from "react";
import { createPDF } from "../../lib/createPDF";
import Pdf from "react-native-pdf";
import { Alert, Dimensions, TextInput, Button, StyleSheet } from "react-native";

export default class Home extends Component {
  static navigationOptions = {
    title: "Home",
  };
  props: PropsType;

  constructor() {
    super();
    this.state = {
      values: {},
    };
  }

  componentDidMount() {
    this.getPdfSource().then((pdfSource) =>
      this.setState({
        pdfSource,
        values: { guest: "", date: "" },
        showPdf: false,
      })
    );
  }

  componentDidUpdate() {
    this.getPdfSource();
  }

  getPdfSource = async () => {
    const file = await createPDF(this.state.values);
    const pdfSource = {
      uri: file.filePath,
    };
    return pdfSource;
  };

  refreshPdf = () => {
    this.setState({ showPdf: true });
  };

  render() {
    const { pdfSource, showPdf } = this.state;
    return (
      <Page>
        <TextInput
          style={styles.textInput}
          onChangeText={(text) =>
            this.setState({
              values: { ...this.state.values, guest: text },
              showPdf: false,
            })
          }
          value={this.state.values.guest}
          placeholder='Who is your guest?'
        />
        <TextInput
          style={styles.textInput}
          onChangeText={(date) =>
            this.setState({
              values: { ...this.state.values, date: date },
              showPdf: false,
            })
          }
          value={this.state.values.date}
          placeholder='When is it?'
        />
        <Button title={"Show me!"} onPress={this.refreshPdf} />
        {showPdf && <Pdf style={styles.pdf} source={pdfSource} onError={(error) => Alert.alert(`${error}`)} />}
      </Page>
    );
  }
}

const styles = StyleSheet.create({
  textInput: { height: 40, borderColor: "gray", borderWidth: 1, margin: 8 },
  pdf: {
    flex: 1,
    width: Dimensions.get("window").width,
    alignSelf: "center",
  },
});

type PropsType = {
  navigation: any,
};

//generateFileHTML
import { style } from "./fileCSS";

export const generateFileHTML = (values) => {
  return `
  ${style}
  ${generateTitleSectionHTML()}
  ${generateNameSectionHTML(values.guest)}
  ${generateDateSectionHTML(values.date)}`;
};

const generateTitleSectionHTML = () =>
  `<div>
      <h2 class="block_title">BIRTHDAY PARTY !!!!</h2>
  </div>`;

const generateNameSectionHTML = (name) =>
  `<div>
      <span class="line">Dear ${name}, please come to my BIRTHDAY party!</span>
  </div>`;

const generateDateSectionHTML = (date) =>
  `<div>
      <span class="line">It will be on ${date}.</span>
  </div>`;

//createPDF
import RNHTMLtoPDF from "react-native-html-to-pdf";
import { generateFileHTML } from "./generateFileHTML";

export const createPDF = async (values) => {
  const html = generateFileHTML(values);
  const options = {
    html,
    fileName: "test",
    directory: "Documents",
  };
  return await RNHTMLtoPDF.convert(options);
};

//style

export const style = `
<style type="text/css">
  .block_title {
    font-size: 50;
    color: #525668;
    text-transform: uppercase;
    margin: 100;
    text-align: center;
  }
  .line {
    color: #525668;
    font-size: 40;
    margin: 50;
    word-break: break-all;
  }
</style>
`;
