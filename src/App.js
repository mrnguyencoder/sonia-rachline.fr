import './App.css';
import Articles from './componants/Articles';
import Footer from './componants/Footer';
import Hero from './componants/Hero';
import Publications from './componants/Publications';
import NavBar from './componants/NavBar';
// import { BrowserRouter as Route, Router, Routes } from 'react-router-dom';



function App() {
  return (
    <div className='bg-slate-800'>
        <NavBar />
        <Hero />
        <Articles />
        <Publications />
        <Footer/>
    </div>
  );
}

export default App;
