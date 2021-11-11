import React from "react";
import styled from "styled-components";

const Produto = styled.div`
  background-color: #575454cf;
  border-radius: 10px;
  width: 30%;
  padding: 5rem;
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
  h5 {
    color: #f10a0a;
    font-size:18px;
    margin:0;
  }
`;


const CardHome = (props) => {
  return (
    <Produto>
      <div>
        <img src={props.foto} alt={props.nome} />
        <h3>{props.nome}</h3>
        <p>
          <em>{props.quantidade} </em>
        </p>
        <p>{props.validade}</p>
      </div>
    </Produto>
  );
};

export default CardHome;
