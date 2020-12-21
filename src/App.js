import './App.css';
// import ImageCarousel from './Components/ImageCarousel';
// import Posts from './Components/Posts/Post';
import {Link, useHistory, Route, Switch} from 'react-router-dom';
// import lg from './img/favicon.ico';
import Header from './Components/Header';
import Footer from './Components/Footer';
import ContactPage from './Components/Contact';
import AboutPage from './Components/About';
import MainPage from './Components/MainPage'


const NavBar = () => {
  return <div class="head" style={{justifyContent: "flex-end"}}>
    <Link to="/">Home</Link>
    <Link to="/contact">Contact</Link>
    <Link to="/about">About us</Link>
  </div>
}


function App() {
  return (
    <div className="App">
      <Header></Header>
      <NavBar></NavBar>
      <Switch>
        <Route path="/" exact component={MainPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/about" component={AboutPage} />
      </Switch>
      <Footer></Footer>
    </div>
  );
}


export default App;
