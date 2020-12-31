import { LanguageContainer, Copyright, Select } from './switchLenguageContainer.styled';
import { useContext } from "react";
import { I18nContext } from "../../../config/language/index";

const SwitchLenguageContainer = ({setLanguage}) => {
    const { language } = useContext(I18nContext);

    return (
        <LanguageContainer>
            <Copyright>Ⓒ TaskManager 2021</Copyright>
            <Select value={language} onChange={({target})=> setLanguage(target.value)}>
                <option disabled={language==='es'} value='es'>ES</option>
                <option disabled={language==='en'} value='en'>EN</option>
            </Select>
        </LanguageContainer>

    );
}

export default SwitchLenguageContainer;