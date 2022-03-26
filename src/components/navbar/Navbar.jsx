import React from 'react';
import { Bars, Nav, NavLink, NavMenu, NavBtn, NavBtnLink, Logo } from './style';


const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
          <Logo>
               LOGO
          </Logo>
          
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
              <NavBtnLink to='/login'>Sign In</NavBtnLink>
            </NavBtn>
            <NavBtn>
              <NavBtnLink to='/signup'>Sign Up</NavBtnLink>
            </NavBtn>

        </div>
       
      </Nav>
    </>
  );
};

export default Navbar;