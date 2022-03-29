import React from "react";
import {
  SidebarContainer,
  CloseIconBar,
  Icon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
  BtnWrap,
} from "./style";
import { useNavigate } from "react-router-dom";
import API from "../../../utils/API";
const SideBar = ({ isOpen, toggle, setIsOpen }) => {
  const navigate = useNavigate();

  const signup = () => {
    alert(
      "this will take you to a new window where you can sign up with tmdb account, then come back and sign in"
    );
    window.open("https://www.themoviedb.org/signup", "_blank");
  };
  const logUserOut = async () => {
    const logout = await API.logOut();
    localStorage.removeItem("userLoggedIn");
    setIsOpen(!isOpen);
    navigate("/login");
  };

  return (
    <>
      <SidebarContainer isOpen={isOpen}>
        <Icon onClick={toggle}>{/* <CloseIconBar/> */}</Icon>

        <SidebarWrapper>
          <SidebarMenu>
            <SidebarLink to="/favorites">Favorite Tv Shows</SidebarLink>
            <SidebarLink to="/watchlist">WatchList</SidebarLink>
          </SidebarMenu>

          <SideBtnWrap>
            {localStorage.getItem("userLoggedIn") ? (
              <SidebarRoute to="/signin" onClick={logUserOut}>
                Sign Out
              </SidebarRoute>
            ) : (
              <BtnWrap>
                {/* <SidebarRoute to="/signin">Sign In</SidebarRoute> */}
                <SidebarRoute onClick={signup} to="">
                  Sign Up
                </SidebarRoute>
              </BtnWrap>
            )}
          </SideBtnWrap>
        </SidebarWrapper>
      </SidebarContainer>
    </>
  );
};

export default SideBar;
