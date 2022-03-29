import "./App.css";
import Favorites from "./pages/movieList/Favorites";
import { Routes, Route } from "react-router-dom";
import MainScreen from "./pages/movieList/MainScreen";
import FormLogin from "./pages/login/FormLogin";
import UserProvider from "./stateContext/StateProvider";
import WatchList from "./pages/movieList/WatchList";
import ViewSingleMovieDetails from "./components/featuredMovie/ViewSingleMovieDetails";
import ProtectedRoute from "./components/ProtectedRoute";
import Nav from "./components/navbar/Nav";
import PageNotFound from "./pages/pageNotFound/PageNotFound";

const App = () => {
  return (
    <>
      <Nav />

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
          <Route path="/login" element={<FormLogin />} />
          <Route path="/*" element={<PageNotFound/>} />
          
        </Routes>
      </UserProvider>
    </>
  );
};

export default App;
