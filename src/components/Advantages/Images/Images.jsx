import styled from "styled-components";
import img from "../../../lib/img/img1.png";
import img2 from "../../../lib/img/img2.png";
import img3 from "../../../lib/img/img3.png";
import { Image } from "./Image";

let imageArr = [
    {
        image: img,
        text: (
            <span>
                <strong>Бесконечные</strong> <br /> десерты
            </span>
        ),
    },
    {
        image: img2,
        text: (
            <span>
                <strong>свободный</strong> <br /> дресс-код
            </span>
        ),
    },
    {
        image: img3,
        text: (
            <span>
                крутая <br /> <strong>библиотека</strong>
            </span>
        ),
    },
];

export const Images = () => {
    let imageArrMapped = imageArr.map((item) => <Image image={item.image} text={item.text} />);

    return <Container>{imageArrMapped}</Container>;
};

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 20px;

    @media (max-width: 800px) {
        grid-template-columns: 1fr;
        grid-row-gap: 20px;
    }
`;
