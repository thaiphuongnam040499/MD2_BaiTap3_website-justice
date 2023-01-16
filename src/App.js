import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Carousel from './components/Carousel';
import AboutStart from './components/AboutStart';
import ServicesStart from './components/ServicesStart';
import Appointmen from './components/Appointmen';
import Features from './components/Features';
import Action from './components/Action';
import Team from './components/Team';
import Testimonial from './components/Testimonial';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <>
  {/* Header Start */}
  <Header/>
  {/* Header End */}
  {/* Carousel Start */}
    <Carousel/>
  {/* Carousel End */}
  {/* About Start */}
  <AboutStart/>
  {/* About End */}
  {/* Services Start */}
  <ServicesStart/>
  {/* Services End */}
  {/* Appointment Start */}
  <Appointmen/>
  {/* Appointment End */}
  {/* Features Start */}
  <Features/>
  {/* Features End */}
  {/* Action Start */}
    <Action/>
  {/* Action End */}
  {/* Team Start */}
  <Team/>
  {/* Team End */}
  {/* Testimonial Start */}
  <Testimonial/>
  {/* Testimonial End */}
  {/* Footer Start */}
  <Footer/>
  {/* Footer End */}
</>
    </div>
  );
}

export default App;
