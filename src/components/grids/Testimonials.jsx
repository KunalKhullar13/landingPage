import React from "react";
import {
  TwoGridContainer,
  TwoGridItems,
  TestimonialImage,
  TestimonialImgContainer,
  TestimonialContainer,
  TestimonialData,
  UserInfo,
  TestimonialHeader,
  TestimonialSubheader,
} from "./styled";
const Testimonials = () => {
  const imgUrls = [
    "https://eliah-react-dfd2nqbsf-themesflat.vercel.app/assets/images/testimonial/TestimonialOne/1.png",
    "https://eliah-react-dfd2nqbsf-themesflat.vercel.app/assets/images/testimonial/TestimonialOne/2.png",
    "https://eliah-react-dfd2nqbsf-themesflat.vercel.app/assets/images/testimonial/TestimonialOne/3.png",
    "https://eliah-react-dfd2nqbsf-themesflat.vercel.app/assets/images/testimonial/TestimonialOne/4.png",
    "https://eliah-react-dfd2nqbsf-themesflat.vercel.app/assets/images/testimonial/TestimonialOne/5.png",
    "https://eliah-react-dfd2nqbsf-themesflat.vercel.app/assets/images/testimonial/TestimonialOne/6.png",
    "https://eliah-react-dfd2nqbsf-themesflat.vercel.app/assets/images/testimonial/TestimonialOne/7.png",
    "https://eliah-react-dfd2nqbsf-themesflat.vercel.app/assets/images/testimonial/TestimonialOne/8.png",
  ];
  return (
    <TestimonialContainer>
      <TestimonialHeader>TESTIMONIAL</TestimonialHeader>
      <TestimonialSubheader>What People Say?</TestimonialSubheader>
      <TwoGridContainer section={3}>
        <TwoGridItems>
          <TestimonialImgContainer>
            {imgUrls.map((image, key) => {
              return (
                <TestimonialImage
                  src={image}
                  key={key}
                  alt=""
                ></TestimonialImage>
              );
            })}
          </TestimonialImgContainer>
        </TwoGridItems>
        <TwoGridItems>
          <UserInfo>
            <h4>
              Alexander Ball <br />
              <span>New York</span>
            </h4>
            <div>Rating</div>
          </UserInfo>

          <TestimonialData>
            I love my lash tint! I don't have extremely blonde lashes, but I do
            like that they can be even darker than they are. It makes my eyes
            stand out more and I love the way it looks! Now, I just need to add
            on a bit of mascara for length and I am set.
          </TestimonialData>
        </TwoGridItems>
      </TwoGridContainer>
    </TestimonialContainer>
  );
};

export default Testimonials;
