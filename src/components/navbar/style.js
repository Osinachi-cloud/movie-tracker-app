import MenuIcon from '@mui/icons-material/Menu';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components/macro';

export const Nav = styled.nav`
  background: #1B1A1E;
  height:80px;
  // background:red;
  // height: fit-content;
  display: flex;
  justify-content: space-between;
  // padding: 0.5rem calc((100vw - 1000px) / 2);
  z-index: 10;
  /* Third Nav */
  /* justify-content: flex-start; */
  width:100%;
  position:fixed;
  top:0;
  left:0;
  @media screen and (max-width: 768px) {

  }

`;

export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  font-family: 'Lato';
  color:rgb(150,150,150);
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #397D32;


  }
`;
export const Logo = styled.h2`
  font-weight:900;
  font-size:25px;
  color: #397D32;
`
export const Bars = styled(MenuIcon)`
  display: none;
  color: #fff;
  position:absolute;
  right:-100px;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;

  }
  @media screen and (min-width: 508px) {

  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  /* Second Nav */
  /* margin-right: 24px; */
  /* Third Nav */
  /* width: 100vw;
  white-space: nowrap; */
  @media screen and (max-width: 768px) {
    display: none;

  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right:10px;
  /* Third Nav */
  /* justify-content: flex-end;
  width: 100vw; */
  @media screen and (max-width: 768px) {
    display: none;

  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #397D32;
  padding: 8px 15px;
  font-family:'Lato';
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  /* Second Nav */
  margin-left: 24px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #397D32;
  }
`;