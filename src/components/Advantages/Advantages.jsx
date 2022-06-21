import styled from "styled-components";
import { Images } from "./Images/Images";

export const Advantages = () => {
    return (
        <Container>
            <Title>Работа у нас - это</Title>
            <Images />
        </Container>
    );
};

const Container = styled.div`
    width: 100%;
    padding: 100px 4.3vw;
    background-color: #fff;

    @media (max-width: 1200px) {
        padding: 65px 4.3vw;
    }

    @media (max-width: 900px) {
        padding: 40px 4.3vw;
    }

    @media (max-width: 600px) {
        padding: 25px 4.3vw;
    }
`;

const Title = styled.h2`
    font-weight: 700;
    font-size: 30px;
    line-height: 123.3%;
    margin-bottom: 60px;

    @media (max-width: 1200px) {
        margin-bottom: 45px;
    }

    @media (max-width: 900px) {
        margin-bottom: 30px;
        font-size: 28px;
    }

    @media (max-width: 600px) {
        margin-bottom: 20px;
        font-size: 26px;
    }

    @media (max-width: 480px) {
        text-align: center;
        font-size: 24px;
    }
`;
