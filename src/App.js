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
import PublicationDetails from './componants/PublicationDetails';



function App() {
  return (
    <div className='bg-slate-900'>
        <NavBar />
        <Routes>
          <Route path= "/" element={<Home />} />
          <Route path= "/a-propos" element={<ÀPropos />} />
          <Route path= "/articles" element={<Articles />} />
          <Route path= "/publications" element={<Publications />} />
          <Route path= "/publications/" element={<PublicationDetails />} />
          <Route path= "/contact" element={<Contact />} />
          <Route path="/mentions-legales" element={<MentionsLegales />} />
        </Routes>
        <Footer/>
        
    </div>
  );
}

export default App;
