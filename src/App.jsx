import { Route , Routes } from 'react-router-dom';

import './App.css';

import Header from './components/Header/Header';
import HomePage from "./pages/Home/HomePage"
import AboutPage from "./pages/About/AboutPage"
import ContactPage from "./pages/Contact/ContactPage"
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div className="App">
      <Header />

      <Routes>  
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>

      <Footer/>
    </div>
  );
}

export default App;
