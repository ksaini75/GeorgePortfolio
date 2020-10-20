import React from 'react';
import { Jumbotron, Container} from 'reactstrap';
import TimelineExperience from '../components/TimelineExperience';

// import { NavLink} from 'react-router-dom';
// import NavigationBar from '../components/NavigationBar';


import '../Styles/home.scss';
import AboutPage from './about-page';
import ProjectPage from './projects-page';
import Footer from './footer';

import george from '../Assets/Images/george-picture-2.png';
import ContactPage from './contact-page';


const HomePage = () => (
    <div>

    <hr className='hr-bar'/>
    <h1 className='title-home'><em>GEORGE SAMUELS II</em></h1>
    <div>
      <Jumbotron className='home-container' fluid>
        <Container fluid>
        <img className='home-image' src={george}/>
 
         
        </Container>
        {/* <h4 className='home-project'>View Projects</h4> */}
      </Jumbotron>
      <AboutPage/>
      <ProjectPage/>
      <TimelineExperience/>
      <ContactPage/>
      <Footer/>
    </div>
  
    </div>
  
)

export default HomePage;
