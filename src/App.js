import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap"
import Navbar from "./components/navbar/Navbar";
import './components/navbar/Navbar.css';
import Slider from "./components/slider/Slider"
import './components/slider/Slider.css'
import Newswiregames from "./components/newswire-games/Newswiregames"
import './components/newswire-games/Newswiregames.css'
import Featuredgames from "./components/featured-games/Featured-games";
import './components/featured-games/Featured-games.css'
import Footer from "./components/footer/Footer";
import './components/footer/Footer.css'
import {HashRouter as Router, Routes, Route} from "react-router-dom";
import Games from "./Pages/Games";
import Newswire from "./Pages/Newswire";

function App() {
  return (
    
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/newswire" element={<Newswire/>}/>
        <Route path="/games" element={<Games/>}/>
      </Routes>
    </Router>
  );
}

const Home = () => {
  return (
    <div className="app">
      <Slider/>,
      <Newswiregames/>
      <Featuredgames/>
      <Footer/>

    </div>
  )
}

export default App;
