import styled from 'styled-components/macro';


export const Title = styled.p`
  font-size: 1.3rem;
  text-align: center;
  color:black;
  position:absolute;
  bottom:50px;
  left:5px;
  color:rgb(210,210,210);
  font-family: "poppins"
  font-weight:400;
  letter-spacing:1;
`;

export const MovieCard = styled.li`
  font-size: 24px;
  color: #e5e5e5;
  font-weight: bold;
  width:25%;
  height:200px;
  list-style:none;
  // border: 1px solid red;  
  background-repeat: no-repeat;
  display:flex;
  flex-direction:column;
  align-items: center;
  justify-content: left;
  position:relative;
  height:230px;
  background-color:#1D1D1D;
  border-right:1px solid rgba(150,150,150,0.2);



  @media (max-width: 950px) {
    width:33%;
  }
  @media (max-width: 767px) {
    width:48%;
  }
  @media (max-width: 400px) {
    width:100%;
  }
  
`;

export const MovieImage = styled.img`
display: block;
width: 100%;
height:202px;
cursor: pointer;
  transform:scale(1);
  overflow: hidden;
//   -webkit-filter: hue-rotate(180deg); 
// -moz-filter:  hue-rotate(180deg); 
// -ms-filter:  hue-rotate(180deg);  
// -o-filter:  hue-rotate(180deg);  
// filter: hue-rotate(180deg); 


  &:hover {
    transform:scale(1.1);
  transition: all 0.5s ease;
  overflow: hidden;


  }
  
`
;

export const Figure = styled.figure`
  overflow: hidden;

`

export const ActionWrapper= styled.div`
  // display:flex;
  // justify-content:left;
  width:100%;

`
export const IconWrapButton = styled.div`
display: flex;
justify-content:center;
align-items:center;
  height: 40px;
  width: 40px;
  float: left;
  margin: 0;
  overflow: hidden;
  // background: #fff;
  border-radius: 0px;
  // border: 1px solid red;
  cursor: pointer;
  /* box-shadow: 0px 10px 10px rgba(0,0,0,0.1); */
  transition: all 0.3s ease-out;

  &: hover{
    background-color:black;
  }
  
`

export const IconWrapper = styled.div`
display: inline-flex;
// display:flex;
justify-content:center;
align-items:center;
height: 40px;
width: 40px;
text-align: center;
/* border-radius: 50px; */
box-sizing: border-box;
line-height: 40px;
transition: all 0.3s ease-out;

`



