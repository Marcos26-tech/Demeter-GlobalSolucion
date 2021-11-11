import React from "react";
import styled from "styled-components";
import PageHomeCont  from "./PageHomeCont";
import sol from "../video/sol.mp4";

const MainAreaStyled = styled.div`
  width: 100%;
  height: 85vh;  
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
      object-fit: cover;
      opacity: 0.7;
    }
`;

export const InnerLayout = styled.div`
  padding: 0px;
`;

function PageHome() {
  return (
    <>
      <MainAreaStyled>
      <video src={sol} muted playsInline autoPlay loop></video>
      <InnerLayout>
          <PageHomeCont />
      </InnerLayout>
      </MainAreaStyled>
    </>
  );
}

export default PageHome;
