import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import TechStack from './components/TechStack/TechStack';
import About from './components/About/About';
import Expertise from './components/Expertise/Expertise';
import Portfolio from './components/Portfolio/Portfolio';
import Training from './components/Training/Training';
import Articles from './components/Articles/Articles';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import ProjectDetail from './pages/ProjectDetail';
import ArticleDetail from './pages/ArticleDetail';
import TrainingPage from './pages/TrainingPage';
import ScrollToTop from './components/ScrollToTop';

const MainPage = () => (
  <Box>
    <Navbar />
    <main>
      <Hero />
      <TechStack />
      <About />
      <Expertise />
      <Portfolio />
      <Training />
      <Articles />
      <Contact />
    </main>
    <Footer />
  </Box>
);

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/projects/:slug" element={<ProjectDetail />} />
        <Route path="/articles/:slug" element={<ArticleDetail />} />
        <Route path="/training" element={<TrainingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
