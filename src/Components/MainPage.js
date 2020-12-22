import React, { Fragment } from 'react';
import '../App.css';
import BgImg from '../Components/Img/bgimg.jpg';

const MainPage = () => {
    return <Fragment>
    <section style = {{ backgroundImage:`url(${BgImg})`, 
    backgroundSize:"cover", backgroundPosition:"center", 
    marginRight:"-20px", height:"500px"}}>
      <section style={{textAlign:"center", padding:"120px"}}>
        <div className="intro">
          <div className="im">I'm</div>
          <div className="rvl"> <span>Vakho Iosava</span></div>
          <div className="btmrvl"> <span>I am Front-end Developer</span></div>
        </div>
      </section>
    </section>
    </Fragment>
  }

export default MainPage;