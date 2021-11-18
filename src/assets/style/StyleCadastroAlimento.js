import styled from "styled-components";

export const Container = styled.div`
  margin: 1rem 0 1rem;
  padding: 0 50px 1rem;
  background: rgb(247, 246, 246);
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 80%;
  h6 {
    font-size: 23px;
    text-align: center;
    margin: 5px 0 29px;
    padding: 10px;
    font-weight: bold;
    background: -webkit-linear-gradient(#c8003c, #fda085);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
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
  }
  @media (max-width: 783px) {
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;
    h6 {
      font-size: 18px;
      text-align: center;
      margin: 5px 0 29px;
      padding: 10px;
      font-weight: bold;
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
`;

export const Button = styled.button`
  background-color: #c8003c;
  color: #fff;
  border: none;
  border-radius: 0.5rem;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  margin-top: 1rem;
  display: block;
  &:hover {
    background-color: #fda085;
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
