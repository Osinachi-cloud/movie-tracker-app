// import Home from "./components/Home";
import './App.css'
import Favorites from "./components/movieList/Favorites";
import { Routes, Route  } from 'react-router-dom'
import MovieScreen from './components/movieList/MovieScreen';

const App=()=> {
  return (

    <>


      <Routes>
        <Route path="/" element={<MovieScreen/>}/>
        <Route path="favorites" element={<Favorites/>}/>
        
        
        
      </Routes>


      {/* <Home/>


      <Favorites/> */}
    
      
      

    </>
  );
}

export default App;
