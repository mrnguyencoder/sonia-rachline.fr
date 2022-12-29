import './App.css';
import Articles from './componants/Articles';
import Footer from './componants/Footer';
import Hero from './componants/Hero';
import Livres from './componants/Livres';
import NavBar from './componants/NavBar';

function App() {
  return (
    <div >
      <NavBar />
      <Hero />
      <Livres />
      <Articles />
      <Footer />
    </div>
  );
}

export default App;
