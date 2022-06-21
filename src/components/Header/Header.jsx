import { useState } from "react";
import styled from "styled-components";
import logo from "../../lib/svg/logo.svg";
import burger from "../../lib/svg/burger.svg";
import { Menu } from "./Menu";
import { BurgerSvg } from "../common/Burger";

export const Header = () => {
    const [isBurgerActive, setIsBurgerActive] = useState(false);

    const handleActivateBurger = () => {
        setIsBurgerActive(!isBurgerActive);
        console.log(isBurgerActive);
    };

    return (
        <HeaderStyled>
            <img src={logo} alt="" />
            <Container expanded={isBurgerActive}>
                <Menu />
                <Phone href="tel:+79515424711">+7 (951) 542 47-11</Phone>
            </Container>
            <Burger onClick={handleActivateBurger}>
                <BurgerSvg/>
            </Burger>
        </HeaderStyled>
    );
};

const HeaderStyled = styled.div`
    margin-bottom: 69px;
    padding: 50px 4.4vw 0px 4.4vw;
    display: flex;
    align-items: center;

    @media (max-width: 1280px) {
        width: 91.1vw;
    }

    @media (max-width: 900px) {
        margin-bottom: 45px;
    }

    @media (max-width: 600px) {
        position: fixed;
        width: 100vw;
        z-index: 10;
        background-color: #262528;
        border-bottom: 1px solid #ffffff55;
        justify-content: space-between;
        margin: 0;
        padding: 20px 5.5vw 20px 6.5vw;
    }
`;

const Container = styled.div`
    flex-grow: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 600px) {
        position: absolute;
        opacity: ${(props) => (props.expanded ? "1" : "0")};
        visibility: ${(props) => (props.expanded ? "visible" : "hidden")};
        /* transform: ; */
        transform: ${(props) => (props.expanded ? "translateX(0px)" : "translateX(120px)")};
        background-color: #262528;
        top: 83px;
        left: 0;
        flex-direction: column;
        justify-content: space-between;
        align-items: start;
        height: calc(100vh - 83px);
        width: 100vw;
        transition: all 0.3s ease 0s;
    }
`;

const Phone = styled.a`
    color: #fff;
    font-weight: 700;
    font-size: 13px;
    line-height: 16px;

    &:hover{
        text-decoration: underline;
    }

    @media (max-width: 600px) {
        margin: 0 auto;
        padding: 0px 40px 30px 0px;
    }
`;

const Burger = styled.div`
    display: none;
    height: 28px;
    width: 28px;

    & img{
        height: 100%;
        width: 100%;
    }

    @media (max-width: 600px) {
        display: block;
    }
`;
