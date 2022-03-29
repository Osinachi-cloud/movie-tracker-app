import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import {
  Bars,
  Nav,
  NavLink,
  NavMenu,
  NavBtn,
  NavBtnLink,
  Logo,
  SignUpBtnLink,
  CloseIconBurger,
} from "./style";
import { useNavigate } from "react-router-dom";


const Navbar = ({ toggle, setIsOpen, isOpen }) => {
  const [userDetails, setUserDetails] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("userLoggedIn")
  );
  const [name, setName] = useState("");
  const navigate = useNavigate();

  console.log({ toggle, setIsOpen, isOpen });

  const getUserDetails = async () => {
    const response = await API.getAccountDetails();
    console.log(response.username);

    try {
      // localStorage.clear();
      // localStorage.removeItem("user")
      localStorage.setItem("username", response.username);
      API.authenticate();
      setUserDetails(response.username);
      console.log(localStorage.getItem("username"));
      setName(localStorage.getItem("username"));
      setIsLoggedIn();
      // window.location.href = '/login'
      console.log("I am logged in");
    } catch (e) {
      console.log(e);
    }
  };

  const logUserOut = async () => {
    const logout = await API.logOut();
    localStorage.removeItem("userLoggedIn");
    navigate("/login");
  };
  const signup = () => {
    alert(
      "this will take you to a new window where you can sign up with tmdb account, then come back and sign in"
    );
    window.open("https://www.themoviedb.org/signup", "_blank");
  };

  useEffect(() => {
    if (localStorage.getItem("userLoggedIn")) {
      getUserDetails();
      navigate("/");
    } else {
      navigate("/login");
    }
  }, []);

  return (
    <>
      <Nav>
        <NavLink to="/">
          <Logo>LOGO </Logo>
        </NavLink>
        <div
          onClick={() => {
            toggle();
          }}
        >
          {isOpen ? <CloseIconBurger /> : <Bars />}
        </div>
        <NavMenu>
          <NavLink to="/favorites" activestyle="true">
            Favorite TV
          </NavLink>
          <NavLink to="/watchlist" activestyle="true">
            My WatchList
          </NavLink>
        </NavMenu>
        <div style={{ display: "flex", justifyContent: "right" }}>
          {localStorage.getItem("userLoggedIn") ? (
            <NavBtn>
              <NavBtnLink to="/login">{`Hi, ${localStorage.getItem(
                "username"
              )}`}</NavBtnLink>
              <NavBtnLink to="/login" onClick={logUserOut}>
                log out
              </NavBtnLink>
            </NavBtn>
          ) : (
            <NavBtn>
              <SignUpBtnLink onClick={signup}>Sign up</SignUpBtnLink>
            </NavBtn>
          )}
        </div>
      </Nav>
    </>
  );
};

export default Navbar;
