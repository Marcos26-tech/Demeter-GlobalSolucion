import React, { useState } from "react";

import { useHistory } from "react-router-dom";

import { toast } from "react-toastify";

const UserContext = React.createContext({
  idUsuario: 0,
  cnpjUsuario: 0,
  razaoSocial: "",
  emailUusario: "",
  senhaUsuario: "",
  tipoUsuario: "",
  regiaoUsuario: "",
  isLoadingLogin: false,
  isLoggedIn: false,
  login: (email, password) => {},
  logout: () => {},
});

export const UserContextProvider = (props) => {
  const [idUsuario, setIdUsuario] = useState(0);
  const [cnpjUsuario, setCnpjUsuario] = useState(0);
  const [razaoSocial, setRazaoSocial] = useState("");
  const [emailUusario, setEmailUusario] = useState("");
  const [senhaUsuario, setSenhaUsuario] = useState("");
  const [tipoUsuario, setTipoUsuario] = useState("");
  const [regiaoUsuario, setRegiaoUsuario] = useState("");
  const [isLoadingLogin, setIsLoadingLogin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const history = useHistory();

  const loginHandler = async (formEmail, formPassword) => {
    // ENDPOINT LOGIN: Busca na Base de Dados se tem um usuário com o login e senha informados
    // Retorna o usuário se tiver. Se não tiver, retorna um erro (404)
    let user = {};
    setIsLoadingLogin(true);
    try {
      const response = await fetch("rest/usuario/login/"`${formEmail}/${formPassword}`);
      user = await response.json();
    } catch (err) {
      toast.error(
        "Ocorreu um erro ao tentar logar no sistema. Verifique se seu e-mail e senha estão corretos."
      );
      return;
    } finally {
      setIsLoadingLogin(false);
    }

    const {
      idUsuario: idUsuarioFetched,
      cnpjUsuario: cnpjUsuarioFetched,
      razaoSocial: razaoSocialFetched,
      emailUusario: emailUusarioFetched,
      senhaUsuario: senhaUsuarioFetched,
      tipoUsuario: tipoUsuarioFetched,
      regiaoUsuario: regiaoUsuarioFetched,
    } = user;

    setIdUsuario(idUsuarioFetched);
    setCnpjUsuario(cnpjUsuarioFetched);
    setRazaoSocial(razaoSocialFetched);
    setEmailUusario(emailUusarioFetched);
    setSenhaUsuario(senhaUsuarioFetched);
    setTipoUsuario(tipoUsuarioFetched);
    setRegiaoUsuario(regiaoUsuarioFetched);
    setIsLoggedIn(true);

    history.push("/home");
    // window.location.replace("/home");
  };

  const logoutHandler = () => {
    setIdUsuario(0);
    setCnpjUsuario(0);
    setRazaoSocial("");
    setEmailUusario("");
    setSenhaUsuario("");
    setTipoUsuario("");
    setRegiaoUsuario("");
    setIsLoggedIn(false);
  };

  const contextValue = {
    idUsuario,
    cnpjUsuario,
    razaoSocial,
    emailUusario,
    senhaUsuario,
    tipoUsuario,
    regiaoUsuario,
    isLoggedIn,
    isLoadingLogin,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <UserContext.Provider value={contextValue}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContext;
