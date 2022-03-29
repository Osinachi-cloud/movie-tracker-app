import styled from 'styled-components/macro';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'

export const SidebarContainer = styled.aside`
position : fixed;
z-index :999;
width:100%;
// height:50%;
background: #0d0d0d;
display:grid;
align-items : center;
top:0;
left:0;
transition: 0.3s ease-in-out;
opacity: ${({isOpen}) => (isOpen ? '100%': '0')};
top: ${({isOpen})=> (isOpen ? '0': '-100%')}
// top:0;
`

export const CloseIconBar = styled(CloseIcon)`
    color:#fff;
`
export const Icon = styled.div`
    position: absolute;
    top:1.2rem;
    right:1.5rem;
    background:transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none ;

  
`
export const SidebarWrapper = styled.div`
    color:#fff;
 

`
export const SidebarMenu = styled.ul`
    display:grid;
    grid-template-columns:1fr;
    grid-template-rows:repeat(2, 60px);
    text-align:center;
    margin-top:8vh;

    @media screen and (max-width: 480px) {
        grid-template-rows: repeat(2, 80px);
    }

`


export const SidebarLink = styled(LinkS)`
   display:flex;
   align-items:center;
   justify-content:center;
   font-size:1rem;
   text-decoration: none;
   list-style:none;
   font-family:"lato";
   font-weight:400;
   transition: 0.2 ease-in-out;
   text-decoration: none;
   color:#fff;
   cursor:pointer;

   &:hover{
       color:#01bf71;
       transition: 0.2 ease-in-out;
   }
`

export const SideBtnWrap = styled.div`
    display:flex;
    justify-content:center;
`
export const SidebarRoute = styled(LinkR)`
    border-radius:50px;
    white-space:nowrap;
    padding: 16px 64px;
    color:green;
    font-size:22px;
    font-weight:900;
    outline:none;
    border:3px solid white;
    cursor:pointer;
    transition: all 0.2s ease-in-out;
    text-decoration:none;
    margin-top:30px;
    background: #fff;
    margin-bottom:30px;

&:hover {
    transition: all 0.2s ease-in-out;
    border: 3px solid green;

}
`