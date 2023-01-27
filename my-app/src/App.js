import logo from './logo.svg';
import './App.css';
import Home from './Home.js';
import { Routes, Route } from 'react-router-dom';
import Bratari from './Bratari.js';
import Pietre from './Pietre.js';
import Pandantive from './Pandantive.js';
import ProductDetail from './ProductDetail.js'

function App() {
  return (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/produse" element={<Bratari />} />
    <Route path="/pietre" element={<Pietre />} />
    <Route path="/pandantive" element={<Pandantive/>} />
    <Route path="/detail" element={<ProductDetail/>} />
  </Routes>
  );
}

export default App;
