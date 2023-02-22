import React from "react";
import { NewsLetterEmail, SocialImageContainer } from "./styled";
import { NewsLetterSection, SubscribeSection, SocialImages } from "./styled";
import { StyledButtons } from "../carousel/styled";
const Newsletter = () => {
  return (
    <NewsLetterSection>
      <h1>ELIAH</h1>
      <SubscribeSection>
        <span>Subscribe to Newsletter: </span>
        <NewsLetterEmail
          type="email"
          placeholder="Enter your email"
        ></NewsLetterEmail>
        <StyledButtons type="newsletter">Send</StyledButtons>
      </SubscribeSection>
      <SocialImageContainer>
        <SocialImages
          src="https://img.freepik.com/free-icon/facebook-logo_318-65107.jpg?size=338&ext=jpg"
          alt=""
        />
        <SocialImages
          src="https://cdn-icons-png.flaticon.com/512/123/123739.png?w=740&t=st=1675767886~exp=1675768486~hmac=4e72e586c07c9084cd7e985fb1addd27dedf4a7a49db1eb7fc16b586aaaacada"
          alt=""
        />
        <SocialImages
          src="https://img.freepik.com/free-icon/twitter-logo-black-background_318-76332.jpg?size=338&ext=jpg"
          alt=""
        />
        <SocialImages
          src="https://img.freepik.com/free-icon/youtube-symbol_318-65164.jpg?size=338&ext=jpg"
          alt=""
        />
      </SocialImageContainer>
    </NewsLetterSection>
  );
};

export default Newsletter;
