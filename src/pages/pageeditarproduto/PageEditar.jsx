import React, { useState, useEffect } from "react";
import AlimentoContainer from "../../components/cardcontainer/CardContainer";
import CardEditacao from "../../components/cardcontainer/CardEditação";
import { DivHome, H, Span } from "../../assets/style/StyleGloblal";

import alimento_1 from "../../assets/img/alimentos/banana.jpg";

const images = {
    1: alimento_1,
};

// let id = "";

//   if (props.match.path.toLowerCase().includes("depo")) {
//     id = props.match.params.id;
//   }

function PageEditar() {
  const [alimentos, setAlimentos] = useState([]);

  useEffect(() => {
    fetch("/rest/editar")
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
              foto={images[1]}
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
