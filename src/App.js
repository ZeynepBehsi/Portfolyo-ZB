import { Box } from '@mui/material';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import Articles from './components/Articles/Articles';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Box>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Portfolio />
        <Articles />
        <Contact />
      </main>
      <Footer />
    </Box>
  );
}

export default App;
