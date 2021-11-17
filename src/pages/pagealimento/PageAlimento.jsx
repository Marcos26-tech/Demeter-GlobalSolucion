import React, { useState, useEffect, useContext } from "react";
import UserContext from "../../store/user-context";
import CardContainer from "../../components/cardcontainer/CardContainer";
import CardHome from "../../components/cardcontainer/CardHome";
import { DivHome, H, Span } from "../../assets/style/StyleGloblal";

import alimento_1 from "../../assets/img/alimentos/banana.jpg";

const images = {
  1: alimento_1,
};

const PageAlimento = (props) => {
  const userCtx = useContext(UserContext);
  const [alimentos, setalimentos] = useState([]);

  useEffect(() => {
    fetch(
      `http://localhost:8080/DemeterGlobalSolution/rest/estoque/${userCtx.idUsuario}`
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
                key={alimento.id}
                id={alimento.id}
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
