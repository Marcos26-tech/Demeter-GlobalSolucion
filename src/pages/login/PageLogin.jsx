import React, { useState, useEffect } from "react";
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
} from "../../assets/style/StyledFormGlobal";

function FormLogin() {

  // MÉTODO GET
  const [usuario, setUsuario] = useState([{
    idUsuario: null,
    cnpjUsuario: null,
    razaoSocial: "",
    emailUusario: "",
    senhaUsuario: "",
    tipoUsuario: "",
    regiaoUsuario: ""
  }])


  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  // const [status, setStatus] = useState({
  //   type: "",
  //   mensagem: "",
  // });

  //Receber os dados do formulário
  const valueInput = (e) =>
    setUser({ ...user, [e.target.name]: e.target.value });

  //Enviar os dados para o back-end
  const addUser = async (e) => {
    e.preventDefault();

    // if (!validate()) return;
    // Effect para trazer todo conteúdo do objeto
    alert(user.email + " / " + user.password)
    fetch("/rest/usuario/login/" + user.email + "/" + user.password).then((resp) => {
      return resp.json()
    }).then((resp) => {
      setUsuario(resp)
      alert("Setei o usuario: " +
        usuario.idUsuario + "\n" +
        usuario.cnpjUsuario + "\n" +
        usuario.razaoSocial + "\n" +
        usuario.emailUusario + "\n" +
        usuario.senhaUsuario + "\n" +
        usuario.tipoUsuario + "\n" +
        usuario.regiaoUsuario)
      console.log(resp)
    }).catch(error => {
      console.log(error)
    })
    // window.location.replace(`/home/${usuario.idUsuario}`)


    // const saveDataForm = true;
    // if (saveDataForm) {
    //   setStatus({
    //     type: "success",
    //     mensagem: "Logado com sucesso Bem vindo",
    //   });

    // } else {
    //   setStatus({
    //     type: "error",
    //     mensagem: "Erro: Usuário não cadastrado!",
    //   });
    // }
  };

  // function validate() {
  //   if (!user.email)
  //     return setStatus({
  //       type: "error",
  //       mensagem: "Erro: Necessário preencher o campo e-mail!",
  //     });
  //   if (!user.password)
  //     return setStatus({
  //       type: "error",
  //       mensagem: "Erro: Necessário preencher o campo senha!",
  //     });
  //   if (user.password.length < 6)
  //     return setStatus({
  //       type: "error",
  //       mensagem: "Erro: A senha precisa ter pelo menos seis caracteres!",
  //     });

  //   return true;
  // }

  const listaUser = JSON.parse(localStorage.getItem("listaUser") || "[]");

  function someLogin() {
    alert("Passei primeiro aqui...")

    if (user.email && user.password && user.password.length >= 6) {
      return (
        (document.getElementById("form").style.visibility = "hidden"),
        listaUser.push({
          logado: true,
          email: user.email,
          password: user.password,
        }),
        localStorage.setItem("listaUser", JSON.stringify(listaUser))
      );
    }
  }

  return (
    <Section>
      <FormWrapper>
        <FormBody>
          <FormHeader>
            <h2>Login Deméter</h2>
          </FormHeader>

          {/* {status.type === "success" ? (
            <p style={{ color: "#08b842fd" }}>{status.mensagem}</p>
          ) : (
            ""
          )}
          {status.type === "error" ? (
            <p style={{ color: "#ff0000" }}>{status.mensagem}</p>
          ) : (
            ""
          )} */}

          <Form onSubmit={addUser} id="form">
            <FormFieldset>
              <label>E-mail:</label>
              <FormInput
                type="email"
                name="email"
                placeholder="Email cadastrado"
                onChange={valueInput}
                value={user.email}
                required
              />
            </FormFieldset>

            <FormFieldset>
              <label>Senha: </label>
              <FormInput
                type="password"
                name="password"
                placeholder="Senha Cadastrada"
                autoComplete="on"
                onChange={valueInput}
                value={user.password}
              />
            </FormFieldset>

            <FormFieldset>
              <FormButton type="submit" onClick={() => someLogin()}>
                Login
              </FormButton>
            </FormFieldset>
          </Form>

          <FormFieldset>
            <FormLink href="/cadastro">
              Não tem uma conta Clique aqui e junte-se a nós!
            </FormLink>
          </FormFieldset>

          <FormFieldset>
            <FormLink href="/forgetPassword">Esqueceu sua senha!</FormLink>
          </FormFieldset>
        </FormBody>
      </FormWrapper>
    </Section>
  );
}
export default FormLogin;
