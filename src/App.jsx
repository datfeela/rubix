import styled from "styled-components";
import { Advantages } from "./components/Advantages/Advantages";
import { Carousel } from "./components/Carousel/Carousel";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";

const slides = [
    {
        id: 0,
        title: (
            <>
                доверь свою карьеру <strong>rubix</strong>
            </>
        ),
        text: "Сочетай свой образ жизни с работой над крутыми проектами, развивайся в строю дружного коллектива, чувствуй себя как дома рядом с мощной техникой!",
        withButton: true,
        buttonText: "Возьмите меня!",
    },
    {
        id: 1,
        title: "Lorem, ipsum.",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis vitae expedita nisi officia. Enim quia dicta eius aperiam aspernatur fuga?",
        withButton: true,
        buttonText: "Lorem, ipsum dolor.",
    },
    {
        id: 2,
        title: (
            <>
                Lorem, <strong>ipsum</strong> dolor.
            </>
        ),
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi autem quod eum.",
        withButton: false,
        buttonText: "",
    },
    {
        id: 3,
        title: "Lorem ipsum dolor sit.",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        withButton: true,
        buttonText: "Lorem, ipsum dolor.",
    },
];

function App() {
    return (
        <StyledApp>
            <Header />
            <Carousel slides={slides} />
            <Advantages />
            <Footer />
        </StyledApp>
    );
}

export default App;

const StyledApp = styled.div`
    width: 1280px;
    margin: 0 auto;
    background-color: #262528;

    @media (max-width: 1280px) {
        width: 100vw;
        margin: 0;
    }
`;
