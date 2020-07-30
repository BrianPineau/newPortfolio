import React, { Component } from 'react';
import { Tabs, Tab } from 'react-mdl';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  //Select the category
  toggleCategories() {
    if(this.state.activeTab === 0) {
    return (
        <div><h1>This is JavaScript</h1></div>
      )
    }
  }


  render() {
    return (
      <div className="category-tabs">
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>JavaScript</Tab>
          <Tab>React</Tab>
          <Tab>NodeJS</Tab>
        </Tabs>

        <section className="projects-grid">
          {this.toggleCategories()}
        </section>
      </div>
    )
  }
}

export default Projects;