import React, { Component } from "react";
import Accordion from "react-native-collapsible/Accordion";

import { modules, _renderContent, _renderHeader } from "./ModuleSection";

export class AccordionView extends Component {
  state = {
    activeSections: [],
  };

  _updateSections = (activeSections) => {
    this.setState({ activeSections });
  };

  render() {
    return (
      <Accordion
        sections={modules}
        activeSections={this.state.activeSections}
        renderHeader={_renderHeader}
        renderContent={_renderContent}
        onChange={this._updateSections}
      />
    );
  }
}
