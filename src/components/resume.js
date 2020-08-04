import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';


class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: 'center' }}>
              <img
                src="https://i.ya-webdesign.com/images/avatar-png-icon-6.png"
                alt="avatar"
                style={{height: '200px'}}
              />
            </div>

            <h2 style={{ paddingTop: '2em' }}>Brian Pineau</h2>
            <h4 style={{ color: 'grey' }}>Web Developer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500's, when an unknown printer took a galley of type and scrambled it to make a type specimen book.  It has survived not only five centruies, but also the leap into electronic typesetting, remanining essentially unchanged.</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>Paris, TX</p>
            <h5>Phone</h5>
            <p>(501) 701-0746</p>
            <h5>Email</h5>
            <p>pinoub@gmail.com</p>
            <h5>Web</h5>
            <p>brianpineau.com</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>

            
            <Education
              startYear={2012}
              endYear={2018}
              schoolName="My University"
              schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry.  Lorem Ipsum has been the industry's standard dummy text ever since the 1500's."
            /> 

            <Education
              startYear={2018}
              endYear={2020}
              schoolName="My University"
              schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry.  Lorem Ipsum has been the industry's standard dummy text ever since the 1500's."
            /> 
            <hr style={{ borderTop: '3px solid #e22947' }} />
            <h2>Experience</h2>

            <Experience
              startYear={2009}
              endYear={2010}
              jobName="First Job"
              jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry.  Lorem Ipsum has been the industry's standard dummy text ever since the 1500's."
            />

            <Experience
              startYear={2010}
              endYear={2016}
              jobName="Second Job"
              jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry.  Lorem Ipsum has been the industry's standard dummy text ever since the 1500's."
            />
            <hr style={{ borderTop: '3px solid #e22947' }} />
            <h2>skills</h2>
            <Skills
              skill="HTML/CSS"
              progress={100}
            />
            <Skills
              skill="JavaScript"
              progress={75}
            />
            <Skills
              skill="React"
              progress={60}
            />
            <Skills
              skill="NodeJS"
              progress={75}
            />

          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;