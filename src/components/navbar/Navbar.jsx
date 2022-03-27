import React, {useState, useEffect} from 'react';
import API from '../../utils/API';
import { Bars, Nav, NavLink, NavMenu, NavBtn, NavBtnLink, Logo } from './style';


const Navbar = () => {
  const [userDetails, setUserDetails] = useState('')
  const [session , setSession] = useState(false)

  const getUserDetails = async ()=>{
    const response = await API.getAccountDetails()
    API.authenticate();
    setUserDetails(response.username)  
    setSession(true)
  }
  const logUserOut =()=>{
    API.logOut()

  }

  useEffect(()=>{

    getUserDetails()
    
  },[userDetails])



  return (
    <>
      <Nav>
        <NavLink to='/'>
          <Logo>LOGO</Logo>
          
        </NavLink>
        <Bars/>
        <NavMenu>
          <NavLink to='/favorites' activeStyle>
            Favorites
          </NavLink>
          <NavLink to='/watchlist' activeStyle>
            Watched Movies
          </NavLink>
          <NavLink to='/featured' activeStyle>
            FeaturedMovie
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <div style={{display: 'flex', justifyContent: 'right'}}>
            <NavBtn>
              <NavBtnLink to='/login'>{session? `Hi, ${userDetails}`  : 'signin'}</NavBtnLink>
            </NavBtn>
            <NavBtn>
              {/* <NavBtnLink to='/signup'>Sign Up</NavBtnLink> */}
              <NavBtnLink to='/login' onClick={logUserOut}>log out</NavBtnLink>
            </NavBtn>

        </div>
       
      </Nav>
    </>
  );
};

export default Navbar;