import styled from "styled-components";
import { Theme } from "../../lib/styled/styled";

const menuItems = [
    {
        title: "Главная",
        link: "",
    },
    {
        title: "О нас",
        link: "",
    },
];

export const Menu = () => {
    let menuItemsMapped = menuItems.map((item) => (
        <Item>
            <a href={item.link}>{item.title}</a>
        </Item>
    ));

    return (
        <nav>
            <MenuStyled>{menuItemsMapped}</MenuStyled>
        </nav>
    );
};

const MenuStyled = styled.ul`
    margin-right: 7.5%;
    display: flex;
    justify-content: start;

    @media (max-width: 480px) {
        display: block;
    }
`;

const Item = styled.li`
    margin-right: 40px;

    & a {
        display: block;
        width: max-content;
        color: ${Theme.whiteColor};
        font-size: 13px;
        line-height: 16px;

        &:hover {
            text-decoration: underline;
        }
    }

    @media (max-width: 600px) {
        margin: 0px 20px 10px 0px;
    }
`;
