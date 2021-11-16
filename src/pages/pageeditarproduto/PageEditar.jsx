import React, { useState, useEffect, useContext } from "react";
import AlimentoContainer from "../../components/cardcontainer/CardContainer";
import CardEditacao from "../../components/cardcontainer/CardEditação";
import { DivHome, H, Span } from "../../assets/style/StyleGloblal";
import UserContext from "../../store/user-context";

import alimento_1 from "../../assets/img/alimentos/banana.jpg";

const images = {
  1: alimento_1,
};

function PageEditar() {
  const userCtx = useContext(UserContext);

  const [alimentos, setAlimentos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/DemeterGlobalSolution/rest/estoque/"`${userCtx.idUsuario}`
    )
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
          {alimentos.map((alimento) => {
            const [ano, mes, dia] = alimento.dataValidadeAlimento.split("-");
            const dataFormatada = `${dia}/${mes}/${ano}`;

            return (
              <CardEditacao
                key={alimento.idAlimento}
                id={alimento.idAlimento}
                foto={images[1]}
                nome={alimento.nomeAlimento}
                quantidade={alimento.quantidadeAlimento}
                validade={dataFormatada}
              ></CardEditacao>
            );
          })}
        </AlimentoContainer>
      </DivHome>
    </>
  );
}

export default PageEditar;
