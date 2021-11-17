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
  }
  h3 {
    text-align: center;
  }
  h5 {
    color: #f10a0a;
    font-size: 18px;
    margin: 0;
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
            <em> quantidade: {props.quantidade} </em>
          </p>
          <p>{props.validade}</p>
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
