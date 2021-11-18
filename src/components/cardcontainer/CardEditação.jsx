import { React, useState } from "react";
import styled from "styled-components";
import Modal from "./MotraModal";
import { Button } from "./CardMercado";

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
  @media (max-width: 783px) {
    width: 100%;
    padding: 1.4rem;
    margin: 1rem;
    img {
      width: 100%;
      height: 15rem;
    }
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
          
          <h3>{props.nome}</h3>
          <p>
            <em>Quantidade disponivel em estoque: {props.quantidade} Cxs</em>
          </p>
          <p>{props.validade}</p>
          <Button onClick={() => showModal()}>Editar alimento em estoque</Button>
        </div>
      </Produto>

      {show && (
        <Modal
          id={props.id}
          quantidade={props.quantidadeAlimento}
          validade={props.dataValidadeAlimento}
        ></Modal>
      )}
    </>
  );
};

export default CardEditacao;
