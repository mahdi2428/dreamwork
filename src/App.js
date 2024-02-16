import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Home from './pages/home';
import Moviespage from './pages/movies';
import Intro from './pages/intro';
import Main from './pages/main';
import Aboutus from './pages/about';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/movies' element={<Moviespage />} />
          <Route path='/intro' element={<Intro/>} />
          <Route path='/main' element={<Main/>} />
          <Route path='/aboutus' element={<Aboutus/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
