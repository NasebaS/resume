import logo from './logo.svg';
import './App.css';

import mysql from "./mysql.png";
import htmllogosmall from "./htmllogosmall.png";
import csslogo from "./csslogo.png";
import JSlogo from "./JSlogo.png";
import bootstrap from "./bootstrap.png";
import github from "./github.png";
import MUI from "./MUI.png";
import mongodb from "./mongodb.png";
import phone from "./phone.png";
import location from "./location.png";
import gmail1 from "./gmail1.png";
import githubid from "./githubid.png";



function App() {
  return (
    <div className="maindiv">
      <div className='firstmainbox'>
      <div className='firstdiv'><h3>photo</h3>
      <hr></hr>
      <ul>
      <li><div className="imgandp"><img src={phone}/><p>8870216645</p></div></li>
      <li><div className="imgandp"><a href="#"><img src={gmail1}/><p>naseba.hamee@gmail.com</p></a></div></li>
      <li><div className="imgandp"><img src={location}/><p>Salem,Tamilnadu</p></div></li>
      <li><div className="imgandp"><a href="https://github.com/NasebaS"><img src={githubid}/><p>Naseba Github</p></a></div></li>
      </ul>
      </div>
      <hr></hr>
      <div className='technologies'><p>Technologies</p>
      <ul>
        <li>
        <img src={htmllogosmall}/>
        </li>
        <li><img src={csslogo}/></li>
        <li><img src={JSlogo}/></li>
        <li><img src={mysql} className="sqlimage"/></li>
        <li><img src={bootstrap}/></li>
        <li><img src={github}/></li>
        <li><img src={MUI}/></li>
        <li><img src={mongodb}/></li>
      </ul>

      </div>
      <hr></hr>
      <div>Education</div>
      <hr></hr>
      <div className='skills'><p>Skills</p>
        <ul>
        <li >HTML</li>
        <li>CSS</li>
        <li>JS</li>
        <li>React JS</li>
        <li>MUI</li>
        <li>Bootstrap</li>
      </ul>
      </div>
      <hr></hr>
      </div>
      <div className='seconddiv'>
      <h2>Front End Developer</h2>
      <hr></hr>
      <br></br>
      <br></br>
      <br/>
      <h5>Projects</h5>
      <hr></hr><br/><br/><br/>
      <h5>Work Experience</h5>
      <hr></hr>

      </div>
    </div>
  );
}

export default App;
