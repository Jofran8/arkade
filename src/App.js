import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Tienda from './pages/Tienda';
import FormPago from './pages/FormPago';
import Socios from './pages/Socios';
import About  from './pages/About';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';


function App() {
  return (
    <Router>
      <Header/>
      <main>
        <Routes>
          <Route path="/catalogo/formPago" element={<FormPago/>} />
          <Route path="/socios" element={<Socios/>} />
          <Route path="/catalogo" element={<Tienda/>} />
          <Route path="/nosotros" element={<About />} />
         
          <Route path="/" element={<Home/>} />
        </Routes>
      </main>
      <Footer/>
    </Router>
  );
}

export default App;
