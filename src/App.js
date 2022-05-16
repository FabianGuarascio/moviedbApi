import './App.css';
import Home from './pages/Home';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import MovieDetails from './pages/MovieDetails';

function App() {
  return (
    <div className="App" id='app'>
      {/* <Home/> */}
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/moviedetails' element={<MovieDetails/>}/>


      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
