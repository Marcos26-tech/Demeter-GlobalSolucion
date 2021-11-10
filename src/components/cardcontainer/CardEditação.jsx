import { React, useState } from "react";
import styled from "styled-components";
import Modal from "./MotraModal";
import { Button } from "./CardReceita";

const Produto = styled.div`
  background-color: wheat;
  border-radius: 10px;
  width: 30%;
  padding: 1.4rem;
  margin: 1rem;
  img {
    width: 100%;
  }
  p {
    text-align:center;
    text-align:justify;
  }
  h3{
    text-align:center;
  }
`;

const CardEditacao = (props) => {
  const [show, setShow] = useState(false);

  const showModal = () => {
    setShow(!show);
  };

  return (
    <>
      <Produto>
        <div>
          <img src={props.foto} alt={props.nome} />
          <Button onClick={() => showModal()}>Editar</Button>
          <h3>{props.nome}</h3>
          <p>
            <em>{props.calorias} kcal</em>
          </p>
          <p>{props.receita}</p>
        </div>
      </Produto>

      {show && (
        <Modal
          id={props.id}
          nome={props.nomePrato}
          calorias={props.kcal}
          receita={props.receita}
        ></Modal>
      )}
    </>
  );
};

export default CardEditacao;