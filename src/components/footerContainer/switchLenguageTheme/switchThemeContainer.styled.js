import styled from 'styled-components';

export const ContainerTheme = styled.div` 
   display: flex;
   width: 50%;
   justify-content:space-around;
   align-items:center;
   margin:auto;

   @media (max-width:500px){
    width:100%;
   }
`;

export const Text = styled.p` 
   font-weight:bold;
`;

export const Button = styled.button` 
   padding: 8px 25px;
   border-radius: 10px;
   height:30px;
   text-align:center;
   border: 0px;
   background-color:transparent;
   transition: 0.5s;
   &:hover{
    transition: 0.5s;
    background-color: #000000c2;
    color:white;
   }
`;

export const ButtonBlue = styled(Button)` 
  
   &:hover{
    background-color: #00609e;
   }
`;