import styled from "styled-components";
import logo from "../../lib/svg/logo.svg";
import { Menu } from "./Menu";

export const Footer = () => {
    return (
        <FooterStyled>
            <Image src={logo} alt="" />;
            <Container>
                <Menu />
                <Adress>
                    г. Челябинск, <br /> Энтузиастов 2, 311
                </Adress>
            </Container>
        </FooterStyled>
    );
};

const FooterStyled = styled.div`
    padding: 64px 4.4vw 68px 4.4vw;
    display: flex;
    align-items: center;

    @media (max-width: 1280px) {
        padding: 55px 6.4vw 55px 4.4vw;
    }

    @media (max-width: 900px) {
        padding: 45px 8.4vw 45px 4.4vw;
    }

    @media (max-width: 600px) {
        padding: 30px 8vw 30px 4vw;
    }
`;

const Image = styled.img`
    @media (max-width: 600px) {
        width: 120px;
    }
`;

const Container = styled.div`
    flex-grow: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 1200px) {
    }
`;

const Adress = styled.h5`
    color: #fff;
    font-size: 13px;
    line-height: 16px;
`;
