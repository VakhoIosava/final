import React from 'react';
import '../App.css';
import i1 from './Img/i1.jpg';

const Footer = () => {
    return <div style={{textAlign:"left", backgroundColor:"black", padding:"10px", bottom:"0", width:"100%"}}>
      <img src={i1} alt="me" style={{textAlign:"center", float:"left", border:"solid 4px white", borderRadius:"50%", marginTop: "5px"}}/>
      <h2>I am Vakhtangi Iosava, junior front-end developer from Georgia. </h2>
      <h2>Skills: Html, Css, VanillaJs.</h2>
      <h2>Studying React and will study backend in near future to make full site. </h2>
      <h3 style={{color:"cyan", fontSize:"12px", textAlign: "center"}}>Copyright © Vakhtangi Iosava. All rights reserved | Terms of Use | Privacy Policy</h3>
    </div>
  }
  
  
export default Footer;