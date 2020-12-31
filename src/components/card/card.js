import { useContext } from "react";
import { CardFeatured, CardFeaturedContainer, TextContainer, ImagenContainer, Imagen, Title, SubTitle, Text } from "./card.styled";
import { I18nContext } from "../../config/language/index";
import card1Img from "../../assets/img/completedTask.svg";
import card2Img from "../../assets/img/rocket.svg";
import card3Img from "../../assets/img/taskingg.svg";
import card4Img from "../../assets/img/task.svg";

const Card = () => {

    const { messages, language } = useContext(I18nContext);
    
    return (
        <CardFeatured>
            <CardFeaturedContainer>
                <TextContainer>
                    <Title>{messages[language].CardTitle}</Title>
                    <SubTitle>{messages[language].CardSubTitle}</SubTitle>
                    <Text>{messages[language].CardText}</Text>
                </TextContainer>
                <ImagenContainer>
                <Imagen src={card1Img}/>
                </ImagenContainer>
            </CardFeaturedContainer>
            <CardFeaturedContainer reverse>
                <TextContainer reverse>
                    <Title>{messages[language].CardTitle2}</Title>
                    <SubTitle>{messages[language].CardSubTitle2}</SubTitle>
                    <Text>{messages[language].CardText2}</Text>
                </TextContainer>
                <ImagenContainer>   
                    <Imagen src={card2Img}/>
                </ImagenContainer>
            </CardFeaturedContainer>
            <CardFeaturedContainer>
                <TextContainer >
                    <Title>{messages[language].CardTitle3}</Title>
                    <SubTitle>{messages[language].CardSubTitle3}</SubTitle>
                    <Text>{messages[language].CardText3}</Text>
                </TextContainer>
                <ImagenContainer>
                    <Imagen src={card3Img}/>
                </ImagenContainer>
            </CardFeaturedContainer>
            <CardFeaturedContainer reverse>
                <TextContainer reverse>
                    <Title>{messages[language].CardTitle4}</Title>
                    <SubTitle>{messages[language].CardSubTitle4}</SubTitle>
                    <Text>{messages[language].CardText4}</Text>
                </TextContainer>
                <ImagenContainer>
                <Imagen src={card4Img}/>
                </ImagenContainer>
            </CardFeaturedContainer>
        </CardFeatured>
    );
}

export default Card;