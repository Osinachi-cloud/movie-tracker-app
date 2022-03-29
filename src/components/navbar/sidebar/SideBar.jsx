import React from 'react'
import { SidebarContainer,CloseIconBar, Icon, SidebarWrapper,SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute   } from './style'
const SideBar = ({isOpen, toggle}) => {
  return (
      <>
    <SidebarContainer isOpen={isOpen} >
        <Icon onClick={toggle}>
            <CloseIconBar/>
        </Icon>
        
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to = "/">
                    Favorite Tv Shows 
                </SidebarLink>
                <SidebarLink to = "/">
                    WatchList
                </SidebarLink>
               
            </SidebarMenu>


            <SideBtnWrap>
            <SidebarRoute to="/signin">
                Sign In

            </SidebarRoute>

            </SideBtnWrap>
           
             
        </SidebarWrapper>

    </SidebarContainer>


    </>

  )
}

export default SideBar