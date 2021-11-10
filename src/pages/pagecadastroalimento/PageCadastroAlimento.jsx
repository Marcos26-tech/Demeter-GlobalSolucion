import { React, useState } from "react";
import {
  Container,
  Form,
  Dividir,
  Div2,
  Button,
  Divi,
} from "../../assets/style/StyleCadastroAlimento";

// let id = "";

//   if (props.match.path.toLowerCase().includes("depo")) {
//     id = props.match.params.id;
//   }


function PageCadastroAlimento() {
  const [novoAlimento, setReceita] = useState({
    nomeAlimento: "",
    quantidadeAlimento: "",
    dataValidadeAlimento: "",
  });

  const adicionarAlimento = (e) => {
    e.preventDefault();
    fetch("/rest/cadastrar/" + id, {
      method: "post",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(novoAlimento),
    }).then(() => {
      alert("Receita cadastrada com sucesso!");
    });
  };

  const digitacao = (e) => {
    setReceita({ ...novoAlimento, [e.target.name]: e.target.value });
  };

  function sair() {
    localStorage.removeItem("isLogado");
    localStorage.removeItem("isentidade");
    window.location.replace("/login");
  }

  return (
    <Container>
      <h6>Cadastre novos Alimentos na Plataforma</h6>
      <Button onClick={sair}>Deslogar</Button>
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
              name="quantidade"
              onChange={digitacao}
              required
              placeholder="Digite a quantidade disponivel do Alimento"
            />
          </Divi>
        </Dividir>
        <Div2>
          <input
            type="data"
            name="validade"
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
