import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const CardContainer = ({ children }) => {
  return <Container>{children}</Container>;
};

export default CardContainer;
