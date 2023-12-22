
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/front/templates/Header';
import About from './components/front/front/About';
import { Routes, Route } from 'react-router-dom';
import Home from './components/front/front/Home';
import PaintDecoration from './components/front/front/PaintDecoration';
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="/painting-decorating" element={<PaintDecoration />} />
      </Routes>
    </div >
  );
}

export default App;
