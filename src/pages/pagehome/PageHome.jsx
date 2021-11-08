import React from "react";
import styled from "styled-components";
import ShowSlide from "./SlideShow";

const Section = styled.section`
  width: 100%;
  height: 85vh;
  display: flex;
  margin: 0;
  padding: 2em;
  align-items: center;
`;

const Div = styled.div`
  width: 550px;
  margin-left: 10em;
  h1 {
    font-size: 4em;
    position: relative;
    display: block;
  }
  p {
    font-size: 1.5em;
    position: relative;
    display: block;
  }
`;

const Divi = styled.div`
  width: 700px;
  height: 500px;
  padding: 5px;
  margin: 0 2rem 0 0;
`;

function PageHome() {
  return (
    <>
      <Section>
        <Div>
          <h1>titulo</h1>
          <p>vamos falar aqui sobre inicial</p>
        </Div>
        <Divi>
          <ShowSlide />
        </Divi>
      </Section>
      <Section>
        <div>
          <iframe src="https://giphy.com/embed/gi7h31nLA9c6DVxpyn"></iframe>
        </div>
        <div>
          <h2>Sobre nos</h2>
          <h3>aqui escreveremos sobre a pag</h3>
        </div>
      </Section>
    </>
  );
}

export default PageHome;
