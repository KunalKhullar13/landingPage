import styled from "styled-components";
export const ServiceFormContainer = styled.div`
  background: url("https://eliah-react-dfd2nqbsf-themesflat.vercel.app/assets/images/cta/CTAOne/1.png")
    center center no-repeat;
  background-size: cover;
  margin-top: 3rem;
  padding: 3rem;
  @media (max-width: 500px) {
    padding: 1.5rem;
  }
`;
export const ServiceForm = styled.form`
  background: white;
  height: 70vh;
  max-width: 30%;
  text-align: center;
  margin: auto;
  padding: 1rem 2rem;
  h2 {
    font-size: 30px;
    margin-bottom: 2rem;
    font-weight: 400;
  }
  @media (max-width: 1168px) {
    max-width: 40%;
  }
  @media (max-width: 850px) {
    max-width: 60%;
  }
  @media (max-width: 500px) {
    max-width: 100%;
    padding: 1rem;
  }
`;
export const FormInput = styled.input`
  width: 80%;
  height: 2rem;
  margin: 10px;
  border: 0px;
  box-shadow: 1px 1px 10px #e6e6e6;
  padding: 10px;
  padding-left: 20px;
  &:focus {
    outline: none;
  }
`;
export const FormSelect = styled.select`
  width: 86%;
  color: #707070;
  height: 3.3rem;
  margin: 10px;
  border: 0px;
  box-shadow: 1px 1px 10px #e6e6e6;
  padding: 10px 20px;
`;
export const NewsLetterSection = styled.div`
  display: flex;
  max-width: 80%;
  margin: auto;
  padding-top: 1rem;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 2rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid #5d5d5d;
  @media (max-width: 500px) {
    justify-content: center;
  }
`;
export const SocialImageContainer = styled.div`
  padding: 10px;
  width: 20%;
  text-align: center;
  @media (max-width: 500px) {
    width: 100%;
    margin-top: 20px;
  }
`;
export const SocialImages = styled.img`
  background-color: white;
  cursor: pointer;
  width: 15%;
  padding-right: 15px;
  @media (max-width: 500px) {
    width: 10%;
  }
`;
export const SubscribeSection = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  span {
    font-size: 15px;
    color: #5d5d5d;
    font-weight: 300;
  }
`;
export const NewsLetterEmail = styled.input`
  height: 0.5rem;
  border: 0px;
  margin-left: 5px;
  box-shadow: 1px 1px 10px #e8e8e8;
  padding: 1rem;
`;
