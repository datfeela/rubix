import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper"; //SwiperCore,
import "swiper/css";
import styled from "styled-components";
import { SlideContent } from "./SlideContent/SlideContent";

SwiperCore.use([Pagination]);

export const Carousel = ({ slides }) => {
    let slidesArr = slides.map((slide) => (
        <SwiperSlide>
            <SlideContent content={slide} />
        </SwiperSlide>
    ));
    return (
        <StyledSwiperContainer>
            <Swiper
                pagination={{
                    clickable: true,
                }}
                id="main"
                spaceBetween={10}
                slidesPerView={1}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
            >
                {slidesArr}
            </Swiper>
        </StyledSwiperContainer>
    );
};

const StyledSwiperContainer = styled.div`
    width: 970px;
    min-height: 400px;
    margin: 0 auto;
    padding: 50px 0px;

    @media (max-width: 1200px) {
        width: 80vw;
    }

    @media (max-width: 900px) {
        padding: 40px 0px;
    }

    @media (max-width: 600px) {
        width: 90vw;
        padding: 103px 0px 20px 0px;
    }
`;
