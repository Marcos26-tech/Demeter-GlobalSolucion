import React, { Fragment } from 'react';
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Routes  from './Routes';
import GlobalStyle from './Reset';

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <Header />
      <Routes />
      <Footer />
    </Fragment>
  );
}

export default App;