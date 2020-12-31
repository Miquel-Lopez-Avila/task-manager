import styled from 'styled-components';

export const TaskLayoutStyled = styled.div` 
   width: 22%;
   min-height: 300px;
   padding:30px;
   
   display:flex;
   flex-direction:column;
   background-color: ${({color})=> color};
   border-radius: 10px;
   word-wrap:break-word;
   position:relative;
   transition:0.5s;
   margin-bottom:20px;
   margin-right: 20px;
   box-sizing:border-box;
   &:hover{
      transform:scale(1.25);
      transition:0.5s;
      border: 1px solid black;
      z-index:999;
   }
   
   @media (max-width:1100px){
      width: 45%;
   }
   @media (max-width:700px){
      width: 100%;
      margin-right: 0px;

      &:hover{
      transform:scale(1.05);
      }
   }
`;

export const Title = styled.div` 
   font-size:30px;
   font-weight:bold;
   text-align:center;
`;

export const Subtitle = styled.div` 
  font-size:25px;
  margin-top:10px;
`;

export const Content = styled.div` 
   font-size:17px;
   margin-top:30px;
   margin-bottom:20px;
`;

export const ButtonDelete = styled.button` 
   padding: 8px 25px;
   border-radius: 10px;
   height:30px;
   text-align:center;
   border: 0px;
   background-color:transparent;
   position: absolute;
   bottom:20px;
   left:50%;
   transform:translateX(-50%);
   transition: 0.5s;
   &:hover{
    transition: 0.5s;
    background-color: red;
    color:white;
   }
`;