import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, CardText, IconButton } from 'react-mdl';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  //Select the category
  toggleCategories() {
    if(this.state.activeTab === 0) {
      return (

        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://reactjs.org/logo-og.png) center / cover' }} >React Project #1</CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.  Lorem Ipsum has been the industry standard
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>LiveDemo</Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://reactjs.org/logo-og.png) center / cover' }} >React Project #2</CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.  Lorem Ipsum has been the industry standard
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>LiveDemo</Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 3 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://reactjs.org/logo-og.png) center / cover' }} >React Project #3</CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.  Lorem Ipsum has been the industry standard
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>LiveDemo</Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
        
      )
    } else if (this.state.activeTab === 1) {
      return (
        <div><h1>This is React</h1></div>
      )
    } else if (this.state.activeTab === 2) {
      return (
        <div><h1>This is NodeJS</h1></div>
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

        
          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>

      </div>
    )
  }
}

export default Projects;