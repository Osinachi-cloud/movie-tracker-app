import { Link } from "react-router-dom";
import styled from "styled-components/macro";

export const PageNotFoundContainer = styled.div`
  height: 100vh;
  display: flex;
`;
export const NotFoundSection = styled.div`
  margin: auto;
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const ErrorDigit = styled.div`
  font-size: 8rem;
  color: white;
  text-align: center;
`;
export const ErrorStatement = styled.div`
  text-align: center;
  font-size: 1rem;
  color: rgb(150, 150, 150);
`;
export const BackToHomeLink = styled(Link)`
  color: green;
  font-size: 1rem;
`;
