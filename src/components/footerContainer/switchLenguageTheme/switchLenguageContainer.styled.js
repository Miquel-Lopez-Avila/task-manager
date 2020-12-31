import styled from 'styled-components';

export const LanguageContainer = styled.div` 
   width:40%;
   display:flex;
   align-items:center;
   justify-content:space-around;
   margin:auto;
   @media (max-width:500px){
    width:100%;
   }
`;

export const Copyright = styled.p` 
  color: ${({theme})=> theme.primaryColor};
`;

export const Select = styled.select` 
    padding: 7px;
    height: 40px;
`;
