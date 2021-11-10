import React, { useState } from "react";
import {
  Section,
  Form,
  FormWrapper,
  FormHeader,
  FormBody,
  FormFieldset,
  FormInput,
  FormButton,
  FormLink,
  Forml,
} from "../../../assets/style/StyledFormGlobal";

function Registro() {
  let id = "";

  const [user, setUser] = useState({
    id: id,
    nome: "",
    email: "",
    senha: "",
    cnpj: "",
    zona: "",
  });

  const [status, setStatus] = useState({
    type: "",
    mensagem: "",
  });

  const valueInput = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  //Enviar os dados para o back-end
  const addUser = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    const saveDataForm = true;

    fetch("/rest/user/" + id, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    }).then(() => {
      window.location = "/pagecadastroalimento";
    });

    if (saveDataForm) {
      setStatus({
        type: "success",
        mensagem: "Usuário cadastrado com sucesso Bem vindo",
      });
      setUser({
        name: "",
        email: "",
        password: "",
      });
    } else {
      setStatus({
        type: "error",
        mensagem: "Erro: Usuário não cadastrado!",
      });
    }

    const listaUser = JSON.parse(localStorage.getItem("listaUser") || "[]");
    const isLogado = JSON.parse(localStorage.getItem("isLogado") || "[]");

    listaUser.push({
      name: user.nome,
      email: user.email,
      password: user.senha,
      cnpj: user.cnpj,
      zona:user.zona,
    });

    isLogado.push({
      logado: true,
    });

    localStorage.setItem("listaUser", JSON.stringify(listaUser));
    localStorage.setItem("isLogado", JSON.stringify(isLogado));
  };

  function validate() {
    if (!user.nome)
      return setStatus({
        type: "error",
        mensagem: "Erro: Necessário preencher o campo nome!",
      });
    if (!user.email)
      return setStatus({
        type: "error",
        mensagem: "Erro: Necessário preencher o campo e-mail!",
      });
    if (!user.senha)
      return setStatus({
        type: "error",
        mensagem: "Erro: Necessário preencher o campo senha!",
      });
    if (user.senha.length < 6)
      return setStatus({
        type: "error",
        mensagem: "Erro: A senha precisa ter pelo menos seis caracteres!",
      });

    return true;
  }

  function someCadastrar() {
    if (user.nome && user.email && user.senha && user.senha.length > 6) {
      return (
        (document.getElementById("form").style.visibility = "hidden"),
        window.location.replace("/PageCadastroAlimento")
      );
    }
  }

  return (
    <Section>
      <FormWrapper>
        <FormBody>
          <FormHeader>
            <h2>Cadastro Deméter</h2>
          </FormHeader>

          {status.type === "success" ? (
            <p style={{ color: "#033d11" }}>{status.mensagem}</p>
          ) : (
            ""
          )}
          {status.type === "error" ? (
            <p style={{ color: "#ff0000" }}>{status.mensagem}</p>
          ) : (
            ""
          )}

          <Form onSubmit={addUser} id="form">
            <label>
              <input type="radio" class="question" name="1" value="supermercado" />
              SuperMercado
            </label>
            <label>
              <input type="radio" class="question" name="1" value="entidade" />
              Entidade Assistêncial
            </label>

            <FormFieldset>
              <label>Razão Social: </label>
              <FormInput
                type="text"
                name="nome"
                placeholder="Nome completo da empresa"
                onChange={valueInput}
                value={user.nome}
              />
            </FormFieldset>

            <FormFieldset>
              <label>CNPJ: </label>
              <FormInput
                type="number"
                name="cnpj"
                placeholder="CNPJ da empresa"
                onChange={valueInput}
                value={user.cnpj}
              />
            </FormFieldset>

            <FormFieldset>
              <select>
                <optgroup label="Localização">
                  <option disabled selected>
                    Selecione sua região
                  </option>
                  <option value="norte">Zona Norte</option>
                  <option value="sul">Zona Sul</option>
                  <option value="leste">Zona Leste</option>
                  <option value="oeste">Zona Oeste</option>
                </optgroup>
              </select>
            </FormFieldset>

            <FormFieldset>
              <label>E-mail:</label>
              <FormInput
                type="email"
                name="email"
                placeholder="Melhor e-mail para cadastro"
                onChange={valueInput}
                value={user.email}
              />
            </FormFieldset>

            <FormFieldset>
              <label>Senha: </label>
              <FormInput
                type="password"
                name="senha"
                placeholder="Senha para acessar o site"
                autoComplete="on"
                onChange={valueInput}
                value={user.senha}
              />
            </FormFieldset>

            <FormFieldset>
              <FormButton type="submit" onClick={() => someCadastrar()}>
                Cadastrar
              </FormButton>
            </FormFieldset>
          </Form>
        </FormBody>
        <Forml>
          <FormLink href="./login">Já tem conta Clique aqui!</FormLink>
        </Forml>
        
      </FormWrapper>
      
    </Section>
  );
}
export default Registro;
