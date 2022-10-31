import './App.css';
import { data } from './data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
 import { faCoffee,faFaceSmileBeam, faB,faDiamond,faCode,faAngleDoubleRight,faMessage, faBars,faClose,faShareSquare} from '@fortawesome/free-solid-svg-icons';
import {faTwitter,faFacebook,faLinkedin,faYoutube,faGithub,faAndroid,faGithubSquare} from '@fortawesome/free-brands-svg-icons';
import Hero from './Hero';
import NavBar from './Navbar';
import PhoneInput from 'react-phone-number-input';
import { useState } from 'react';


function App() {

  
  const [jobs,setJobs]=useState(data);
  const[value,setValue]=useState(0);
  const [showSide, setShowside]=useState(false);

const {company,dates,id,duties,order,title}=jobs[value];

const handleSidebar=()=>{
  setShowside(!showSide);
}

const removeSidebar=()=>{
  setShowside(false);

}




  return (
    <div className="general">
      
      <NavBar handleSidebar={handleSidebar} removeSidebar={removeSidebar} showSide={showSide}/>
      <Hero/>
      <section class="section about" id="about">
      <div class="section-center about-center">
        <article class="about-img">
          <img
            src="./image/portfolio-7.jpg"
            class="about-photo"
            alt="about img"
          />
        </article>
        <article class="about-info">
          <div class="section-title about-title">
            <h2 className='title-about'>about</h2>
            <div class="underline"></div>
          </div>
          <p className="about-desc">
           Hi, I am Basit Bamidele, a full-stack developer based in Lagos, Nigeria 
          </p>
          <p className="about-desc">
            Below is the current snapshot of the ever-growing list of tools 
            and technologies i work with.
          </p>
          <div className='about_skill_container'>
          <div className='about-skill'>
          <FontAwesomeIcon className='about-icon' icon={faAngleDoubleRight} />
          <p className='about-paragraph'>JavaScript</p>
          </div>
          <div className='about-skill'>
          <FontAwesomeIcon className='about-icon' icon={faAngleDoubleRight} />
          <p className='about-paragraph'>React</p>
          </div>
          <div className='about-skill'>
          <FontAwesomeIcon className='about-icon' icon={faAngleDoubleRight} />
          <p className='about-paragraph'>Node.js</p>
          </div>
          </div>
          
        </article>
      </div>
    </section>
   <section  className='services section'>
   <div className="section-title">
        <h2>services</h2>
        <div className="underline"></div>
      </div>
      <div className='services-container section-center'>
        <article className="service">
          <FontAwesomeIcon icon={faCode} className="service-icon"/>
          <h4>web development</h4>
          <div className='underline'></div>
          <p>
            I develop websites and web applications using javascript and React
        </p>
        
        </article>
        <article className="service">
        <FontAwesomeIcon icon={faDiamond} className="service-icon"/>
          <h4>web design</h4>
          <div className='underline'></div>
          <p>
          I design modern and beautiful websites using html. we also make mockups for products using figma/adobe
          </p>
        
        </article>
        <article className="service" >
        <FontAwesomeIcon icon={faAndroid} className="service-icon"/>
          <h4>app design</h4>
          <div className='underline'></div>
          <p>
          --
          </p>
          </article>

      </div>

</section>

<section className='section-experience' id="experience">
    <div className='section-title'>
      <h2 className='experience-title'>experience</h2>
      <div className='underline'></div>
    </div>
    <div className='jobs-center'>
      <div className='btn-container'>
        {
          jobs.map((item,index)=>{
            return(
              <button key={item.id} onClick={()=>
                setValue(index)}
                className={`job-btn ${index===value && 'active-btn' }`}
                >

                  {item.company}
                  </button>

            ) 
          })
        }
      </div>
      <article className='job-info'>
        <h3>{title}</h3>
        <h4>{company}</h4>
        <p className='job-date'>{dates}</p>
        {duties.map((duty,index)=>{
          return (
<div key={index} className="job-desc">

<FontAwesomeIcon className='job-icon' icon={faAngleDoubleRight} />
<p>{duty}</p>
          </div>
          );
        })}
      </article>
    </div>
     </section>
     <section className='skills'>
     <div className="section-title">
        <h2>skills</h2>
        <div className="underline"></div>
      </div>
      <div className='skill-center section-center'>
        <article className='skill-article'>
          <h3>Front End</h3>
          <div class="skill">
            <p>HTML/CSS</p>
            <div class="skill-container">
              <div class="skill-value value-80"></div>
              <p class="skill-text">
                80%
              </p>
            </div>
          </div>
          <div className="skill">
            <p>JavaScript</p>
            <div className="skill-container">
              <div className="skill-value"></div>
              <p className="skill-text">
                80%
              </p>
            </div>
          </div>
          <div className="skill">
            <p>React</p>
            <div className="skill-container">
              <div className="skill-value value-70"></div>
              <p className="skill-text">
                70%
              </p>
            </div>
          </div>
        </article>
        <article className='skill-article'>
        <h3>Back End</h3>
          <div className="skill">
            <p>Node JS</p>
            <div className="skill-container">
              <div className="skill-value"></div>
              <p className="skill-text">
                80%
              </p>
            </div>
          </div>
         
        </article>

      </div>
     </section>
     <section className='section projects' id="project">
      <div className='section-title'>
      <h2>Project</h2>
      <div className='underline'></div>
      </div>
      <div className='section-center projects-center'>
      <article  className='project'>
        
        <img src="./image/projects-3.jpg" className="project-img" alt="bamey" />
  
        
        <div className='project-info'>
          <span className='project-number'>01</span>
          <h3 className='project-slug'>E-COMMERCE PROJECT (REACT PROJECT)</h3>
        <p className='project-desc'>
        Built interactive web application using React.
           react usestatehook,Redux-toolkit,react forms, context API and React Router were used to develop this e-commerce website.
           Auth0 library was used for authentication and authorization.Stripe API was used for the payment gateway.
           Other external packages like,axios,react icons, react-confetti were also used in this project.
    </p>
          <div className='project-stack'>
            <span>React</span>
            <span>Sass</span>
  
          </div>
          <div className="project-links">
            <a href="https://bameycomfy.netlify.app/" target='_blank' rel='noopener noreferrer'> 
              <FontAwesomeIcon icon={faShareSquare} className="project-icon"/>
            </a>
            <a href="">
              <FontAwesomeIcon icon={faGithubSquare} className="project-icon"/>
            </a>
          </div>
        </div>
        
         
        </article>

        <article  className='project'>
        
        <img src="./image/projects-2.jpg" className="project-img" alt="bamey" />
      
      <div className='project-info'>
        <span className='project-number'>02</span>
        <h3 className='project-slug'>QUIZ PROJECT (VANILLA JAVASCRIPT)</h3>
      <p className='project-desc'>
        Built interactive web applications using vanilla javascript.
        no javascript frameworks/library was employed in these projects.
        </p>
        <div className='project-stack'>
          <span>Vanilla js</span>
          <span>Bootstrap</span>

        </div>
        <div className="project-links">
          <a href="https://bameyquiz.netlify.app/" target='_blank' rel='noopener noreferrer'>
            <FontAwesomeIcon icon={faShareSquare} className="project-icon" />
          </a>
          <a href="">
            <FontAwesomeIcon icon={faGithubSquare} className="project-icon"/>
          </a>
        </div>
      </div>
      
       
      </article>
      
      <article className='project'>
        <img src="./image/projects-1.jpg" className="project-img" alt="bamey" />
  
        
        <div className='project-info'>
          <span className='project-number'>03</span>
          <h3 className='project-slug'>PORTFOLIO PROJECT (HTML & CSS)</h3>
        <p className='project-desc'>
        Html and css were used to design beautiful, responsive and modern looking websites.
        Modern technologies like c.s.s grid and flex-box was used for general layout and placement.Sass framework was used for compiling the css code.
          </p>
          <div className='project-stack'>
            <span>Html</span>
            <span>Css</span>
  
          </div>
          <div className="project-links">
            <a href="https://bameyportfolio.netlify.app/" target='_blank' rel='noopener noreferrer'>
              <FontAwesomeIcon icon={faShareSquare} className="project-icon" />
            </a>
            <a href="">
              <FontAwesomeIcon icon={faGithubSquare} className="project-icon"/>
            </a>
          </div>
        </div>
        
         
        </article>
        
      
    
      </div>
      </section>

     <section className='contact section' id="contact">
      <div className='contact-container'>
      <div className='section-title'>
      <h2>Contact me</h2>
      <div className='underline'></div>
    </div>

    <p className='contact-paragraph'>Feel free to contact me through any of these channels.<br></br> I'll make sure to get back to you</p>
    <div className='contact-icon-container'>
      <div className='contact-icon contact-number'>+2347057739107</div>
<a href='https://www.twitter.com/basit_bamidele'><FontAwesomeIcon className='contact-icon' icon={faTwitter}/></a>
<a href='https://www.linkedin.com/in/basit-bamidele-916177152'><FontAwesomeIcon className='contact-icon' icon={faLinkedin}/></a>
<a href={"mailto:bameypetandgas@gmail.com"}><FontAwesomeIcon className='contact-icon' icon={faMessage}/></a>
<a href='https://github.com/bamey1'><FontAwesomeIcon className='contact-icon' icon={faGithub}/></a>

    </div>

      </div>
      </section>
     <footer className='footer'>
      <p className='footer_text'>
Designed and built by <span>Basit Bamidele</span>
      </p>
      <p className='footer_date'>&copy;2022</p>
      </footer>
</div>
  
  );

      
}

export default App;
