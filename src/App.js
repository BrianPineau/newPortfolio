import React from 'react';
import './App.css';
import { Layout, Header, Drawer, Navigation, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

function App() {
  return (
  <div style={{height: '100vh', position: 'relative'}}>
    <Layout fixedHeader>
      <Header className="header-color" title="Title">
        <Navigation>
          <Link to="/aboutme">About Me</Link>
          <Link to="/resume">Resume</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
        </Navigation>
      </Header>
      <Drawer title="Title">
        <Navigation>
          <Link to="/aboutme">About Me</Link>
          <Link to="/resume">Resume</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
        </Navigation>
      </Drawer>
      <Content>
        <Main/>
      </Content>
    </Layout>
  </div>
  );
}

export default App;
