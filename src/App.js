import "./App.css";
import Favorites from "./pages/movieList/Favorites";
import { Routes, Route } from "react-router-dom";
import MainScreen from "./pages/movieList/MainScreen";
import FormLogin from "./pages/login/FormLogin";
import FeaturedMovie from "./components/featuredMovie/FeaturedMovie";
import Navbar from "./components/navbar/Navbar";
import UserProvider from "./stateContext/StateProvider";
import WatchList from "./pages/movieList/WatchList";
import ViewSingleMovieDetails from "./components/featuredMovie/ViewSingleMovieDetails";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  return (
    <>
      <Navbar />
      <UserProvider>
        <Routes>
          <Route exact path="/" element={<ProtectedRoute />}>
            <Route exact path="/" element={<MainScreen />} />
          </Route>
          <Route exact path="/favorites" element={<ProtectedRoute />}>
            <Route exact path="/favorites" element={<Favorites />} />
          </Route>
          <Route exact path="/favorites" element={<ProtectedRoute />}>
            <Route exact path="/favorites" element={<Favorites />} />
            <Route path="/favorites/:id" element={<ViewSingleMovieDetails />} />

          </Route>
          <Route exact path="/watchlist" element={<ProtectedRoute />}>
            <Route exact path="/watchlist" element={<WatchList />} />
          </Route>


          <Route path="/favorites" element={<Favorites />} />
          <Route path="/login" element={<FormLogin />} />
          {/* <Route path="/featured" element={<FeaturedMovie />} /> */}
          <Route path="/watchlist" element={<WatchList />} />
          <Route path="/favorites/:id" element={<ViewSingleMovieDetails />} />

          {/* <Route path="/home" element={
          <RequireAuth>
               <MovieScreen/>
          </RequireAuth>
        
        } />  */}
        </Routes>
      </UserProvider>
    </>
  );
};

export default App;
