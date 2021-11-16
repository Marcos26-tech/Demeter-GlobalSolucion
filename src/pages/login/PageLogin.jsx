import React, { useState, useEffect, useContext } from "react";
import UserContext from "../../store/user-context";
import { Link } from "react-router-dom";
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
  const userCtx = useContext(UserContext);

  const handleLogin = (event) => {
    event.preventDefault();

    const email = event.target[1].value;
    const password = event.target[3].value;
    console.log(email);
    console.log(password);
    userCtx.login(email, password);
  };

  return (
    <Section>
      <FormWrapper>
        <FormBody>
          <FormHeader>
            <h2>Login Deméter</h2>
          </FormHeader>
          <Form onSubmit={handleLogin} id="form">
            <FormFieldset>
              <label>E-mail:</label>
              <FormInput
                type="email"
                id="email"
                placeholder="Email cadastrado"
                required
              />
            </FormFieldset>

            <FormFieldset>
              <label>Senha: </label>
              <FormInput
                type="password"
                id="password"
                placeholder="Senha cadastrada"
              />
            </FormFieldset>

            <FormFieldset>
              <FormButton type="submit">Login</FormButton>
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
