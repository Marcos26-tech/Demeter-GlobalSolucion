import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/pagehome/PageHome";
import login from "./pages/login/PageLogin";
import cadastro from "./pages/login/cadastro/PageRegistro";
import forgetPassword from "./pages/login/setsenha/PageForgetPassword"
import editaralimento from "./pages/pageeditarproduto/PageEditar"
import cadastroalimento from "./pages/pagecadastroalimento/PageCadastroAlimento"
import alimento from "./pages/pagealimento/PageAlimento"


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
        <Route path="/PageCadastroAlimento" component={cadastroalimento} />
        <Route path="/alimento" component={alimento} />


        {/* <Route path="/estoque" component={estoque} />
        <Route path="/estoque/:idUsuario" component={estoqueEspecifico} />
        <Link to={`estoque/${idUsuario}`}></Link>
        <Route path="/reserva" component={reserva} />
        <Link to={reserva}></Link> */}
        
      </Switch>
    </>
  );
}

export default Routes;