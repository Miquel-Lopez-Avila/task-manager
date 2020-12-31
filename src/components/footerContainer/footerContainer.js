import { ContainerFooter } from './footerContainer.styled';
import SwitchTheme from "../footerContainer/switchLenguageTheme/switchThemeContainer";
import SwitchLenguage from "../footerContainer/switchLenguageTheme/switchLenguageContainer";

const FooterContainer = ({ setTheme, setLanguage }) =>{

    return (
        <ContainerFooter>
            <SwitchTheme setTheme={setTheme}/>
            <SwitchLenguage setLanguage={setLanguage}/>
        </ContainerFooter>
       
    );
}

export default FooterContainer;