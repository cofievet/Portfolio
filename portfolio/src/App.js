import './App.css';
import Navbar from './components/Navbar';
import About  from './components/About';
import Projects from './components/Projects';
import Experiences from './components/Experiences';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
        <Navbar />
        <About />
        <Projects />
        <Experiences />
        <Skills />
        <Contact />
    </div>
  );
}

export default App;
