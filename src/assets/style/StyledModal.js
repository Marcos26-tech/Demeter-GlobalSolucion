import styled from "styled-components";

export const Modal = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalContent2021 = styled.div`
  width: 59rem;
  background-color: #fff;
  max-height: calc(100vh - 150px);
  overflow-y: auto;
`;

export const ModalHeader = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalBody = styled.div`
  padding: 10px;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
`;
export const ModalFooter = styled.div`
  padding: 10px;
`;

export const FormButton2 = styled.button`
  display: inline-block;
  margin: 0 0 5px 5px;
  width: 25%;
  padding: 12px 0;
  font-family: inherit;
  font-size: 14px;
  font-weight: 700;
  color: rgb(8, 8, 8);
  background-color: #dd2039;
  border: 0;
  border-radius: 35px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);
  &:hover {
    box-shadow: 0 15px 15px #ff9052;
    transform: translate(0, -5px);
  }
  @media (max-width: 783px) {
    width: 50%;
  }
`;

export const FormButton3 = styled.button`
  display: inline-block;
  margin: 0 0 5px 5px;
  width: 25%;
  padding: 12px 0;
  font-family: inherit;
  font-size: 14px;
  font-weight: 700;
  color: rgb(8, 8, 8);
  background-color: #f3b895;
  border: 0;
  border-radius: 35px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);
  &:hover {
    box-shadow: 0 15px 15px #ff9052;
    transform: translate(0, -5px);
  }
  @media (max-width: 783px) {
    width: 50%;
    margin: 10px;
  }
`;

export const Container = styled.section`
  background: rgb(247, 246, 246);
  opacity: 98%;
  border-radius: 5px;
  padding: 1rem 3rem 5rem;
  margin: 3rem 8% 5rem;
  height: 100%;
  text-align: center;
  justify-content: center;
  @media (max-width: 789px) {
    margin: 3rem 3% auto;
    padding: 10px;
    height: 100%;
  }
`;

export const Section = styled.section`
  margin: 2px 10px 10px;
  padding: 2px;
  text-align: center;
  justify-content: center;
`;

export const Span = styled.span`
  h3 {
    font-size: 18px;
    font-weight: bold;
    color: #dd2039;
    text-align: center;
    margin: 20px 0 0;
  }
  @media (max-width: 789px) {
    h3 {
      font-size: 13px;
    }
  }
`;

export const StyledQuestionario = styled.div`
  border-radius: 5px;
  margin: 5px 0 12px;
  padding: 0 15px 20px;
  font-size: 14.5px;
  background-color: rgb(247, 246, 246);
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 10%), 0 4px 6px -2px rgb(0 0 0 / 5%);

  textarea {
    border-radius: 5px;
    margin: 1rem 0 0 0;
    width: 80%;
    height: 20em;
  }
  input {
    border-radius: 5px;
    margin: 1rem 0 0 0;
    width: 80%;
    height: 25px;
  }
`;
