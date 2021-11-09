import styled from "styled-components";

export const Container = styled.div`
  margin: 1rem 0 0;
  padding: 0 50px;
  background: rgb(247, 246, 246);
  height: 100%;
  h6 {
    font-size: 23px;
    text-align: center;
    margin: 0 0 29px;
    padding: 5px;
    font-weight: bold;
    color: rgb(12, 139, 1);
  }
  form {
    height: 100%;
    border-radius: 0.5rem;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
      0 4px 6px -2px rgba(0, 0, 0, 0.05);
    padding: 1rem;
  }
  input,
  textarea {
    color: #4a5568;
    background-color: #fff;
    border: 1px solid #e2e8f0;
    font-size: 1rem;
    padding: 0.5rem 1rem;
    margin-top: 1rem;
    display: block;
    border-radius: 0.5rem;
    @media (max-width: 789px) {
      width: 88%;
      height: 6rem;
    }
  }
  @media (max-width: 789px) {
    margin: 3rem 3% auto;
    display: block;
    padding: 15px;
    height: 100%;
    h6 {
      font-size: 14px;
    }
  }
`;

export const Form = styled.form`
  textarea {
    width: 90%;
    height: 15rem;
  }
`;

export const Dividir = styled.div`
  display: flex;
  margin: 10px;
  input {
    width: 90%;
  }
  img {
    width: 15em;
    margin: auto;
  }
  @media (max-width: 789px) {
    input {
      width: 80%;
      height: 1.5rem;
    }
    label {
      margin: 15px;
      width: 2%;
    }
  }
`;

export const Div2 = styled.div`
  display: flex;
  margin: 10px;
  input {
    width: 50%;
  }
  @media (max-width: 789px) {
    textarea {
      margin: 2px;
      height: 3.5rem;
    }
    label {
      margin: 15px;
      width: 2%;
    }
  }
`;

export const Button = styled.button`
  background-color: rgb(25, 121, 6);
  color: #fff;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  border: none;
  &:hover {
    background-color: rgb(122, 243, 9);
    cursor: pointer;
  }
`;

export const Divi = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  margin: auto 0;
  input {
    margin: 1rem 0;
  }
`;
