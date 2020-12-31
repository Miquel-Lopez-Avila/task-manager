import styled from 'styled-components';

export const TaskContainer = styled.div` 
   max-width: 1200px;
   margin:auto;
   box-sizing:border-box;
 
   
`;

export const PanelTasks = styled.div` 
   display:flex;
   flex-wrap: wrap;
   padding:20px;
   justify-content:center;
   box-sizing:border-box;
   
`;

export const PanelCrateTask = styled.div` 
   width:50%;
   margin:auto;
   padding:20px;
   box-sizing:border-box;
   background-color:#009bff91;
   
   border-radius:10px;
   transform:  ${({displayPanel})=> displayPanel?'translateY(-50)' : 'translateY(-100vh)'};
   opacity: ${({displayPanel})=> displayPanel?'1' : '0'};
   transition: all 0.3s ease-out;
   @media (max-width:700px){
      width: 90%;
   }
   
`;

export const Inputs = styled.input` 
   width:100%;
   margin-top:20px;
   margin-bottom:20px;
   height:20px;
   border-radius: 10px;
   border: 0px;
   
`;

export const TextArea = styled.textarea` 
   margin-top:20px;
   width:100%;
   height:50px;
   border-radius: 10px;
   border: 0px;
`;

export const Button = styled.button` 
    padding: 10px 50px;
    margin:auto;
    display:block;
    box-sizing:border-box;
    background-color: ${({theme})=>theme.primaryColor};
    color: white;
    border: none;
`;

export const ButtonADD = styled(Button)` 
    background-color:${({theme})=>theme.primaryColor};
    border-radius: 100px;
    padding: 20px 20px;
    opacity: ${({displayPanel})=> !displayPanel?'1' : '0'};
`;

export const Title = styled.h1` 
   font-weight:20px;
   font-size:bold;
  text-align:center;

`;

export const ButtonColorsContainer = styled.div` 
   display:flex;
    justify-content:space-around;
    margin-bottom: 40px;
    margin-top: 20px;
`;

export const ButtonColor = styled.button` 
   padding: 8px 25px;
   border-radius: 10px;
   height:30px;
   text-align:center;
   border: 0px;
   background-color:transparent;
   transition: 0.5s;
   &:hover{
    transition: 0.5s;
    background-color: green;
    color:white;
   }
`;

export const ButtonBlue = styled(ButtonColor)` 
  
   &:hover{
    background-color: #00609e;
   }
`;

export const ButtonPink = styled(ButtonColor)` 
    
   &:hover{
    background-color: #9e008b;
   }
`;