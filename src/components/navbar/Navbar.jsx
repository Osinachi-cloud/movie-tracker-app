import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import { Bars, Nav, NavLink, NavMenu, NavBtn, NavBtnLink, Logo, SignUpBtnLink } from "./style";
import { useNavigate } from "react-router-dom";


const Navbar = () => {
  const [userDetails, setUserDetails] = useState("");
  const [isLoggedOut, setIsLoggedOut] = useState(true);
  const [name, setName] = useState("");
  const navigate = useNavigate()




  const getUserDetails = async () => {
    const response = await API.getAccountDetails();
    console.log(response.username)
 
    try{
    // localStorage.clear();
    // localStorage.removeItem("user")
    localStorage.setItem("username", response.username)
      API.authenticate();
      setUserDetails(response.username);
      console.log(localStorage.getItem("username"))
      setName(localStorage.getItem("username"))
      setIsLoggedOut(false);
      // window.location.href = '/login'
      console.log('I am logged in')

   }catch(e){
     console.log(e)
   }
  };





  const logUserOut = () => {
    API.logOut();
    setIsLoggedOut(API.logOut);
    navigate('/')
  };
  const signup =()=>{
    alert('this will take you to a new window where you can sign up with tmdb account, then come back and sign in')
    window.open("https://www.themoviedb.org/signup", '_blank');
  }

  useEffect(() => {

    getUserDetails();

  },[]);

  return (
    <>
    
      <Nav>
        <NavLink to="/">
          <Logo>LOGO </Logo>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/favorites" activestyle="true">
            Favorite TV
          </NavLink>
          <NavLink to="/watchlist" activestyle="true">
            My WatchList
          </NavLink>
          <NavLink to="/featured" activestyle="true">
            FeaturedMovie
          </NavLink>

     
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <div style={{ display: "flex", justifyContent: "right" }}>


          {isLoggedOut ? (
            <NavBtn>
              <NavBtnLink to="/login" >log in</NavBtnLink>
              {/* <NavBtnLink to="/login">sign up</NavBtnLink> */}

              <SignUpBtnLink onClick={signup} >Sign up</SignUpBtnLink>

            </NavBtn>
          ): (
            <NavBtn>
            <NavBtnLink to="/login">{`Hi, ${name}`}</NavBtnLink>   
            <NavBtnLink to="/login" onClick={logUserOut}>log out</NavBtnLink>
          </NavBtn>

          )}
     
        </div>
      </Nav>
    </>
  );
};

export default Navbar;
