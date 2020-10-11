import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../components/NavigationBar.scss';


const NavigationBar = () => {
   


return (
  <React.Fragment>
<link
  rel="stylesheet"
  href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
  integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
  crossorigin="anonymous"
/>
  <div className="pt-4 container  nav-top" >
      <Navbar expand="lg">
          <Navbar.Brand href="/home"></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto mx-auto nav " >
                  <Nav.Item><Nav.Link href="/" activeclassname="selected"  className="ml-4 mr-4 ">Home</Nav.Link></Nav.Item>
                  <Nav.Item><Nav.Link activeclassname="selected" href="#about" className="ml-4 mr-4">About</Nav.Link></Nav.Item>
                  <Nav.Item><span className='logo-nav'>GS</span></Nav.Item>
                  <Nav.Item><Nav.Link activeclassname="selected" href="#gallery" className="ml-4 mr-4">Projects</Nav.Link></Nav.Item>
                  <Nav.Item><Nav.Link activeclassname="selected" href="#footer" className="ml-4 mr-4 mb-2">Contact</Nav.Link></Nav.Item>
              </Nav>
            
          </Navbar.Collapse>
      </Navbar>
  </div>


  
  </React.Fragment>
  )
}


export default NavigationBar;