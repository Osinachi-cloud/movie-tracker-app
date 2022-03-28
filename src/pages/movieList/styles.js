import styled from 'styled-components/macro';

export const Container = styled.div`
  margin: 0%;
  background-color:#1F2023;
  padding-top:50px;

`;



export const MovieList = styled.ul`
  display:flex;
  justify-content:center;
  flex-wrap: wrap;
  
`
;

export const SearchInputWrapper = styled.div`
  width:90%;
  margin:0 auto;
  margin-bottom:50px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 1rem;
  border-radius: 10px;
  background: #1f2123;
  -webkit-box-shadow: 5px 5px 7px #1c1d1f, -5px -5px 7px #222527;
  box-shadow: 5px 5px 7px #1c1d1f, -5px -5px 7px #222527, 5px 5px 7px #1c1d1f, -5px -5px 7px #222527;
  
`
;
export const SearchInput = styled.input`
  width:100%;
  flex: 1;
  border: none;
  font-size: 1.5rem;
  font-family: var(--font-raleway);
  font-weight: 500;
  padding-right: 1rem;

  outline: none;
  color: #a1a1a1;
  background: #1f2123; 
`
;

export const SearchIconWrapper = styled.div`
width: 35px;
height: 35px;
display:flex;
justify-content: center;
align-items: center;
cursor: pointer;
box-shadow: 5px 5px 7px #1c1d1f, -5px -5px 7px #222527;


  &:hover {
  //   transform:scale(1.1);
  // transition: all 0.5s ease;
  // overflow: hidden;
  }
  
`
;





