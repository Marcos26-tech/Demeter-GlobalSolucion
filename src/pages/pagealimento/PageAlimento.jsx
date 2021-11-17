import React, { useState, useEffect } from "react";
import CardContainer from "../../components/cardcontainer/CardContainer";
import CardHome from "../../components/cardcontainer/CardHome";
import { DivHome, H, Span } from "../../assets/style/StyleGloblal";

import alimento_1 from "../../assets/img/alimentos/banana.jpg";

const images = {
  1: alimento_1,
};

const PageAlimento = (props) => {
  const [alimentos, setalimentos] = useState([]);

  let id = "";
  let idMercado = null;
  if (props.match.path.toLowerCase().includes("alimento")) {
    idMercado = props.match.params.id;
  }

  useEffect(() => {
    fetch(
      `http://localhost:8080/DemeterGlobalSolution/rest/reserva/alimentos/${idMercado}`
    )
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
          {alimentos.map((alimento) => {
            const [ano, mes, dia] = alimento.dataValidadeAlimento.split("-");
            const dataFormatada = `${dia}/${mes}/${ano}`;

            return (
              <CardHome
                key={alimento.idAlimento}
                id={alimento.idAlimento}
                estoque={alimento.idEstoque}
                foto={images[1]}
                nome={alimento.nomeAlimento}
                quantidade={alimento.quantidadeAlimento}
                validade={dataFormatada}
              ></CardHome>
            );
          })}
        </CardContainer>
      </DivHome>
    </>
  );
};

export default PageAlimento;
