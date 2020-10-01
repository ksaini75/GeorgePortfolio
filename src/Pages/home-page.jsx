import React from 'react';
import { Jumbotron, Container} from 'reactstrap';
import { Link } from 'react-router-dom';


import '../Styles/home.scss';

const HomePage = () => (
    <div>
    <div className='homepage'>
        <div className='options' >
        <Link className='option' to='/about'>
    ABOUT
    </Link>
    <Link className='option' to='/shop'>
   PROJECTS
    </Link>
    <span className='nav-logo'>  GS </span>
    <Link className='option' to='/shop'>
  CONTACT
    </Link>
    <Link className='option' to='/shop'>
LINKEDIN
    </Link>
        </div>
    </div>
    <hr className='hr-bar'/>
    <h1 className='title-home'><em>GEORGE SAMUELS II</em></h1>
    <div>
      <Jumbotron className='home-container'fluid>
        <Container fluid>
          <h1 className="display-3">IMAGE</h1>
         
        </Container>
        <h4 className='home-project'>View Projects</h4>
      </Jumbotron>
    </div>
    </div>
  
)

export default HomePage;
