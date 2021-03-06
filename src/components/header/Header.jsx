import React, { Component } from "react";
import Typewriter from "typewriter-effect";
import Logo from "../../assets/img/logo.png";
import Menu from "../menu/Menu";
import styled from "styled-components";

const StyledHeader = styled.header`
  display: inline-block;
  width: 100%;
  background-image: radial-gradient(
    circle at 56.16% 120.44%,
    #ff9052 0,
    #ff7f4f 16.67%,
    #fa6849 33.33%,
    #ec4940 50%,
    #dd2039 66.67%,
    #d10038 83.33%,
    #c8003c 100%
  );
  img {
    position: absolute;
    height: 95px;
    width: 95px;
    padding: 10px 5px 0 0;
  }
  @media (max-width: 783px) {
    img {
      height: 80px;
      width: 80px;
      padding: 10px 1px 0 0;
      margin-right: 60px;
    }
  }
`;

const Stylednovo = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  p {
    position: relative;
    margin: 0 0 0 250px;
    padding-top: 2rem;
    font-size: 35px;
    font-weight: bold;
  }
  @media (max-width: 783px) {
    p {
      margin-left: 9rem;
      font-size: 25px;
    }
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
                    .typeString("Dmt")
                    .pauseFor(1000)
                    .deleteChars(10)
                    .typeString("Deméter")
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
