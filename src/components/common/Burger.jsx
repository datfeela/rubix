import styled from "styled-components";

export const BurgerSvg = () => {
    return (
        <SvgStyled viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
            <title>70 Basic icons by Xicons.co</title>
            <path d="M41,14H7a2,2,0,0,1,0-4H41A2,2,0,0,1,41,14Z" />
            <path d="M41,26H7a2,2,0,0,1,0-4H41A2,2,0,0,1,41,26Z" />
            <path d="M41,38H7a2,2,0,0,1,0-4H41A2,2,0,0,1,41,38Z" />
        </SvgStyled>
    );
};

const SvgStyled = styled.svg`
    height: 100%;
    width: 100%;
    fill: #b4b4b4;
    transition: all 0.3s ease 0s;

    &:hover {
        cursor: pointer;
        fill: #fff;
    }
`;
