import styled from "styled-components";
export const TwoGridContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: ${(props) =>
    props.section === 2 ? "#f7f5f4" : props.section === 3 ? "#f7f5f4" : "#fff"};
  align-items: center;
  margin: 0 auto;
  margin-top: ${(props) => (props.section === 2 ? "12rem" : "0px")};
  max-width: ${(props) => (props.section === 2 ? "100%" : "80%")};
  @media (max-width: 768px) {
    flex-direction: ${(props) =>
      props.section === 2 ? "column-reverse" : "column"};
  }
`;

export const TwoGridItems = styled.div`
  flex-basis: 50%;
  @media (max-width: 768px) {
    flex-basis: 100%;
  }
`;
export const ImageContainer = styled.div`
  width: 80%;
  margin-top: ${(props) => (props.imageOrder === 1 ? "3rem" : "-8rem")};
  margin-left: ${(props) => (props.imageOrder === 1 ? "10px" : "15vw")};
  z-index: ${(props) => (props.imageOrder === 1 ? "1" : "1000")};

  img {
    width: ${(props) => (props.imageOrder === 1 ? "75%" : "60%")};
  }
`;
export const AboutSection = styled.div`
  flex-shrink: 2;
  align-self: flex-start;
  h6 {
    font-size: 1.2rem;
    font-weight: 400;
    letter-spacing: 2px;
  }
  span {
    color: #f26460;
  }
`;
export const AboutHeader = styled.h2`
  width: 90%;
  font-size: 2.5rem;
  font-weight: 400;
  line-height: 50px;
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;
export const AboutDescription = styled.p`
  color: #888;
  line-height: 32px;
  font-weight: 300;
  width: 90%;
`;
export const NumberedList = styled.div`
  margin-left: 35%;
  span {
  }
  p {
    line-height: 50px;
    &:hover {
      cursor: pointer;
    }
  }
  @media (max-width: 1168px) {
    margin-left: 25%;
  }
  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

export const NumberedListItem = styled.span`
  font-weight: 600;
  font-size: 1.6rem;
  letter-spacing: 2px;
  @media (max-width: 1168px) {
    font-size: 1.2rem;
  }
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;
export const ImageHolder = styled.div`
  height: 65vh;
  margin-top: -7rem;
  @media (max-width: 768px) {
    height: 30vh;
  }
`;
export const ServicesImage = styled.img`
  width: 100%;
  @media (max-width: 768px) {
    width: 80%;
    margin-top: 1rem;
    margin-left: 4rem;
  }
`;
export const TestimonialImage = styled.img`
  width: 120px;
  transition: all 0.1s linear;
  @media (max-width: 768px) {
    width: 130px;
  }
  @media (max-width: 1168px) {
    width: 100px;
  }
  @media (max-width: 375px) {
    width: 60px;
  }
  &:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
`;
export const TestimonialImgContainer = styled.div`
  display: flex;
  @media (min-width: 1200px) {
    padding: 10px 5px 0px 0px;
  }
  flex-wrap: wrap;
  margin-left: 1.5rem;
  @media (max-width: 475px) {
    transform: scale(1) !important;
  }
  @media (max-width: 768px) {
    transform: scale(0.9);
  }
  @media (max-width: 1168px) {
    transform: scale(0.8);
  }
`;
export const TestimonialContainer = styled.div`
  margin-top: 3rem;
  padding-top: 2.5rem;
  padding-bottom: 3rem;
  background-color: #f7f5f4;
`;
export const TestimonialHeader = styled.h2`
text-align: center;
    font-weight: 300;
    letter-spacing: 2px;
`
export const TestimonialSubheader = styled.h3`
text-align: center;
    font-weight: 500;
    font-size: 30px;
    letter-spacing: 1px;
`
export const TestimonialData = styled.p`
  padding: 1px 20px;
  text-align: justify;
  line-height: 20px;
  font-size: 12px;
  color: #444;
  margin-top: 0px;
  @media (min-width: 768px) {
    font-size: 22px;
    line-height: 30px;
    opacity: 0.9;
  }
`;
export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1px 20px;
  span {
    font-weight: 400;
    font-size: 12px;
  }
`;
export const ThreeGridContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 90%;
  margin: auto;
  justify-content: center;
  margin-top: 3rem;
  @media (max-width: 600px) {
    max-width: 100%;
  }
`;
export const TeamInfoCard = styled.div`
  margin: 10px;
  box-shadow: 1px 1px 5px #e7e6e6;
  padding: 1rem;
  text-align: center;
  flex-basis: 28%;
  height: 60vh;
  @media (max-width: 1170px) {
    height: 50vh;
    flex-basis: 40%;
  }
  @media (max-width: 600px) {
    flex-basis: 70%;
  }
`;
export const MemberImage = styled.img`
  width: 60%;
  transition: all 0.2s linear;
  &:hover {
    cursor: pointer;
    transform: scale(0.9);
  }
`;
export const TeamInfoSection = styled.div`
  margin-top: 1rem;
`;
export const TeamInfoHeader = styled.h3`
  text-align: center;
  font-size: 30px;
  font-weight: 400;
`;
export const TeamData = styled.div`
  padding: 0px 2rem;
`;
export const MemberRole = styled.h6`
  font-size: 14px;
  color: #f26460;
  font-weight: 400;
  margin-top: 0px;
`;
export const MemberName = styled.h2`
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 5px;
`;
