import './App.scss';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Experiences from './components/Experiences';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Home from './components/Home/Home';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <div className='body'>
        <Home />
        <About />
        <Experiences />
        <Skills />
        <Contact />
      </div>
    </div>
  );
}

export default App;
