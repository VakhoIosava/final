import React from 'react';
import ReactDOM from 'react-dom';
import '../App.css';

const Header = () => {
    return <div class="head" style={{textAlign: "left", padding: "0 20px"}}>
      <img src={lg}/>
      <h1 style={{color: "cyan", fontSize: "25px", paddingLeft: "20px"}}>Vakhtangi Iosava- Portfolio</h1>
    </div>
}
  
export default Header;