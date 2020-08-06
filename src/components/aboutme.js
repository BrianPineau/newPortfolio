import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class About extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={6}>
            <div style={{ textAlign: 'center' }}>
              <img
                src="https://i.ya-webdesign.com/images/avatar-png-icon-6.png"
                alt="avatar"
                style={{height: '200px'}}
              />
            </div>
            <hr style={{ borderTop: '3px solid #833fb2', width: '70%', margin: '60px auto 60px auto' }} />
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
          </Cell>

          <Cell col={6}>
            
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default About;