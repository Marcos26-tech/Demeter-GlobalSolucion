import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    padding: 0px;
    margin: 0px;
    outline: 0px;
    box-sizing: border-box;
    font-family:Popins, sans-serif;;  
  }
  
  html,body, #root{
    height: 100%;
    ::-webkit-scrollbar{
      width: 8px;
    }
    ::-webkit-scrollbar-track{
        background: #ccc;
    }
    ::-webkit-scrollbar-thumb{
        background: linear-gradient(180deg,#c8003c  0%, #fda085  100%);
        border-radius: 24px;
    }
  } 
   
  *,button,input{
    border: none;          
  }  
`;
