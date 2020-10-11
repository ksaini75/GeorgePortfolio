import React from 'react';
import { Jumbotron, Container} from 'reactstrap';
import TimelineExperience from '../components/TimelineExperience';

// import { NavLink} from 'react-router-dom';
// import NavigationBar from '../components/NavigationBar';


import '../Styles/home.scss';
import AboutPage from './about-page';
import ProjectPage from './projects-page';
import Footer from './footer';


const HomePage = () => (
    <div>

    <hr className='hr-bar'/>
    <h1 className='title-home'><em>GEORGE SAMUELS II</em></h1>
    <div>
      <Jumbotron className='home-container'fluid >
        <Container fluid>
          <h1 className="display-3">IMAGE</h1>
         
        </Container>
        <h4 className='home-project'>View Projects</h4>
      </Jumbotron>
      <AboutPage/>
      <ProjectPage/>
      <TimelineExperience/>
      <Footer/>
    </div>
  
    </div>
  
)

export default HomePage;
