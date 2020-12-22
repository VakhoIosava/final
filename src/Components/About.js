import React, {Fragment} from 'react';
import '../App.css';

import image1 from '../Components/Img/fb.jpg';
import image2 from '../Components/Img/github.jpg';
import image3 from '../Components/Img/twitter.jpg';
import image4 from '../Components/Img/linkedin.jpg';

const AboutPage = () => {
    return <Fragment>
      <div>
          <a className="as" target="_blank" href="https://vakhoiosava.github.io/portfolio/">
          <h5 className="aa">Javascript Portfolio - vakhoiosava.github.io/portfolio/</h5></a>
          <a className="as" target="_blank" href="https://vakhoiosava.github.io/final/">
            <h5 className="aa">React Portfolio - vakhoiosava.github.io/final/</h5></a>
      </div>
      <div style={{margin:"70px"}}>
        <a target="_blank" href="https://www.facebook.com/vaxo.iosava.7/">
          <img src={image1} alt="image" class="pic1"></img></a>
        <a target="_blank" href="https://github.com/VakhoIosava">
          <img src={image2} alt="image" class="pic1"></img></a>
        <a target="_blank" href="https://twitter.com/IosavaVaxo">
          <img src={image3} alt="image" class="pic1"></img></a>
        <a target="_blank" href="https://www.linkedin.com/">
          <img src={image4} alt="image" class="pic1"></img></a>
        </div>
      </Fragment>
  }
export default AboutPage;