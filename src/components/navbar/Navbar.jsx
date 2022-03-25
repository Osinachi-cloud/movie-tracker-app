import React from 'react';
import { Bars, Nav, NavLink, NavMenu, NavBtn, NavBtnLink } from './style';


const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
          LOGO
        </NavLink>
        <Bars/>
        <NavMenu>
          <NavLink to='/favorites' activeStyle>
            Favorites
          </NavLink>
          <NavLink to='/services' activeStyle>
            Services
          </NavLink>
          <NavLink to='/contact-us' activeStyle>
            Contact Us
          </NavLink>
          <NavLink to='/sign-up' activeStyle>
            Sign Up
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <div style={{display: 'flex', justifyContent: 'center'}}>
        <NavBtn>
          <NavBtnLink to='/signin'>Sign In</NavBtnLink>
        </NavBtn>
        <NavBtn>
          <NavBtnLink to='/signin'>Sign Up</NavBtnLink>
        </NavBtn>

        </div>
       
      </Nav>
    </>
  );
};

export default Navbar;