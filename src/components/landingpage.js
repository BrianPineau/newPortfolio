import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
  render() {
    return (
      <div style={{width: '100%', margin: 'auto'}}> 
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://i.ya-webdesign.com/images/avatar-png-icon-6.png"
              alt="avatar"
              className="avatar-img"
            />
            <div className="banner-text">
              <h1>Front End Web Developer</h1>
              
              <hr />
              <p>HTML/CSS | SCSS | JavaScript | React | NodeJS</p>

              <div className="social-links">
                <a href="http://google.com"  rel="noopener noreferrer"  target="_blank">
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;