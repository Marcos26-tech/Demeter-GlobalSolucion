import { React, useState } from "react";
import styled from "styled-components";
import Modal from "./MotraModal";
import { Button } from "./CardAlimento";

const Produto = styled.div`
  background-color: #575454cf;
  border-radius: 10px;
  width: 30%;
  padding: 1.4rem;
  margin: 1rem;
  img {
    width: 100%;
  }
  p {
    text-align: center;
    text-align: justify;
  }
  h3 {
    text-align: center;
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
            <em>Quantidade disponivel: {props.quantidade}</em>
          </p>
          <p>{props.validade}</p>
        </div>
      </Produto>

      {show && (
        <Modal
          id={props.idAlimento}
          quantidade={props.quantidadeAlimento}
          validade={props.dataValidadeAlimento}
        ></Modal>
      )}
    </>
  );
};

export default CardEditacao;
