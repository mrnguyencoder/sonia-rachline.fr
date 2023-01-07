import './App.css';
import Articles from './componants/Articles';
import Footer from './componants/Footer';
import Hero from './componants/Hero';
import Publications from './componants/Publications';
import NavBar from './componants/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MentionsLegales from './pages/MentionsLegales';



function App() {
  return (
    <BrowserRouter className='bg-slate-800'>
      <NavBar />
      <Hero />
      <Articles />
      <Publications />
      <Footer/>
      <Routes>
        <Route path= "mentionslegales" element={<MentionsLegales />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
