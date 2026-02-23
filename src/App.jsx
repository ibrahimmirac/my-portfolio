import { useTheme } from './context/ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Profile from './components/Profile';
import Projects from './components/Projects';
import Footer from './components/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {
  const { theme } = useTheme();

  return (
    <div
      className={[
        'min-h-screen',
        theme === 'dark' ? 'bg-dark-bg text-white' : 'bg-white text-gray-900'
      ].join(' ')}
    >
      <Header />
      <Hero />
      <Skills />
      <Profile />
      <Projects />
      <Footer />

      <ToastContainer position="top-right" autoClose={2000} />

    </div>
  )
};

export default App;