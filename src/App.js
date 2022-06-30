import logo from './logo.svg';
import './App.css';
import Align from './ProtfolioComponent/Home/Align';
import Features from './ProtfolioComponent/Features/Features';
import Project from './ProtfolioComponent/Project/Project';
import Resume from './ProtfolioComponent/Resume/Resume.js';
import Contact from './ProtfolioComponent/ContactMe/Contact';
function App() {
  return (
    <>
      <Align />
      <Resume/>
      <Features />
      <Project />
      <Contact/>
    </>
  );
}

export default App;
