import styled from 'styled-components';

export const StyleContainer = styled.div`
    background-color: #f3d9d9;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    padding:0.1px;
    @media(max-width:780px){
        width:100%;
        padding: 0px;
    };
`;
export const Box = styled.div`
    display: flex;
    margin: 5rem;
    border: 1.5px solid;
    border-image: linear-gradient(180deg,#c8003c  0%, #fda085  100%) 1;
    padding: 1rem;
    @media(max-width:780px){
        display:block;
        width:100%;
        padding:0;
        border:none;
        margin:0;    
    };

    div {
        position: relative;
        padding: 1%;
        border-radius: 20px;
        width: 50%;
        background: linear-gradient(180deg,#c8003c  0%, #fda085  100%);
        margin:3px;
        font-size: 15px;
        @media(max-width:780px){
            width:85%;
            padding:5px;
            margin-left:35px
        };
    };
    img {
        border-radius: 15%;
        width: 100%;
    };
    a, h3 {
    padding: 1px;
    font-size: 20px;
    font-weight: bold;
    color: #000000;
    display: flex;
    text-align:center;
    text-decoration: none;
    justify-content: center; 
    };
    p {
        color: #000000;
        font-size: 18px;
        text-align: center;
    };
`;

export const Paragrafo = styled.p`
    padding: 5px;
    margin-top:5rem;
    font-size: 20px;
    font-weight: bold;
    color: #000000;
    display: flex;
    text-align:center;
    justify-content: center; 
    @media(max-width:780px){
        width:100%;
        padding:0;   
    };
`;