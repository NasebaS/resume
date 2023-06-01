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
import photo from "./Photo.jpeg"



function App() {
  return (
    <div className="maindiv">
      <div className='firstmainbox'>
      <div className='firstdiv'><img src={photo} className="photo" width="150px" heigth="25px"/>
      <hr></hr>
      <ul>
      <li><span className="imgandp"><img src={phone}/><p>8870216645</p></span></li>
      <li><span className="imgandp1"><img src={gmail1}/><p>naseba.hamee@gmail.com</p></span></li>
      <li><span className="imgandp2"><img src={location}/><p>Salem,Tamilnadu</p></span></li>
      <li><span className="imgandp3"><img src={githubid}/><p>Naseba Github</p></span></li>
      </ul>
      </div>
      <br/><br/>
      <div className='technologies'><p>Technologies</p> <hr></hr>
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
     <br/><br/>
      <div className="softskills">Soft Skills</div>
      <hr></hr>
      <ul><li>Go Getter</li>
      <li>Optimist</li>
      <li>Quick Learning</li></ul><br/><br/>
      <div className='technicalskills'><p>Technical Skills</p><hr></hr>
        <ul>
        <li >HTML</li>
        <li>CSS</li>
        <li>JS</li>
        <li>React JS</li>
        <li>MUI</li>
        <li>Bootstrap</li>
        <li>SQL</li>
      </ul>
      </div>
      
      </div>
      <div className='seconddiv'>
      <h2>Front End Developer</h2>
      <hr></hr>
      <h3>Naseba Sathurudeen</h3>
      <p>A passionate Frontend web Developer having
an experience of building Web applications
with HTML, CSS, JavaScript, Reactjs,MUI, Bootstrap
and some other cool libraries and other
frameworks.
</p>
      
     
      <br></br>
      <br/>
      <h5>Projects</h5>
      <hr></hr>
      <p><b>Meesho:</b> Meesho is India's largest and most
trusted marketplace for Resellers, who sell
products online through WhatsApp and FacebookTrusted by over 50,000 Resellers.</p>
<p><b>Features:</b> Shop, Cart, Update Cart,Billing,Checkout and Delete
functionality is developed.</p>
<p><b>Techstack:</b> HTML, CSS, MUI, JavaScript, React JS</p>
      
      <br></br>
      <br/>
      <h5>Education</h5><hr></hr>
      <ul>
        <li>B.E(CSE),</li>
        <li>Vivekanandha Institute of Engineering and Technology for women,</li>

        <li>Namakkal.</li><br/>
        <li>HSC,</li>
        <li>Vivekanandha Vidhya Bhavan Higher Secondary School,</li>
        <li>Namakkal.</li><br/>
        <li>SSLC,</li>
        <li>Vivekanandha Vidhya Bhavan Higher Secondary School,</li>
        <li>Namakkal.</li><br/>

      </ul>
      
      <br/>
      <h5>Work Experience</h5>
      <hr></hr>
      <ul><li>Team Lead at Focus Edumatics Pvt Ltd</li></ul>
      </div>
    </div>
  );
}

export default App;
