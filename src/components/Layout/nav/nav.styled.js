import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavList = styled.ul` 
   display:flex;
   align-items:center;
   padding:0;
   
   li{
    margin:4px;
    margin-right:20px;
    list-style:none;
    color: ${({theme})=>theme.primaryColor};

   }
`;

export const Button = styled.button` 
    padding: 10px 50px;
    box-sizing:border-box;
    background-color: ${({theme})=>theme.primaryColor};
    color: white;
    border: none;
`;


export const Link = styled(NavLink)` 
    margin:4px;
    margin-right:20px;
    text-decoration:none;
    color: ${({theme})=>theme.primaryColor};

`;
