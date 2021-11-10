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
  margin-left: 6em;
  padding: 10px;
  text-align: justify;
  h1 {
    font-size: 2em;
    position: relative;
    display: block;
    margin: 10px;
  }
  p {
    font-size: 1.2em;
    position: relative;
    display: block;
    margin: 10px;
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
          <h1>UMA NOVA FORMA DE FAZER DOAÇOES PARA QUEM MAIS PRECISA!</h1>
          <p>
            O projeto consiste em que tanto os supermercados quanto as entidades
            assistenciais possam se cadastrar para ter acesso às funcionalidades
            da plataforma. Os supermercados podem cadastrar os produtos que
            estejam com o prazo de validade próximo ao vencimento, informando as
            características do produto, como nome, quantidade, localização e
            data de validade. Já as entidades assistenciais podem verificar os
            alimentos disponíveis em sua localidade, podendo reservar aqueles
            que desejar, para posterior coleta no ponto informado pelo sistema.
          </p>
        </Div>
        <Divi>
          <ShowSlide />
        </Divi>
      </Section>
      <Section>
        <div>
          <iframe
            src="https://giphy.com/embed/gi7h31nLA9c6DVxpyn"
            width="200"
            height="150"
          ></iframe>
        </div>
        <div>
          <h2>Quem somos?</h2>
          <h3>
            Deméter nasceu com a finalidade é reduzir a distância entre a comida
            abundante que seria desperdiçada e aqueles que a necessitam e,
            infelizmente, não tem acesso a ela, sobretudo pela condição
            socioeconômica.
          </h3>
        </div>
      </Section>
      <Section>
        <div>
          <h2>Como funciona?</h2>
          <h3>
            Deméter nasceu com a finalidade é reduzir a distância entre a comida
            abundante que seria desperdiçada e aqueles que a necessitam e,
            infelizmente, não tem acesso a ela, sobretudo pela condição
            socioeconômica.
          </h3>
        </div>
      </Section>
      <Section>
        <div>
          <h2>Rank dos doadores que abraçaram a nossa causa</h2>
          <h3>
            Afinal todos são bem vindos a contribuir com a nossa causa seja voce
            tambem um doador.
          </h3>
        </div>
      </Section>
    </>
  );
}

export default PageHome;
