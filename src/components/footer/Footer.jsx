import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  text-align: center;
  background-image: linear-gradient(to right, #f6d365 0%, #fda085 100%);
  padding: 5px;
  width: 100%;
  
  position: relative;
  bottom: 0;
  p {
    font-family: IM Fell English SC, serif;
    font-size: 15px;
    color: rgb(0, 0, 0);
  }
  @media (max-width: 780px) {
    width: 100%;
    margin-top: 55px;
    text-align: center;
  }
`;

const Footer = () => {
  return (
    <>
      <StyledFooter>
      <p>Copyright &copy; Grupo Deméter - {new Date().getFullYear()}</p>
      </StyledFooter>
    </>
  );
};
export default Footer;