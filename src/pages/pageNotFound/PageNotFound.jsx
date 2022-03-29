import React from "react";
import {
  PageNotFoundContainer,
  NotFoundSection,
  ErrorDigit,
  ErrorStatement,
  BackToHomeLink,
} from "./styles";

const PageNotFound = () => {
  return (
    <PageNotFoundContainer>
      <NotFoundSection>
        <ErrorDigit>404</ErrorDigit>
        <ErrorStatement>
          the page you are looking for does not exist or is unauthorized
        </ErrorStatement>
        <BackToHomeLink to="/">Back to Home</BackToHomeLink>
      </NotFoundSection>
    </PageNotFoundContainer>
  );
};

export default PageNotFound;
