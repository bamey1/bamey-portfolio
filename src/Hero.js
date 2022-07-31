import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
 import { faCoffee,faFaceSmileBeam, faB} from '@fortawesome/free-solid-svg-icons';
import {faTwitter,faFacebook,faLinkedin,faYoutube,faGithub} from '@fortawesome/free-brands-svg-icons';

function Hero (){

    return(

        <header className='hero' id="hero">
        <div className='hero-edit section-center'>

          <h1 className='hero-header'>BAMEY WEB SERVICES</h1>
          <p className='hero-paragraph'>where technology meets creativity</p>
          <button className='hero-btn'><a href='#contact'>Hire me</a></button>
          
  </div>
  </header>
  



    )



}


export default Hero;