import styled from "styled-components";
import { Theme } from "../../../lib/styled/styled";

export const Image = ({ image, text }) => {
    return (
        <Container>
            <ImageStyled src={image} alt="" />
            <Text>{text}</Text>
        </Container>
    );
};

const Container = styled.div`
    position: relative;
    &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(to top, #050505, #1f0f091a);
    }
    @media (max-width: 800px) {
        width: 400px;
        min-width: 50%;
        max-width: 80%;
    }

    @media (max-width: 480px) {
        width: 100%;
        margin: 0 auto;
    }
`;

const ImageStyled = styled.img`
    display: block;
    width: 100%;
`;

const Text = styled.div`
    position: absolute;
    bottom: 30px;
    left: 30px;
    z-index: 1;
    font-weight: 700;
    font-size: 20px;
    line-height: 120%;
    text-transform: uppercase;
    color: #fff;

    & strong {
        color: ${Theme.purpleColor};
    }

    @media (min-width: 800px) and (max-width: 1100px) {
        font-size: 17px;
    }

    @media (max-width: 480px) {
        font-size: 18px;
    }
`;
