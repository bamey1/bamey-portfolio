import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars,faB,faClose} from '@fortawesome/free-solid-svg-icons';


const NavBar=({handleSidebar,showSide,removeSidebar})=>{
    const handleClick= (e)=>{
        e.preventDefault();
        const target =e.target.getAttribute('href');
        const location =document.querySelector(target).offsetTop;
        
        
        window.scrollTo({
          left:0,
          top:location-96
        })

       
        } 

    return (

        <nav className='nav-bar sticky'>

<div className='nav-container'>
<div className='logo-container'>
 <FontAwesomeIcon icon={faB} className="logo-b"/>
</div>
<button className="bars" onClick={handleSidebar}>
{showSide?<FontAwesomeIcon icon={faClose}/>:<FontAwesomeIcon icon={faBars}/>}
</button>
<ul className='nav-items'>
  <li className='nav-item'><a href='#about' onClick={handleClick}>About</a></li>
  <li className='nav-item'><a href="#experience" onClick={handleClick}>Experience</a></li>
  <li className='nav-item'><a href='#project' onClick={handleClick}>Project</a></li>
  <li className='nav-item nav-contact' ><a href="#contact" onClick={handleClick}>Contact</a></li>
</ul>


</div>
<div className={`${showSide?'links-container show-container':'links-container'}`}>
          <ul className="sidebar-links">
          <li onClick={removeSidebar}>
            <a href="#about">About</a>
          </li>
          <li onClick={removeSidebar}>
            <a href="#experience">Experience</a>
          </li>
          <li onClick={removeSidebar}>
            <a href="#project">Projects</a>
          </li>
          <li onClick={removeSidebar}>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>

 
 </nav>



    )
}

export default NavBar;

