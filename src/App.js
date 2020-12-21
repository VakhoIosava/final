import './App.css';
import ImageCarousel from './Components/ImageCarousel';
import Posts from './Components/Posts/Post';
import {Link, Route, Switch} from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import ContactPage from './Components/Contact';
import AboutPage from './Components/About';
import MainPage from './Components/MainPage';
import Users from './Components/Users';
import Reviews from './Components/Reviews';
import DarkMode from './Components/DarkMode';


const NavBar = () => {
  return <div class="head" style={{justifyContent: "flex-end"}}>
    <Link to="/">Home</Link>
    <Link to="/contact">Contact</Link>
    <Link to="/clients">Last Clients</Link>
    <Link to="/reviews">Reviews</Link>
    <Link to="/about">About us</Link>
    <Link to="/projects">Projects</Link>
  </div>
}


function App() {
  return (
    <div className="App">
      <Header></Header>
      <NavBar></NavBar>
      <DarkMode></DarkMode>
      <Switch>
        <Route path="/" exact component={MainPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/clients" component={Users} />
        <Route path="/reviews" component={Reviews} />
        <Route path="/about" component={AboutPage} />
        <Route path="/projects" exact component={ImageCarousel} />
        <Route path="/projects/2" component={Posts} />
      </Switch>
      <Footer></Footer>
    </div>
  );
}

export default App;