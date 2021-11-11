import React, { useState, useEffect } from "react";
import CardContainer from "../../components/cardcontainer/CardContainer";
import CardHome from "../../components/cardcontainer/CardHome";
import { DivHome, H, Span } from "../../assets/style/StyleGloblal";

import alimento_1 from "../../assets/img/alimentos/banana.jpg";

const images = {
  1: alimento_1,
};

const PageAlimento = () => {
  const [alimentos, setalimentos] = useState([]);

  useEffect(() => {
    fetch("/rest/estoque")
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
          <Span>Os alimentos disponíveis para doação</Span>
        </H>

        <CardContainer>
          {alimentos.map((alimento) => (
            <CardHome
              key={alimento.id}
              id={alimento.id}
              foto={images[alimento.id]}
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