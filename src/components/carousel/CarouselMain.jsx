import {
  CarouselImage,
  MainCarousel,
  MainCarouselHeading,
  MainCarouselText,
  StyledButtons,
} from "./styled";
import { CarouselButtonStyled } from "./styled";

import { useState } from "react";
const CarouselMain = () => {
  const images = [
    "https://eliah-react-dfd2nqbsf-themesflat.vercel.app/assets/images/slider/SliderOne/1.png",
    "https://eliah-react-dfd2nqbsf-themesflat.vercel.app/assets/images/slider/SliderOne/2.png",
    "https://eliah-react-dfd2nqbsf-themesflat.vercel.app/assets/images/slider/SliderOne/3.png",
  ];
  const [activeIndex,setActiveIndex] = useState(0);
  const moveTo = (event) => {
    const buttonAction = event.target.getAttribute("action");
    if (buttonAction) {
      let newIndex =
        buttonAction === "next" ? activeIndex + 1 : activeIndex - 1;
      let newActiveIndex = activeIndex;
      if (newIndex === -1) newActiveIndex = images.length - 1;
      else if (newIndex === images.length) newActiveIndex = 0;
      else newActiveIndex = newIndex;
      setActiveIndex(newActiveIndex);
    }
  };
  return (
    <MainCarousel onClick={moveTo}>
      <CarouselButtonStyled action="next" data-action="next">
        &rarr;
      </CarouselButtonStyled>
      <CarouselButtonStyled action="prev" data-action="prev">
        &larr;
      </CarouselButtonStyled>
      <CarouselImage src={images[activeIndex]} alt="" />
      <div>
        <MainCarouselText>Bringing your</MainCarouselText>

        <MainCarouselHeading>inner beauty out</MainCarouselHeading>
        <StyledButtons>APPOINTMENT</StyledButtons>
      </div>
    </MainCarousel>
  );
};

export default CarouselMain;
