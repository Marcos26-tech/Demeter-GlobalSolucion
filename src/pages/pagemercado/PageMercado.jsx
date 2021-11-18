import React, { useState, useEffect, useContext } from "react";
import CardContainer from "../../components/cardcontainer/CardContainer";
import CardMercado from "../../components/cardcontainer/CardMercado";
import { DivHome, H, Span } from "../../assets/style/StyleGloblal";
import UserContext from "../../store/user-context";

import mercado_1 from "../../assets/img/alimentos/mercado.gif";

const images = {
  1: mercado_1,
};

const PageMercado = () => {
  const userCtx = useContext(UserContext);
  const [mercados, setmercados] = useState([]);

  useEffect(() => {
    fetch(
      `http://localhost:8080/DemeterGlobalSolution/rest/reserva/${userCtx.idUsuario}`
    )
      .then((resp) => {
        return resp.json();
      })
      .then((resp) => {
        setmercados(resp);
      })
      .catch((error) => {
        console.log(error);
      });
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <DivHome>
        <H>
          <Span>
            Selecione um dos Supermercados abaixo disponíveis em sua região
          </Span>
        </H>
        <CardContainer>
          {mercados.map((mercado) => {
            return (
              <CardMercado
                key={mercado.idUsuario}
                id={mercado.idUsuario}
                foto={images[1]}
                nome={mercado.razaoSocial}
              ></CardMercado>
            );
          })}
        </CardContainer>
      </DivHome>
    </>
  );
};

export default PageMercado;
