import styled from 'styled-components';

export const ContainerJumbotron = styled.div` 
   background-color: ${({theme})=>theme.primaryColor};
`;

export const ContainerInfoStyled = styled.div` 
    max-width: 1200px;
    margin:auto;
    display:flex;
    flex-direction:column;

   @media (min-width:700px){
      flex-direction:row;      
    }
`;

export const InfoJumbotron = styled.div` 
    margin-left:10px;
    padding: 100px 0px;
    margin-right:10px;
    
    @media (max-width:500px){
      text-align:center;
      
    }
`;

export const TextUpperCase = styled.p` 
   text-transform: uppercase;
   color:white;
   font-weight:bold;
   font-size: 40px;
   line-height: 20px;

   @media (max-width:500px){
      font-size: 25px;
   }
   @media (max-width:1100px){
      font-size: 27px;      
    }
`;

export const TextLowerCase = styled.p` 
   text-transform: lowercase;
   color:white;
   font-weight:bold;
   font-size: 20px;
   max-width: 500px;
`;

export const Button = styled.button` 
    font-size:18px;
    padding: 15px 25px;
    background-color: #074D05;
    color: white;
    border: none;
`;

export const ImgStyle = styled.img` 
   max-width:100%;
   padding-left: 100px;
   box-sizing: border-box;

   @media (max-width:1100px){
      padding-left: 0px;
   }
  
`;
