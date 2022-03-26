import './App.css'
import Favorites from "./pages/movieList/Favorites";
import { Routes, Route  } from 'react-router-dom'
import MovieScreen from './pages/movieList/MovieScreen';
import FormLogin from './pages/login/FormLogin';
import Signup from './pages/login/Signup';
import FeaturedMovie from './components/featuredMovie/FeaturedMovie';
import Navbar from './components/navbar/Navbar';

const App=()=> {
  return (

    <>
          <Navbar/>


      <Routes>

        <Route path="/" element={<MovieScreen/>}/>
        <Route path="favorites" element={<Favorites/>}/>
        <Route path="login" element={<FormLogin/>}/> 
        <Route path="signup" element={<Signup/>}/> 
        <Route path="featured" element={<FeaturedMovie/>}/> 
        

        
        
      </Routes>


 
    
      
      

    </>
  );
}

export default App;
