import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ContainerJumbotron, ContainerInfoStyled, InfoJumbotron, TextUpperCase, TextLowerCase, Button, ImgStyle } from "./jumbotron.styled";
import LogoJumbotron from "../../assets/img/banner.svg";
import { I18nContext } from "../../config/language/index";


const Jumbotron = () => {
    const { messages, language } = useContext(I18nContext);

    return (
        <ContainerJumbotron>
            <ContainerInfoStyled>
                <InfoJumbotron>
                    <TextUpperCase>{messages[language].JumbotronTitle1}</TextUpperCase>
                    <TextUpperCase>{messages[language].JumbotronTitle2}</TextUpperCase>
                    <TextUpperCase>{messages[language].JumbotronTitle3}</TextUpperCase>
                    <TextLowerCase>{messages[language].JumbotronText}</TextLowerCase>
                    <NavLink to='/posts'><Button>{messages[language].NavIteamButton}</Button></NavLink> 
                </InfoJumbotron>
                <InfoJumbotron>
                    <ImgStyle src={LogoJumbotron}></ImgStyle>
                </InfoJumbotron>
            </ContainerInfoStyled>
        </ContainerJumbotron>
    );
}

export default Jumbotron;