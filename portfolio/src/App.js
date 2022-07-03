import './App.scss';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Experiences from './components/Experiences/Experiences';
import Studies from './components/Studies/Studies';
import Skills from './components/Skills/Skills';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <div className='body'>
        <Home />
        <About />
        <Experiences />
        <Skills />
        <Studies />
        <Projects />
      </div>
    </div>
  );
}

export default App;
