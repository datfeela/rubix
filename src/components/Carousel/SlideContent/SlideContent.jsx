import styled from "styled-components";
import { Theme } from "../../../lib/styled/styled";

export const SlideContent = ({ content }) => {
    return (
        <SlideContentContainer>
            <Title>{content.title}</Title>
            <Text>{content.text}</Text>
            {content.withButton === true && content.buttonText && <Button>{content.buttonText}</Button>}
        </SlideContentContainer>
    );
};

const Title = styled.h1`
    /* font-family: Montserrat; */
    margin-bottom: 40px;
    max-width: 61.8%;
    font-size: 50px;
    font-weight: 900;
    line-height: 128%;
    color: #f5f4f4;
    text-transform: uppercase;

    @media (max-width: 900px) {
        font-size: 36px;
        max-width: unset;
        width: 80%;
    }

    @media (max-width: 600px) {
        font-size: 28px;
        max-width: unset;
        width: 100%;
    }

    & strong {
        font-weight: 900;
        color: ${Theme.purpleColor};
    }
`;

const Text = styled.h4`
    /* font-family: Rubik; */
    margin-bottom: 40px;
    max-width: 58.8%;
    font-size: 20px;
    font-weight: 300;
    line-height: 190%;
    letter-spacing: 0.02em;
    color: #fcf9f6;

    @media (max-width: 900px) {
        font-size: 16px;
        max-width: unset;
        width: 80%;
    }

    @media (max-width: 600px) {
        font-size: 14px;
        max-width: unset;
        width: 100%;
    }
`;

const Button = styled.button`
    width: 270px;
    min-height: 60px;
    background-color: #9e81cb;
    border-radius: 5px;
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;
    letter-spacing: 0.065em;
    text-transform: uppercase;
    color: #ffffff;
    transition: all 0.3s ease 0s;

    &:hover {
        box-shadow: 5px 10px 20px rgba(255, 255, 255, 0.15);
    }

    @media (max-width: 900px) {
        font-size: 14px;
        width: 40%;
        min-height: 40px;
    }

    @media (max-width: 600px) {
        display: block;
        font-size: 13px;
        width: 60%;
        margin: 0 auto;
    }
`;

const SlideContentContainer = styled.div`
    min-width: 970px;

    @media (max-width: 900px) {
        min-width: unset;
        width: 100%;
    }
`;
