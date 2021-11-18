import React, { useContext, useState } from "react";
import styled from "styled-components";
import { Button } from "./CardMercado";
import UserContext from "../../store/user-context";
import ModalReserva from "./MostraModalReserva";

const Produto = styled.div`
  background-color: #575454cf;
  border-radius: 10px;
  width: 30%;
  padding: 1.4rem;
  margin: 1rem;
  
  img {
    width: 100%;
    height: 15rem;
  }
  p {
    text-align: center;
    text-align: justify;
    margin-top: 1rem;
    em {
      font-size: 1.1rem;
      color: #f70707;
      text-align: center;
    }
  }
  h3 {
    margin-top: 1rem;
    text-align: center;
  }
`;

const CardHome = (props) => {
  const [show, setShow] = useState(false);

  const showModal = () => {
    setShow(!show);
  };

  return (
    <>
      <Produto>
        <div>
          <img src={props.foto} alt={props.nome} />
          <h3>{props.nome}</h3>
          <p>
            <em>Quantidade disponivel: {props.quantidade}</em>
          </p>
          <p>Data de validade {props.validade}</p>
          <Button onClick={() => showModal()}>Reservar alimento</Button>
        </div>
      </Produto>
      {show && (
        <ModalReserva
          idReserva={props.id}
          estoque={props.estoque}
          quantidade={props.quantidade}
        ></ModalReserva>
      )}
    </>
  );
};

export default CardHome;
