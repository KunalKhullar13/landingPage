import React from "react";
import {
  TwoGridContainer,
  TwoGridItems,
  NumberedList,
  ImageHolder,
  NumberedListItem,
  ServicesImage,
} from "./styled";
const InfoSection2 = () => {
  return (
    <>
      <TwoGridContainer section={2}>
        <TwoGridItems order={1}>
          <NumberedList>
            <p>
              01.<NumberedListItem> Body Treatment</NumberedListItem>
            </p>
            <p>
              02.<NumberedListItem> Professinal makeup</NumberedListItem>
            </p>
            <p>
              03.<NumberedListItem> Manicure and Pedicure</NumberedListItem>
            </p>
            <p>
              04.<NumberedListItem> Hair cut & Coloring</NumberedListItem>
            </p>
          </NumberedList>
        </TwoGridItems>
        <TwoGridItems>
          <ImageHolder>
            <ServicesImage
              src="https://eliah-react-dfd2nqbsf-themesflat.vercel.app/assets/images/introduction/IntroductionTwo/1.png"
              alt=""
            />
          </ImageHolder>
        </TwoGridItems>
      </TwoGridContainer>
    </>
  );
};

export default InfoSection2;
