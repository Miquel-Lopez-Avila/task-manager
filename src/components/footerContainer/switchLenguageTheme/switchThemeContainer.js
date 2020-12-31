import { Text, ContainerTheme, Button, ButtonBlue } from './switchThemeContainer.styled';
import { useContext } from "react";
import { I18nContext } from "../../../config/language/index";
import { blueTheme, darkTheme } from "../../../config/theme";

const SwitchThemeContainer = ({setTheme}) =>{
    const { messages, language } = useContext(I18nContext);

    return (
        <ContainerTheme>
            <Text>{messages[language].SelectTheme}</Text>
            <Button onClick={()=>setTheme(darkTheme)}>{messages[language].colorDark}</Button>
            <ButtonBlue onClick={()=>setTheme(blueTheme)}>{messages[language].colorBlue}</ButtonBlue>
        </ContainerTheme>
    );
}

export default SwitchThemeContainer;