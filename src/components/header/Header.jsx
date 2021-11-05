import React, { Component } from "react";
import Typewriter from "typewriter-effect";
import Logo from "../../assets/img/logo.png";
import Menu from "../menu/Menu";
import styled from "styled-components";

const StyledHeader = styled.header`
  display: inline-block;
  width: 100%;
  img {
    position: absolute;
    height: 80px;
    width: 80px;
    padding: 10px 195px 0 0;
  }
`;

const Stylednovo = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  p {
    position: relative;
    margin: 0 0 0 170px;
    padding-top: 2rem;
    font-size: 35px;
    font-weight: bold;
  }
`;
class Header extends Component {
  render() {
    return (
      <>
        <StyledHeader>
          <Stylednovo>
            <img src={Logo} alt="logo do site"></img>
            <p>
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString("OKOSHI")
                    .pauseFor(1000)
                    .deleteChars(10)
                    .typeString("Okoshi")
                    .start(2000);
                }}
              />
            </p>
          </Stylednovo>
          <Menu />
        </StyledHeader>
      </>
    );
  }
}
export default Header;
