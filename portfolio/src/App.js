import './App.scss';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Experiences from './components/Experiences/Experiences';
import Skills from './components/Skills/Skills';
import Home from './components/Home/Home';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <div className='body'>
        <Home />
        <About />
        <Skills />
        <Experiences />
      </div>
    </div>
  );
}

export default App;
