import React, { useState, useEffect } from "react";

import alimento_1 from "../../assets/img/alimentos/banana.jpg";


import CardContainer from "../../components/cardcontainer/CardContainer";
import CardHome from "../../components/cardcontainer/CardHome";
import { DivHome, H, Span } from "../../assets/style/StyleGloblal";

const images = {
  1: alimento_1,
};

const PageAlimento = () => {
  const [alimentos, setalimentos] = useState([]);

  useEffect(() => {
    fetch("/rest/menu/todos")
      .then((resp) => {
        return resp.json();
      })
      .then((resp) => {
        setalimentos(resp);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <DivHome>
        <H>
          <Span>As alimentos disponiveis para doação</Span>
        </H>

        <CardContainer>
          {alimentos.map((alimento) => (
            <CardHome
              key={alimento.id}
              id={alimento.id}
              foto={images[1]}
              nome={alimento.nomeAlimento}
              calorias={alimento.quantidade}
              validade={alimento.validade}>
            </CardHome>
          ))}
        </CardContainer>

      </DivHome>
    </>
  );
};

export default PageAlimento;