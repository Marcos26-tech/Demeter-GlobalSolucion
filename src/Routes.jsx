import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/pagehome/PageHome";
import login from "./pages/login/PageLogin";
import cadastro from "./pages/login/cadastro/PageRegistro";
import forgetPassword from "./pages/login/setsenha/PageForgetPassword"
import editaralimento from "./pages/pageeditarproduto/PageEditar"
import cadastroalimento from "./pages/pagecadastroalimento/PageCadastroAlimento"
import alimento from "./pages/pagealimento/PageAlimento"
import mercado from "./pages/pagemercado/PageMercado"
import estoque from './pages/pageestoque/PageEstoque'
import PageTodosAlimentos from "./pages/pagetodosalimentos/PageTodosAlimentos";
import PageMercados from "./pages/pagemercados/PageMercados";
import sobrenos from "./pages/pagesobrenos/PageSobreNos"


function Routes() {
  return (
    <>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/home/id/:id" component={Home} />
        <Route path="/login" component={login} />
        <Route path="/cadastro" component={cadastro} />
        <Route path="/forgetPassword" component={forgetPassword} />
        <Route path="/editar" component={editaralimento} />
        <Route path="/cadastroalimento" component={cadastroalimento} />
        <Route path="/alimento" component={alimento} />
        <Route path="/selecionamercado" component={mercado} />
        <Route path="/estoque" component={estoque} />
        <Route path="/mercados/:id" component={PageMercados} />
        <Route path="/alimentos/:id" component={PageTodosAlimentos} />
        <Route path="/sobrenos" component={sobrenos} />
      </Switch>
    </>
  );
}

export default Routes;