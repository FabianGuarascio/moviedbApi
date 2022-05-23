import './App.css';
import Home from './pages/Home';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import MovieDetails from './pages/MovieDetails';
import Listado from './pages/Listado';
import Contact from './pages/Contact';
import 'animate.css'



function App() {
  return (
    <div className="App" id='app'>
      {/* <Home/> */}
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/list' element={<Listado/>}/>
        <Route path='/moviedetails' element={<MovieDetails/>}/>
        <Route path='/contact' element={<Contact/>}/>


      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
