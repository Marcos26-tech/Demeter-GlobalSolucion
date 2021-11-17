import { React, useState, useContext } from "react";
import UserContext from "../../store/user-context";

import {
  Container,
  Form,
  Dividir,
  Div2,
  Button,
  Divi,
} from "../../assets/style/StyleCadastroAlimento";

function PageCadastroAlimento() {
  const userCtx = useContext(UserContext);

  const [novoAlimento, setReceita] = useState({
    nomeAlimento: "",
    quantidadeAlimento: "",
    dataValidadeAlimento: "",
  });

  const adicionarAlimento = (e) => {
    e.preventDefault();
    fetch(
      `http://localhost:8080/DemeterGlobalSolution/rest/estoque/cadastrar/${userCtx.idUsuario}`,
      {
        method: "post",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(novoAlimento),
      }
    ).then(() => {
      alert("Alimento cadastrado com sucesso!");
    });
  };

  const digitacao = (e) => {
    setReceita({ ...novoAlimento, [e.target.name]: e.target.value });
  };

  return (
    <Container>
      <h6>Cadastre novos Alimentos na Plataforma</h6>
      <Form onSubmit={adicionarAlimento}>
        <Dividir>
          <Divi>
            <input
              type="text"
              name="nomeAlimento"
              onChange={digitacao}
              required
              placeholder="Digite o nome do Alimento"
            />
            <input
              type="number"
              name="quantidadeAlimento"
              onChange={digitacao}
              required
              placeholder="Digite a quantidade disponivel do Alimento"
            />
          </Divi>
        </Dividir>
        <Div2>
          <input
            type="date"
            name="dataValidadeAlimento"
            onChange={digitacao}
            placeholder="Digite a data de Validade do Alimento"
          />
        </Div2>
        <Button type="submit">Cadastrar Alimento</Button>
      </Form>
    </Container>
  );
}

export default PageCadastroAlimento;
