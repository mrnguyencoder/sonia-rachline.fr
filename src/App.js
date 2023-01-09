import './App.css';
import Articles from './componants/Articles';
import Footer from './componants/Footer';
import Home from './componants/Home';
import ÀPropos from './componants/ÀPropos';
import Publications from './componants/Publications';
import NavBar from './componants/NavBar';
import { Route, Routes } from 'react-router-dom';
import MentionsLegales from './componants/MentionsLegales';
import Contact from './componants/Contact';



function App() {
  return (
    <div className='bg-slate-800'>
        <NavBar />
        <Routes>
          <Route path= "/" element={<Home />} />
          <Route path= "/a-propos" element={<ÀPropos />} />
          <Route path= "/articles" element={<Articles />} />
          <Route path= "/publications" element={<Publications />} />
          <Route path= "/contact" element={<Contact />} />
          <Route path="/mentions-legales" element={<MentionsLegales />} />
        </Routes>
        <Footer/>
        
    </div>
  );
}

export default App;
