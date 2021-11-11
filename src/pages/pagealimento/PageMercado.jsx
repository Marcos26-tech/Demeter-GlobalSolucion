import React, { useState, useEffect } from "react";
import CardContainer from "../../components/cardcontainer/CardContainer";
import CardMercado from "../../components/cardcontainer/CardMercado";
import { DivHome, H, Span } from "../../assets/style/StyleGloblal";

import mercado_1 from "../../assets/img/alimentos/mercado.gif";

const images = {mercado_1};


const PageMercado = () => {
  const [mercados, setmercados] = useState([]);

  useEffect(() => {
    fetch("/rest/estoque/2")
      .then((resp) => {
        return resp.json();
      })
      .then((resp) => {
        setmercados(resp);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <DivHome>
        <H>
          <Span>Selecione um dos SuperMercados abaixo disponíveis em sua região</Span>
        </H>
        <CardContainer>
          {mercados.map((mercado) => {
            <CardMercado
              key={mercado.id}
              id={mercado.id}
              foto={images[mercado_1]}
              nome={mercado.nome}
            
            ></CardMercado>
          })}
        </CardContainer>
      </DivHome>
    </>
  );
};

export default PageMercado;