import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/pagehome/PageHome";
import login from "./pages/login/PageLogin";
import cadastro from "./pages/login/cadastro/PageRegistro";
import forgetPassword from "./pages/login/setsenha/PageForgetPassword";
import editaralimento from "./pages/pageeditarproduto/PageEditar";
import cadastroalimento from "./pages/pagecadastroalimento/PageCadastroAlimento";
import alimento from "./pages/pagealimento/PageAlimento";
import mercado from "./pages/pagemercado/PageMercado";
import PageMercados from "./pages/pagemercado/PageMercado";
import sobrenos from "./pages/pagesobrenos/PageSobreNos";

function Routes() {
  return (
    <>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/login" component={login} />
        <Route path="/cadastro" component={cadastro} />
        <Route path="/forgetPassword" component={forgetPassword} />
        <Route path="/editar" component={editaralimento} />
        <Route path="/cadastroalimento" component={cadastroalimento} />
        <Route path="/alimento" component={alimento} />
        <Route path="/selecionamercado" component={mercado} />
        <Route path="/mercados" component={PageMercados} />
        <Route path="/sobrenos" component={sobrenos} />
      </Switch>
    </>
  );
}

export default Routes;
