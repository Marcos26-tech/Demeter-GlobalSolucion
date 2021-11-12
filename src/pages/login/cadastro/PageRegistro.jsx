import React, { useState} from "react";
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
  const [user, setUser] = useState({
    cnpjUsuario: "",
    razaoSocial: "",
    emailUusario: "",
    senhaUsuario: "",
    tipoUsuario: "",
    regiaoUsuario: "",
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
    fetch("/rest/usuario/cadastro", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    }).then((response) => {
      if (response.status === 201) {
        setStatus({
          type: "success",
          mensagem: "Usuário cadastrado com sucesso!",
        });
        window.location.replace(`/home/${user.tipoUsuario}`);
      } else {
        setStatus({
          type: "error",
          mensagem: "Erro ao cadastrar usuário!",
        });
      }
    });

  };

  function validate() {
    if (!user.razaoSocial)
      return setStatus({
        type: "error",
        mensagem: "Erro: Necessário preencher o campo razão Social!",
      });
    if (!user.emailUusario)
      return setStatus({
        type: "error",
        mensagem: "Erro: Necessário preencher o campo e-mail!",
      });
    if (!user.senhaUsuario)
      return setStatus({
        type: "error",
        mensagem: "Erro: Necessário preencher o campo senha!",
      });
    if (user.senhaUsuario.length < 6)
      return setStatus({
        type: "error",
        mensagem: "Erro: A senha precisa ter pelo menos seis caracteres!",
      });
    if (!user.tipoUsuario)
      return setStatus({
        type: "error",
        mensagem: "Erro: Necessário preencher o campo tipo de usuário!",
      });
    if (!user.regiaoUsuario)
      return setStatus({
        type: "error",
        mensagem: "Erro: Necessário preencher o campo região!",
      });
    if (!user.cnpjUsuario)
      return setStatus({
        type: "error",
        mensagem: "Erro: Necessário preencher o campo CNPJ!",
      });
    if (user.cnpjUsuario.length < 14)
      return setStatus({
        type: "error",
        mensagem: "Erro: O CNPJ precisa ter 14 caracteres!",
      });
    return true;
  }  

  const isLogado = JSON.parse(localStorage.getItem("isLogado") || "[]");

  function someCadastrar() {
    console.log(user);
    if (user.razaoSocial && user.emailUusario && user.senhaUsuario && user.senhaUsuario.length > 6 && user.tipoUsuario && user.regiaoUsuario && user.cnpjUsuario && user.cnpjUsuario.length > 14) {
      return (
        (document.getElementById("form").style.visibility = "hidden"),
        isLogado.push({
          logado: true,
          tipoUsuario: user.tipoUsuario,
        }),
        localStorage.setItem("isLogado", JSON.stringify(isLogado))
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
              <input type="radio" name="tipoUsuario" value="supermercado" onChange={valueInput} />
              SuperMercado
            </label>
            <label>
              <input type="radio" name="tipoUsuario" value="entidade" onChange={valueInput} />
              Entidade Assistêncial
            </label>

            <FormFieldset>
              <label>Razão Social: </label>
              <FormInput
                type="text"
                name="razaoSocial"
                placeholder="Nome completo da empresa"
                onChange={valueInput}
                value={user.razaoSocial}
              />
            </FormFieldset>

            <FormFieldset>
              <label>CNPJ: </label>
              <FormInput
                type="number"
                name="cnpjUsuario"
                placeholder="CNPJ da empresa"
                onChange={valueInput}
                value={user.cnpjUsuario}
              />
            </FormFieldset>

            <FormFieldset>
              <select name="regiaoUsuario" onChange={valueInput}>
                <optgroup label="Localização">
                  <option disabled selected>
                    Selecione sua região
                  </option>
                  <option value="norte">Zona Norte</option>
                  <option value="sul" >Zona Sul</option>
                  <option value="leste">Zona Leste</option>
                  <option value="oeste">Zona Oeste</option>
                </optgroup>
              </select>
            </FormFieldset>

            <FormFieldset>
              <label>E-mail:</label>
              <FormInput
                type="email"
                name="emailUusario"
                placeholder="Melhor e-mail para cadastro"
                onChange={valueInput}
                value={user.emailUusario}
              />
            </FormFieldset>

            <FormFieldset>
              <label>Senha: </label>
              <FormInput
                type="password"
                name="senhaUsuario"
                placeholder="Senha para acessar o site"
                autoComplete="on"
                onChange={valueInput}
                value={user.senhaUsuario}
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
