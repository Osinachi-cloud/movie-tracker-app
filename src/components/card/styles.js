import styled from 'styled-components/macro';
import { Link } from 'react-router-dom'

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

export const MovieCard = styled.div`
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
cursor: pointer;
transform:scale(1);
overflow: hidden;
width: 100%;
height: auto;
object-fit: cover;


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





export const CloseModal = styled.div`
    position: absolute;
    right:0;
    top: 0;


`
export const Form = styled.form`
    display:flex;
    flex-direction: column;


`
export const CommentBox = styled.textarea`
    width:100%;
    margin-bottom:10px;
    margin-top:5px;
    border:none;
    outline-width:0;
    padding:10px;
    border-radius:4px;


`
export const AddCommentButton = styled.button`
    width:25%;
    background-color:rgb(70,70,70);
    border:none;
    color:white;
    padding: 5px;
    border-radius:4px;

`



export const ImgLink = styled(Link)`

  
`;

