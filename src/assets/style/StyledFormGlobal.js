import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  height: 90vh;
  padding-top: 5rem;
  background-size: cover;
  position: relative;
  background-image: url("https://financialtribune.com/sites/default/files/field/image/17january/04-zs-pomegranates_204-ab.jpg");
`;

export const Form = styled.form`
  width: 100%;
  height: 21rem;
  label {
    color: rgb(223, 211, 211);
  }
`;

export const FormWrapper = styled.div`
  background-color: #ffffff10;
  backdrop-filter:blur(12px);
  -webkit-backdrop-filter: blur(12px);
  overflow: hidden;
  padding: 0px 0 30px;
  margin: auto;
  width: 500px;
  height: 670px;
  font-family: Quicksand, arial, sans-serif;
  border-radius: 5px;
  @media (max-width: 783px) {
    margin: 3rem 3% auto;
    padding: 5px;
    height: 42rem;
    width: 92%;
  }
`;
export const FormHeader = styled.header`
  margin: 50px 0 10px;
  padding-top: 24px;
  padding-bottom: 19px;
  h2 {
    color: #ff9052;
    font-size: 22px;
    font-weight: bold;
    text-align: center;
  }
`;
export const FormBody = styled.div`
  padding-right: 32px;
  padding-left: 32px;
`;
export const FormFieldset = styled.fieldset`
  position: relative;
  padding: 0;
  margin: 0;
  border: 0;
  & + & {
    margin-top: 35px;
  }

  &:nth-last-of-type(2) {
    margin-top: 32px;
  }

  &:last-of-type {
    text-align: center;
  }
`;
export const FormInput = styled.input`
  padding: 12px 0;
  width: 100%;
  font-family: inherit;
  font-size: 14px;
  border-top: 0;
  border-right: 0;
  border-bottom: 1px solid #ddd;
  border-left: 0;
  transition: border-bottom-color 0.25s ease-in;
  margin-top: 5px;
  &:focus {
    border-bottom-color: rgb(255, 234, 0);
    outline: 0;
  }
  &:focus {
    &::-webkit-input-placeholder {
      position: relative;
      color: rgb(255, 234, 0);
      top: -10px;
      font-size: 13px;
      left: 4px;
    }
  }
`;

export const FormButton = styled.button`
  display: block;
  width: 100%;
  padding: 12px 0;
  font-family: inherit;
  font-size: 14px;
  font-weight: 700;
  color: rgb(255, 255, 255);
  background-color: rgb(238, 49, 49);
  border: 0;
  border-radius: 35px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);
  &:hover {
    background-image: linear-gradient(to right, #f6d365 0%, #fda085 100%);
    box-shadow: 0 15px 15px  #fda085;
    transform: translate(0, -5px);
  }
`;

export const FormLink = styled.a`
  text-decoration: none;
  margin: 10px 55px 0;
  display: inline-block;
  font-size: 15px;
  color: rgb(223, 211, 211);
  cursor: pointer;
  transition: color 0.25s ease-in;

  &:hover {
    color: rgb(25, 121, 6);
  }
  @media (max-width: 783px) {
    font-size: 13px;
    text-align: center;
  }
`;
