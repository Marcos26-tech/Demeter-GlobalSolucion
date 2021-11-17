import React, { useState, useEffect } from "react";
import CardContainer from "../../components/cardcontainer/CardContainer";
import CardHome from "../../components/cardcontainer/CardHome";
import { DivHome, H, Span } from "../../assets/style/StyleGloblal";

import alimento_1 from "../../assets/img/alimentos/banana.jpg";
import alimento_2 from "../../assets/img/alimentos/maca.jpg";
import alimento_3 from "../../assets/img/alimentos/leite.jpg";
import alimento_4 from "../../assets/img/alimentos/uva.jpg";
import alimento_5 from "../../assets/img/alimentos/arroz.jpg";
import alimento_6 from "../../assets/img/alimentos/feijao.jpg";
import alimento_7 from "../../assets/img/alimentos/farinha.jpg";
import alimento_8 from "../../assets/img/alimentos/cafe.jpg";
import alimento_9 from "../../assets/img/alimentos/acucar.jpg";
import alimento_10 from "../../assets/img/alimentos/batata.jpg";
import alimento_11 from "../../assets/img/alimentos/tomate.jpg";
import alimento_12 from "../../assets/img/alimentos/roma.jpg";
import alimentoGeral from "../../assets/img/alimentos/imagegeral.jpg";

const images = {
  Banana: alimento_1,
  Maçã: alimento_2,
  Leite: alimento_3,
  Uva: alimento_4,
  Arroz: alimento_5,
  Feijão: alimento_6,
  Farinha: alimento_7,
  Café: alimento_8,
  Açúcar: alimento_9,
  Batata: alimento_10,
  Tomate: alimento_11,
  Romã: alimento_12,
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
                foto={
                  images[alimento.nomeAlimento]
                    ? images[alimento.nomeAlimento]
                    : alimentoGeral
                }
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
