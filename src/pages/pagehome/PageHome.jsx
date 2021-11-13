import React from "react";
import styled from "styled-components";
import PageHomeCont from "./PageHomeCont";
import sol from "../video/sol.mp4";
import { Link } from "react-router-dom";

const MainAreaStyled = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden;
    .overlay{
      width: 100%;
      height: 100%;
      position: absolute;
      right: -400px;
      top: -300px;
    }
  
    video{
      width: 100%;
      height: 100%;
      position: fixed;
      right: 0;
      bottom: 0;
      z-index: -100;
      min-width: 100%;
      min-height:100%;
      object-fit: cover;
      opacity: 0.3;
    }
`;

export const InnerLayout = styled.div`
  padding: 0px;
`;

function PageHome(props) {
  let id = ""
  if (props.match.path.toLowerCase().includes('cnpj')) {
    id = props.match.params.id
    console.log("id: "+  id)
  }

const aiMeuPaidoCeu = () => {
  alert("ID é: " + id)
  console.log(id)
}
  return (
    <>
      {/* <div>
        <Link title="estoque" to="/estoque">Desejo ir para o estoque</Link>
      </div> */}
      <div>
        <Link title="mercados" to={`/mercados/${id}`}>Quero ver os mercados da minha região</Link>
      </div>
      <div>
        <button onClick={aiMeuPaidoCeu}>ai meu pai do ceu</button>
      </div>
      <MainAreaStyled>
        <video src={sol} muted playsInline autoPlay loop time="5000"></video>
        <InnerLayout>
          <PageHomeCont />
        </InnerLayout>
      </MainAreaStyled>
    </>
  );
}

export default PageHome
