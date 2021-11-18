import React from "react";
import styled from "styled-components";
import ShowSlide from "./SlideShow";

const Section = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  margin: 0;
  padding: 2em;
  align-items: center;
  color: #000000;
  a {
    color: #e40707;
    text-decoration: none;
  }
  @media (max-width: 781px) {
    flex-direction: column;
    align-items: center;
    padding: 5px;
    margin: 5px;
    h2 {
      font-size: 18px;
    }
    h3 {
      font-size: 14px;
    }
  }
`;

const Div = styled.div`
  width: 550px;
  margin-left: 6em;
  padding: 10px;
  text-align: justify;
  h1 {
    font-size: 1.9em;
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
  @media (max-width: 781px) {
    width: 100%;
    height: 100%;
    margin-left: 2px;
    h1 {
      font-size: 14px;
    }
    p {
      font-size: 13px;
    }
  }
`;

const Divi = styled.div`
  margin-top: 20px;
  cursor:nome;;
`;

const Divivideo = styled.div`
  width: 750px;
  height: 500px;
  padding: 0;
  margin: 0;
  @media (max-width: 781px) {
    width: 100%;
  } ;
`;

function PageHomeCont() {
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
        <Divivideo>
          <ShowSlide />
          <h6>
            Direitos de imagem autor:
            <a
              href="https://www.instagram.com/marcosnaofazisso/"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              Marcos Vinicius Ferreira
            </a>
          </h6>
        </Divivideo>
      </Section>
      <Section>
        <Divi>
          <iframe
            title="gif"
            src="https://giphy.com/embed/gi7h31nLA9c6DVxpyn"
            width="200"
            height="150"
          ></iframe>
        </Divi>
        <div>
          <h2>Quem somos?</h2>
          <h3>
            Deméter nasceu com a finalidade é reduzir a distância entre a comida
            abundante que seria desperdiçada e aqueles que a necessitam e
            infelizmente, não tem acesso a ela, sobretudo pela condição
            socioeconômica.<a href="/sobrenos">saiba mais</a>
          </h3>
        </div>
      </Section>
      <Section>
        <div>
          <h2>Como funciona?</h2>
          <h3>
            pode ser uma img ilustrando o caminho que o usuário segue até chegar
            ao objetivo. em construção
          </h3>
        </div>
      </Section>
      <Section>
        <div>
          <h2>Rank dos doadores que abraçaram a causa</h2>
          <h3>
            Afinal todos são bem vindos a contribuir com a nossa causa seja você
            tambem um doador. em construção
          </h3>
        </div>
      </Section>
    </>
  );
}
export default PageHomeCont;
