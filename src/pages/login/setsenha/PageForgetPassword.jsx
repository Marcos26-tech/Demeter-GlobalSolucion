import React, { useState } from "react";
import {
  Form,
  FormWrapper,
  FormHeader,
  FormBody,
  FormFieldset,
  FormInput,
  FormButton,
  FormLink,
} from "../../../assets/style/StyledFormGlobal";

const ForgetPassword = () => {
  const [user, setUser] = useState({
    email: "",
  });

  const [status, setStatus] = useState({
    type: "",
    mensagem: "",
  });

  //Receber os dados do formulário
  const valueInput = (e) =>
    setUser({ ...user, [e.target.name]: e.target.value });

  //Enviar os dados para o back-end
  const addUser = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    const saveDataForm = true;

    if (saveDataForm) {
      setStatus({
        type: "success",
        mensagem: "Email confirmado verifique o email cadastrado",
      });
      setUser({
        email: "",
      });
    } else {
      setStatus({
        type: "error",
        mensagem: "Erro: Email não encontrado Usuário não cadastrado!",
      });
    }
  };

  function validate() {
    if (!user.email)
      return setStatus({
        type: "error",
        mensagem: "Erro: Necessário preencher o campo e-mail!",
      });

    return true;
  }

  return (
    <FormWrapper>
      <FormBody>
        <FormHeader>
          <h2>Recuperação de Senha</h2>
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

        <Form onSubmit={addUser}>
          <FormFieldset>
            <label>E-mail:</label>
            <FormInput
              type="email"
              name="email"
              placeholder="Email cadastrado"
              onChange={valueInput}
              value={user.email}
            />
          </FormFieldset>

          <FormFieldset>
            <FormButton type="submit">Recuperar a Senha</FormButton>
          </FormFieldset>
        </Form>

        <FormFieldset>
          <FormLink href="./login">Ir para o login</FormLink>
        </FormFieldset>
      </FormBody>
    </FormWrapper>
  );
};
export default ForgetPassword;
