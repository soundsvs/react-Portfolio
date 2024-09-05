
import './App.css';
import HeroSection from './components/HeroSection';
import Projects from './components/Projects';
import TechStack from './components/TechStack';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <HeroSection/>
      <TechStack/>
      <Projects/>
      
    </div>
  );
}

export default App;
