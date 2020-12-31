import styled from 'styled-components';

export const ContainerFooter = styled.div` 
   max-width:1200px;
   display:flex;
   margin:auto;
   margin-top:100px;
   justify-content:space-around;
   border-top:1px solid #ccc;
   padding: 15px;
   
   @media (max-width:500px){
      flex-direction:column;
   }
`;