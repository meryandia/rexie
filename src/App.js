import './App.css';
import News from './components/News';
import Header from './components/Header';
import Carousel from './components/Carousel';
import Footer from './components/Footer';
import Cambia from './components/Cambia';
import Estadistica from './components/Estadistica';
import Bancos from './components/Bancos';
import TipoCambo from './components/TipoCambo';
import Social from './components/Social';
import Main from './components/Main';
import Opiniones from './components/Opiniones';
import Video from './components/Video';
import Up from './components/Up';


function App() {
  return (
    <>
      <News/>
      <Header />
      <Main/>
      <Bancos/>
      <TipoCambo/>
      <Cambia />
      <Estadistica />
      <Carousel/>
      <Opiniones/>
      <Video/>
      <Social/>
      <Up/>
      <Footer/>
    </>
  );
}

export default App;
