import styled from "styled-components";

export const StyledContainer = styled.section`
  display: flex;
  justify-content: space-evenly;
  margin: 0;
  @media (max-width: 780px) {
    display: block;
    width: 100%;
    margin: 0px;
    padding: 0px;
  } ;
`;

export const StyledCarrocelContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 780px) {
    width: 95%;
    padding: 1px;
    margin: 1px;
  };
`;

export const StyledArrowContainer = styled.div`
  font-size: 35px;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  cursor: pointer;
  &:hover {
    color: rgb(74, 85, 85);
  }
`;

export const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  @media (max-width: 780px) {
    width: 100%;
  } ;
`;

export const StyledImageContainer = styled.div`
  width: 100%;
  height: 100%;
`;
