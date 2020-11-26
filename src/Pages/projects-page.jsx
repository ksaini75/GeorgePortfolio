import React from 'react';

import { Container} from 'semantic-ui-react';



import '../Styles/projects.scss';


import vrMobile from '../Assets/Images/vr1-mobile-application.png';
import paceCampus from '../Assets/Images/rsz_pace-campus-map.png';
import artPortfolio from '../Assets/Images/ArtPortfolio.png';



const ProjectPage = () => (
    <div className='project'  id="projects">
<Container>
    <h1 className='project-title' ><em >Projects</em></h1>
    <div className="flex project-card-div">

    <link rel="stylesheet" href="https://unpkg.com/tachyons/css/tachyons.min.css"></link>

<article className="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
  <img src={vrMobile} className="db w-100 br2 br--top project-image" alt="vr" />
  <div className="pa2 ph3-ns pb3-ns">
    <div className="dt w-100 mt1">
      <div className="dtc">
        <h1 className="f5 f4-ns mv0 project-card-title">Atmosphere</h1>
      </div>
      
    </div>
    <p className="f6 lh-copy measure mt2 mid-white">
    A VR mobile application that will be used to improve the health and care of the elderly. 
    </p>
    <a className='project-link' href="https://play.google.com/store/apps/details?id=com.meilobyte.samuels" rel="noopener noreferrer" target="_blank">View Project</a>
  </div>
  </article>
  <article className="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center ">
  <img src={paceCampus} className="db w-100 br2 br--top project-image" alt="pace"/>
  <div className="pa2 ph3-ns pb3-ns">
    <div className="dt w-100 mt1">
      <div className="dtc">
        <h1 className="f5 f4-ns mv0 project-card-title">Pace GPS</h1>
      </div>
      
    </div>
    <p className="f6 lh-copy measure mt2 mid-white">
     This application is an unofficial Campus application, made by a student for the public.
    </p>
    <a className='project-link' href="https://play.google.com/store/apps/details?id=build.free.mrgds2.onpace" rel="noopener noreferrer" target="_blank">View Project</a>
  </div>
  </article>
  <article className="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
  <img src={artPortfolio} className="db w-100 br2 br--top project-image" alt="art"/>
  <div className="pa2 ph3-ns pb3-ns">
    <div className="dt w-100 mt1">
      <div className="dtc">
        <h1 className="f5 f4-ns mv0 project-card-title">MadGiraffeStudios</h1>
      </div>
     
    </div>
    <p className="f6 lh-copy measure mt2 mid-white">
    Art Portfolio For MadGiraffeStudios.
    </p>
    <a className='project-link' href="https://madgiraffestudios.netlify.app" rel="noopener noreferrer" target="_blank">View Project</a>
  </div>
  </article>

  </div>

  </Container>
  </div>



  
   
  
  
)

export default ProjectPage;