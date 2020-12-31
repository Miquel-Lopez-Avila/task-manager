import { useContext } from "react";
import { FeaturedStyled, Title } from "./featured.styled";
import { I18nContext } from "../../config/language/index";
const Featured = () => {
    const { messages, language } = useContext(I18nContext);

    return (
        <FeaturedStyled>
            <Title>{messages[language].FeaturedTitle}</Title>
            <p>{messages[language].FeaturedText}</p>
        </FeaturedStyled>
    );
}

export default Featured;