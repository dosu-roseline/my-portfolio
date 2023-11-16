import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Intro from './components/Intro';
import LeftIcons from './components/LeftIcons';
import NavBar from './components/NavBar';
import Projects from './components/Projects';
import Right from './components/Right';

function App() {
  return (
    <div>
      <LeftIcons />
      <Right />
      <NavBar />
      <Intro />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
