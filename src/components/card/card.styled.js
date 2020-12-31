import styled from 'styled-components';

export const CardFeatured = styled.div` 
   width:100%;
`;

export const CardFeaturedContainer = styled.div` 
   max-width: 1200px;
   margin:auto;
   display:flex;
   margin-bottom:80px;
   align-items:center;
   flex-direction:column;
   justify-content:center;

   @media (min-width:700px){
      flex-direction: ${({reverse}) => reverse?'row-reverse':'row'}; 
          
    }
`;

export const TextContainer = styled.div` 
  
   line-height:50px;
   
   flex-direction:column;
    text-align:center;
 
    @media (min-width:700px){
      padding-right:${({reverse}) => reverse?'0':'250px'};
      padding-left:${({reverse}) => reverse?'250px':'0px'};
       text-align:left;   
    }
`;

export const ImagenContainer = styled.div` 
  
`;

export const Imagen = styled.img` 
   max-width:300px;
   margin:auto;
   display:block;
`;

export const Title = styled.div` 
   color:  ${({theme})=> theme.primaryColor};
   font-size: 20px;
   border-bottom:3px solid  ${({theme})=> theme.primaryColor};
   max-width:200px;
   margin:auto;
   
   @media (min-width:700px){
      margin:0;  
   }
   
`;

export const SubTitle = styled.div` 
  font-weight: bold;
  font-size: 25px;
`;

export const Text = styled.div` 
   font-size: 15px;
   color: gray;
   margin-bottom:20px;
`;

