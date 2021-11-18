import React, { useContext} from "react";
import UserContext from "../../store/user-context";

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

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target[1].value;
    const password = e.target[3].value;
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
                required
              />
            </FormFieldset>

            <FormFieldset>
              <FormButton type="submit">Login</FormButton>
            </FormFieldset>
          </Form>

          <FormFieldset>
            <FormLink href="/cadastro">
              <p>Não tem conta? Cadastre-se!</p>
            </FormLink>
          </FormFieldset>

          <FormFieldset>
            <FormLink href="/forgetPassword">
              <p>Esqueceu a senha?</p>
            </FormLink>
          </FormFieldset>
        </FormBody>
      </FormWrapper>
    </Section>
  );
}
export default FormLogin;
