import React, { useState, useEffect, useContext } from "react";
import CardContainer from "../../components/cardcontainer/CardContainer";
import CardMercado from "../../components/cardcontainer/CardMercado";
import { DivHome, H, Span } from "../../assets/style/StyleGloblal";
import UserContext from "../../store/user-context";

import mercado_1 from "../../assets/img/alimentos/mercado.gif"; /*não ta funcionando o gif ainda*/

const images = { mercado_1 };

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
  }, []);
  return (
    <>
      <DivHome>
        <H>
          <Span>
            Selecione um dos Supermercados abaixo disponíveis em sua região
          </Span>
          <img src={images} alt="assd" />
        </H>
        <CardContainer>
          {mercados.map((mercado) => {
            return (
              <CardMercado
                key={mercado.id}
                id={mercado.id}
                foto={
                  images
                } /*não ta funcionando o gif ainda para o supermercado*/
                nome={mercado.nome}
              ></CardMercado>
            );
          })}
        </CardContainer>
      </DivHome>
    </>
  );
};

export default PageMercado;
