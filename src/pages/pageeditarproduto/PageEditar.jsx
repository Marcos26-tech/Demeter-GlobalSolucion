import React, { useState, useEffect } from "react";
import AlimentoContainer from "../../components/cardcontainer/CardContainer";
import CardEditacao from "../../components/cardcontainer/CardEditação";
import { DivHome, H, Span } from "../../assets/style/StyleGloblal";

import alimento_1 from "../../assets/img/alimentos/banana.jpg";

const images = {
    1: alimento_1,
};

function PageEditar() {
  const [alimentos, setAlimentos] = useState([]);

  useEffect(() => {
    fetch("/rest/menu/")
      .then((resp) => {
        return resp.json();
      })
      .then((resp) => {
        setAlimentos(resp);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <DivHome>
        <H>
          <Span>Controle o estoque dos Alimentos</Span>
        </H>
        <AlimentoContainer>
          {alimentos.map((alimento) => (
            <CardEditacao
              key={alimento.id}
              id={alimento.id}
              foto={images[alimento.id]}
              nome={alimento.nomeAlimento}
              calorias={alimento.quantidade}
              alimento={alimento.validade}
            />
          ))}
        </AlimentoContainer>
      </DivHome>
    </>
  );
}

export default PageEditar;
