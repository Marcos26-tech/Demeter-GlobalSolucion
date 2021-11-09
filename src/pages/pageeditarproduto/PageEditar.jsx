import React, { useState, useEffect } from "react";

import alimento_1 from "../../assets/img/1.jpg";
import alimento_2 from "../../assets/img/2.jpg";
import alimento_3 from "../../assets/img/3.jpg";
import alimento_4 from "../../assets/img/4.jpg";
import alimento_5 from "../../assets/img/5.jpg";
import alimento_6 from "../../assets/img/6.jpg";
import alimento_7 from "../../assets/img/7.jpg";
import alimento_8 from "../../assets/img/8.jpg";
import alimento_9 from "../../assets/img/9.jpg";
import alimento_10 from "../../assets/img/10.jpg";

import AlimentoContainer from "../../components/cardcontainer/CardContainer";
import CardEditacao from "../../components/cardcontainer/CardEditacao";
import { DivHome, H, Span } from "../../assets/style/StyleGloblal";

const images = {
    1: alimento_1,
    2: alimento_2,
    3: alimento_3,
    4: alimento_4,
    5: alimento_5,
    6: alimento_6,
    7: alimento_7,
    8: alimento_8, 
    9: alimento_9,
    10: alimento_10,
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
