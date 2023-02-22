import React from "react";
import {
  TwoGridContainer,
  TwoGridItems,
  ImageContainer,
  AboutSection,
} from "./styled";
import { StyledButtons } from "../carousel/styled";
const InfoSection1 = () => {
  return (
    <>
      <TwoGridContainer>
        <TwoGridItems>
          <ImageContainer imageOrder={1}>
            <img
              src="https://eliah-react-dfd2nqbsf-themesflat.vercel.app/assets/images/introduction/IntroductionOne/img1.png"
              alt=""
            />
          </ImageContainer>
          <ImageContainer imageOrder={2}>
            <img
              src="https://eliah-react-dfd2nqbsf-themesflat.vercel.app/assets/images/introduction/IntroductionOne/img2.png"
              alt=""
            />
          </ImageContainer>
        </TwoGridItems>
        <TwoGridItems order={2}>
          <AboutSection>
            <h6>
              ABOUT <span>ELIAH</span>
            </h6>
            <h2>When You Look Good You Feel Good</h2>
            <p>
              The top three occupations in the Beauty salons Industry Group are
              Hairdressers, hairstylists, & cosmetologists, Manicurists and
              pedicurists, Receptionists & information clerks, Supervisors of
              personal care and service workers, and Skincare specialists.
            </p>
            <StyledButtons type="info">APPOINTMENT</StyledButtons>
          </AboutSection>
        </TwoGridItems>
      </TwoGridContainer>
    </>
  );
};

export default InfoSection1;
