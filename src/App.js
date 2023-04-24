import './App.css'
import Work from './Components/Work/Work';
import Intro from './Components/Intro/Intro';
import Navbar from './Components/Navbar/Navbar';
import Services from './Components/Services/Services';
import Experience from './Components/Experience/Experience';
import Portfolio from './Components/Portfolio/Portfolio';
import Testimonial from './Components/Testimonial/Testimonial';
import ContactMe from './Components/ContactMe/ContactMe';
import Footer from './Components/Footer/Footer';
import {themeContext} from './Context'
import {useContext} from 'react'

function App() {
  const theme = useContext(themeContext)

  const darkMode = theme.state.darkMode;
  return (
    <div className="App"
    style={{
      background : darkMode ? 'black' : '',
      color: darkMode ? 'white' : ''
    }}
    >
      <Navbar/>
      <Intro/>
      <Services/>
      <Experience/>
      <Work/>
      <Portfolio/>
      <Testimonial/>
      <ContactMe/>
      <Footer/>
      
      
    </div>
  );
}

export default App;
